import './index.css'
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, Fragment } from 'react'
import {
  fetchCitiesAction,
  getCityAction
} from '../../redux/actions/citiesActions'
import Loading from '../Loading'
import closeIcon from '../../images/close-icon.svg'

const ModalLocality = props => {
  const dispatch = useDispatch()

  const { megaCities, citiesGroup, columnsGroup, loading, error } = useSelector(
    state => state.citiesList
  )

  const { city } = useSelector(state => state.getCity)

  useEffect(() => {
    dispatch(fetchCitiesAction())

    if (city && !props.changeCity) props.history.push(city.link)
  }, [city, dispatch, props.changeCity, props.history])

  const onScroll = e => {
    if (e.target.scrollTop > 10) {
      document.querySelector('#scroll__gradient-top').style.display = 'block'
    } else
      document.querySelector('#scroll__gradient-top').style.display = 'none'

    if (e.target.scrollHeight > e.target.scrollTop + e.target.offsetHeight) {
      document.querySelector('#scroll__gradient-bottom').style.display = 'block'
    } else
      document.querySelector('#scroll__gradient-bottom').style.display = 'none'
  }

  const onInput = e => dispatch(fetchCitiesAction(e.target.value))

  const onClick = cityId => {
    if (props.changeCity) {
      localStorage.removeItem('city')
      props.setChangeCity(false)
    }

    dispatch(getCityAction(cityId))
  }

  return (
    <div>
      <div className='show-locality-selector'>
        <div className='show-locality-shadow' />
        <div className='locality-selector'>
          <div className='locality-selector__header'>
            <img className='logo-img' src={logo} alt='logo-img' />
            {props.changeCity && (
              <div className='locality-selector__title'>
                705 пиццерий в 13 странах
              </div>
            )}
          </div>
          <div className='locality-selector__actions'>
            <input
              className='locality-selector__input'
              placeholder='Поиск...'
              onInput={onInput}
            />
            <span className='locality-selector__search-icon' />
            <div className='locality-selector__megacities'>
              {loading ? (
                <Loading />
              ) : megaCities ? (
                megaCities.map(city => (
                  <Link
                    to={`/${city.link}`}
                    className='megacity'
                    key={city._id}
                    onClick={() => onClick(city._id)}
                  >
                    {city.name}
                  </Link>
                ))
              ) : (
                <h2>{error}</h2>
              )}
            </div>
          </div>
          <div className='locality-selector__content' onScroll={onScroll}>
            <div id='scroll__gradient-top' />
            {columnsGroup &&
              columnsGroup.map((group, i) => (
                <div className='locality-selector__group' key={i}>
                  {citiesGroup &&
                    Object.keys(citiesGroup).map(letter => {
                      return (
                        <div
                          className='locality-selector__table__group'
                          key={letter}
                        >
                          {group.map(
                            city =>
                              citiesGroup[letter].includes(city) && (
                                <Fragment key={city._id}>
                                  <span className='locality-selector__group-letter'>
                                    {letter}
                                  </span>
                                  <Link
                                    to={`/${city.link}`}
                                    className='locality-selector__link'
                                    onClick={() => onClick(city._id)}
                                  >
                                    {city.name}
                                  </Link>
                                </Fragment>
                              )
                          )}
                        </div>
                      )
                    })}
                </div>
              ))}
            <div id='scroll__gradient-bottom' />
            <img
              src={closeIcon}
              alt='Close Icon'
              className='close-icon'
              onClick={() => props.setChangeCity(false)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default ModalLocality
