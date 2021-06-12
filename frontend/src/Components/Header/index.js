import { Link } from 'react-router-dom'

import './index.css'
import logo from '../../images/header-logo.svg'
import { useSelector } from 'react-redux'
import ModalLocality from '../Modals/ModalLocality'
import { useState } from 'react'
import ModalLogin from '../Modals/ModalLogin'

const Header = () => {
  const { city } = useSelector(state => state.getCity)

  const [changeCity, setChangeCity] = useState(false)
  const [login, setLogin] = useState(false)

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
                    onClick={() => setChangeCity(true)}>
                    {city.name}
                  </span>
                </div>
                <div className='header__about-timing'>
                  26 мин * 4,81 <span className='rating'>&#9733;</span>
                </div>
              </div>
              <div className='header_item-phone'>
                <div className='contacts-phone__text'>Звонок по телефону</div>
                <a
                  className='contacts-phone__number'
                  href={`tel:+${city.phoneNumber.match(/\d/g).join('')}`}>
                  {city.phoneNumber}
                </a>
              </div>
            </div>
          </div>
          <div className='header__item_profile'>
            <button
              className='header__user-profile-button'
              onClick={() => setLogin(true)}>
              Войти
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
    <header className='header'>
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
