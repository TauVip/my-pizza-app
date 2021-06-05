import { Link } from 'react-router-dom'

import './index.css'
import logo from './logo.svg'

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__items'>
          <div className='header__item_info'>
            <div className='header__item-logo'>
              <Link to='/'>
                <img src={logo} alt='logo-img' />
              </Link>
            </div>
            <div className='header__item-contacts'>
              <div className='header__about'>
                <div className='header__about-slogan'>
                  Доставка пиццы <span className='city-name'>Шымкент</span>
                </div>
                <div className='header__about-timing'>
                  26 мин * 4,81 <span className='rating'>&#9733;</span>
                </div>
              </div>
              <div className='header_item-phone'>
                <div className='contacts-phone__text'>Звонок по телефону</div>
                <div className='contacts-phone__number'>+7-777-777-77-77</div>
              </div>
            </div>
          </div>
          <div className='header__item_profile'>
            <button className='header__user-profile-button'>Войти</button>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
