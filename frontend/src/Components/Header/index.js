import { Link, useHistory } from 'react-router-dom'
import logo from '../../images/header-logo.svg'
import { useSelector } from 'react-redux'
import ModalLocality from '../Modals/ModalLocality'
import { useState } from 'react'
import ModalLogin from '../Modals/ModalLogin'
import './index.css'

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
                    onClick={() => setChangeCity(true)}>
                    {city.name}
                  </span>
                </div>
                <div
                  className='header__about-timing'
                  onMouseEnter={() => setTimingDesc(true)}
                  onMouseLeave={() => setTimingDesc(false)}>
                  26 мин - 4,81 <span className='rating'>&#9733;</span>
                </div>
                {timingDesc && (
                  <div className='timing-description__wrapper'>
                    <div className='timing-description'>
                      <i className='pointer-icon'>
                        <svg
                          viewBox='0 0 18 12'
                          version='1.1'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            transform='translate(-2 0)'
                            fillRule='evenodd'
                            d='M 9.52569 1.60834L 3.07216 8.64855C 1.89626 9.93135 2.80626 12 4.54647 12L 17.4535 12C 19.1937 12 20.1037 9.93135 18.9278 8.64855L 12.4743 1.60834C 11.6816 0.743602 10.3184 0.743603 9.52569 1.60834Z'></path>
                        </svg>
                      </i>
                      <div className='time-rate-desc'>
                        <div style={{ fontSize: 26 }}>26 минут</div>
                        <div style={{ marginTop: 2 }}>
                          Среднее время доставки
                        </div>
                        <div
                          style={{
                            marginTop: 5,
                            color: 'rgba(255, 255, 255, 0.7)'
                          }}>
                          Если не успеем за 60 минут, вы получите сертификат на
                          большую пиццу
                        </div>
                      </div>
                      <div className='time-rate-desc'>
                        <div style={{ fontSize: 26 }}>
                          4.81{' '}
                          <span className='rating'>
                            &#9733;&#9733;&#9733;&#9733;&#9733;
                          </span>
                        </div>
                        <div style={{ marginTop: 2 }}>121 оценка</div>
                        <div
                          style={{
                            marginTop: 5,
                            color: 'rgba(255, 255, 255, 0.7)'
                          }}>
                          Оценить заказ можно в мобильном приложении
                        </div>
                      </div>
                      <div
                        style={{
                          marginTop: 16,
                          color: 'rgba(255, 255, 255, 0.7)',
                          lineHeight: 1
                        }}>
                        Данные за последние 7 дней в вашем городе
                      </div>
                    </div>
                  </div>
                )}
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
              onClick={() =>
                !userInfo
                  ? setLogin(true)
                  : history.push(`/${city.link}/profile#personal-data`)
              }>
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
