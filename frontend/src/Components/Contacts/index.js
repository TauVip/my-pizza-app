import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPizzeriasAction } from '../../redux/actions/pizzeriasActions'
import Loading from '../Loading'
import PizzeriaSection from './PizzeriaSection'
import './styles.css'

const Contacts = () => {
  const dispatch = useDispatch()

  const { city } = useSelector(state => state.getCity)
  const {
    loading,
    pizzeriasSections,
    pizzeriasLength,
    filteredPizzeriasLength
  } = useSelector(state => state.pizzeriasList)

  const [value, setValue] = useState('')
  const [fullDay, setFullDay] = useState(false)
  const [workingNow, setWorkingNow] = useState(false)

  useEffect(() => {
    if (city)
      dispatch(fetchPizzeriasAction(city._id, fullDay, workingNow, value))

    if (fullDay) setWorkingNow(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city, fullDay, value, workingNow])

  return city ? (
    <div className='contacts-page__content'>
      <div className='container'>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: '75%' }}>
            <h1 className='pizzerias__filter-title'>{city.name}</h1>
            <div>
              <span className='pizzerias__filter-search-icon' />
              <div>
                <input
                  type='text'
                  className='pizzerias__filter-input'
                  placeholder='Район, улица или станция метро'
                  value={value}
                  onChange={e => setValue(e.target.value)}
                />
                <a
                  href='https://yandex.ru/maps/162/almaty/?um=constructor%3AucXCclnfxaXXVbijRGRfmH6-p4tPol9e&amp%3Bsource=constructorLink&mode=usermaps&ll=76.915502%2C43.297174&z=12'
                  target='_blank'
                  rel='noreferrer'
                  className='pizzerias__delivery-zone'>
                  <i className='delivery-zone-icon'>
                    <svg
                      width='16'
                      height='22'
                      viewBox='0 0 16 22'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M8 1.64001C10.2096 1.64001 14.5405 2.93068 14.5405 8.09334C14.5405 13.256 10.1802 18.8489 8 21'
                        stroke='#D15700'
                        strokeWidth='1.4'
                        strokeLinecap='round'
                        strokeLinejoin='round'></path>
                      <path
                        d='M8 1.64001C5.87875 1.64001 1.45947 2.93068 1.45947 8.09334C1.45947 13.256 5.81982 18.8489 8 21'
                        stroke='#D15700'
                        strokeWidth='1.4'
                        strokeLinecap='round'
                        strokeLinejoin='round'></path>
                      <circle
                        cx='7.99912'
                        cy='8.44212'
                        r='2.35459'
                        stroke='#D15700'
                        strokeWidth='1.4'
                        strokeLinecap='round'
                        strokeLinejoin='round'></circle>
                    </svg>
                  </i>
                  Зона доставки
                </a>
              </div>
              <label
                className='pizzerias__filter-checkbox full-day'
                onClick={() => setFullDay(!fullDay)}
                data-checked={`${fullDay}`}>
                <span className='label-text'>Круглосуточно</span>
              </label>
              <label
                className='pizzerias__filter-checkbox working-now'
                onClick={() => !fullDay && setWorkingNow(!workingNow)}
                data-checked={`${workingNow}`}
                data-full-day={`${fullDay}`}>
                <span className='label-text'>Работает сейчас</span>
              </label>
            </div>
            <div className='pizzerias__filter-desc'>
              {filteredPizzeriasLength && (value || fullDay || workingNow)
                ? `Найдено ${filteredPizzeriasLength} пиццерий из ${pizzeriasLength}`
                : ''}
            </div>
          </div>

          <div className='contacts-pizzerias__information'>
            <div className='contacts-pizzerias__information-item'>
              <div className='contacts-pizzerias__information-title'>
                Телефон:
              </div>
              <a
                href={`tel:+${city.phoneNumber.match(/\d/g).join('')}`}
                className='contacts-pizzerias__information-desc'>
                {city.phoneNumber}
              </a>
            </div>
            <div className='contacts-pizzerias__information-item'>
              <div className='contacts-pizzerias__information-title'>
                Вопросы, отзывы и предложения:
              </div>
              <a
                href='mailto:feedback@dodopizza.kz'
                className='contacts-pizzerias__information-desc'>
                feedback@dodopizza.kz
              </a>
            </div>
          </div>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div style={{ margin: '0px -38.7813px' }}>
            {pizzeriasSections?.map((section, i) => (
              <div className='contacts-pizzerias__section-row' key={i}>
                {section.map(pizzeria => (
                  <PizzeriaSection pizzeria={pizzeria} key={pizzeria._id} />
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  ) : (
    <Loading />
  )
}
export default Contacts
