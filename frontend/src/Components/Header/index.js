import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import './styles.css'
import TimeRatingPopup from '../TimeRatingPopup'
import HeaderContainer from './HeaderContainer'
import ModalLocality from '../Modals/ModalLocality'
import ModalLogin from '../Modals/ModalLogin'

const Header = () => {
  const history = useHistory()
  const { city } = useSelector(state => state.getCity)
  const { userInfo } = useSelector(state => state.login)

  const [changeCity, setChangeCity] = useState(false)
  const [login, setLogin] = useState(false)
  const [timingDesc, setTimingDesc] = useState(false)

  return (
    <HeaderContainer city={city}>
      <div className='header__item-contacts'>
        <div className='header__about'>
          <div className='header__about-slogan'>
            Доставка пиццы{' '}
            <span className='city-name' onClick={() => setChangeCity(true)}>
              {city?.name}
            </span>
          </div>
          <div
            className='header__about-timing'
            onMouseEnter={() => setTimingDesc(true)}
            onMouseLeave={() => setTimingDesc(false)}
          >
            26 мин - 4,81 <span className='rating'>&#9733;</span>
          </div>
          {timingDesc && <TimeRatingPopup />}
        </div>
        <div className='header_item-phone'>
          <div className='contacts-phone__text'>Звонок по телефону</div>
          <a
            className='contacts-phone__number'
            href={`tel:+${city?.phoneNumber.match(/\d/g).join('')}`}
          >
            {city?.phoneNumber}
          </a>
        </div>
      </div>
      <div className='header__item_profile'>
        <button
          className='header__user-profile-button'
          onClick={() =>
            userInfo
              ? history.push(`/${city?.link}/profile#personal-data`)
              : setLogin(true)
          }
        >
          {userInfo ? 'Кабинет' : 'Войти'}
        </button>
      </div>
      {changeCity && <ModalLocality setChangeCity={setChangeCity} />}
      {login && <ModalLogin setLogin={setLogin} />}
    </HeaderContainer>
  )
}
export default Header
