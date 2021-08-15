import { Link, useHistory } from 'react-router-dom'
import logo from '../../images/logo-header.svg'
import { useSelector } from 'react-redux'
import ModalLocality from '../Modals/ModalLocality'
import { useState } from 'react'
import ModalLogin from '../Modals/ModalLogin'
import './styles.css'
import TimeRatingPopup from '../TimeRatingPopup'

const Header = () => {
  const history = useHistory()
  const { city } = useSelector(state => state.getCity)
  const { userInfo } = useSelector(state => state.login)

  const [changeCity, setChangeCity] = useState(false)
  const [login, setLogin] = useState(false)
  const [timingDesc, setTimingDesc] = useState(false)

  return city ? (
    <header>
      <div className='container'>
        <div className='header__items'>
          <div className='header__item_info'>
            <div className='header__item-logo'>
              <Link to={`/${city.link}`}>
                <img src={logo} alt='logo-img' />
              </Link>
            </div>
            <div className='header__item-contacts'>
              <div className='header__about'>
                <div className='header__about-slogan'>
                  Доставка пиццы{' '}
                  <span
                    className='city-name'
                    onClick={() => setChangeCity(true)}
                  >
                    {city.name}
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
                  href={`tel:+${city.phoneNumber.match(/\d/g).join('')}`}
                >
                  {city.phoneNumber}
                </a>
              </div>
            </div>
          </div>
          <div className='header__item_profile'>
            <button
              className='header__user-profile-button'
              onClick={() =>
                !userInfo
                  ? setLogin(true)
                  : history.push(`/${city.link}/profile#personal-data`)
              }
            >
              {!userInfo ? 'Войти' : 'Кабинет'}
            </button>
          </div>
        </div>
      </div>
      {changeCity && (
        <ModalLocality changeCity={changeCity} setChangeCity={setChangeCity} />
      )}
      {login && <ModalLogin setLogin={setLogin} />}
    </header>
  ) : (
    <header>
      <div className='container'>
        <div className='header__items'>
          <div className='header__item_info'>
            <div className='header__item-logo'>
              <Link to='/'>
                <img src={logo} alt='logo-img' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
