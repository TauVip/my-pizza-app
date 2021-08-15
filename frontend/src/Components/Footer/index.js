import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Loading from '../Loading'
import secretBuyerImg from '../../images/secret-buyer.svg'
import linkAndroidImg from '../../images/app-link-android.svg'
import linkIosImg from '../../images/app-link-ios.svg'
import './styles.css'

const Footer = () => {
  const { city } = useSelector(state => state.getCity)

  return city ? (
    <footer className='page__footer'>
      <div className='secret-buyer'>
        <div className='container footer-part'>
          <img
            src={secretBuyerImg}
            alt='Secret Buyer'
            style={{ marginRight: 20 }}
          />
          <div className='secret-buyer__desc'>
            Стань тайным покупателем Додо Пиццы и получи пиццу в подарок
          </div>
          <Link
            to={{ pathname: 'https://dodocontrol.ru' }}
            target='_blank'
            className='secret-buyer__button'
          >
            Заполнить анкету
          </Link>
        </div>
      </div>
      <div className='container footer-nav-contacts'>
        <div style={{ display: 'flex' }}>
          <div className='links-section'>
            <span className='links-section__title'>Додо Пицца</span>
            <Link to={`/${city.link}/about`} className='links-section__link'>
              О нас
            </Link>
            <Link
              to={{ pathname: 'http://book.dodopizza.info' }}
              target='_blank'
              className='links-section__link'
            >
              Додо-книга
            </Link>
            <Link
              to={{ pathname: 'http://sila-uma.ru/aboutdodo' }}
              target='_blank'
              className='links-section__link'
            >
              Блог «Сила ума»
            </Link>
            <Link
              to={{ pathname: 'http://dodois.com' }}
              target='_blank'
              className='links-section__link'
            >
              Додо ИС
            </Link>
          </div>
          <div className='links-section'>
            <span className='links-section__title'>Работа</span>
            <Link
              to={{ pathname: 'http://rabotavdodo.kz' }}
              target='_blank'
              className='links-section__link'
            >
              В пиццерии
            </Link>
            <Link
              to={{ pathname: 'http://www.dodocc.kz' }}
              target='_blank'
              className='links-section__link'
            >
              В контакт центре
            </Link>
          </div>
          <div className='links-section'>
            <span className='links-section__title'>Партнерам</span>
            <Link
              to={{ pathname: 'http://www.dodofranchise.ru' }}
              target='_blank'
              className='links-section__link'
            >
              Франшиза
            </Link>
            <Link
              to={{ pathname: 'http://dodoinvest.com' }}
              target='_blank'
              className='links-section__link'
            >
              Инвестиции
            </Link>
            <Link
              to={{
                pathname:
                  'https://www.b2b-center.ru/firms/ooo-dodo-franchaizing/350318'
              }}
              target='_blank'
              className='links-section__link'
            >
              Поставщикам
            </Link>
            <Link
              to={{ pathname: 'http://www.dodoarenda.ru' }}
              target='_blank'
              className='links-section__link'
            >
              Предложить помещение
            </Link>
          </div>
          <div className='links-section'>
            <span className='links-section__title'>Это интересно</span>
            <Link
              to={{ pathname: 'http://www.bezperchatok.ru' }}
              target='_blank'
              className='links-section__link'
            >
              Почему мы готовим без перчаток?
            </Link>
            <Link
              to={{ pathname: 'http://www.dodofriendly.ru' }}
              target='_blank'
              className='links-section__link'
            >
              Экскурсии и мастер-классы
            </Link>
          </div>
        </div>
        <div className='footer-contacts'>
          <div style={{ marginBottom: 16 }}>
            <Link
              to={{
                pathname:
                  'https://app.appsflyer.com/ru.dodopizza.app?af_ad=icon&pid=dodopizza.site&af_click_lookback=7d&c=web'
              }}
              target='_blank'
              className='app-link'
            >
              <img src={linkAndroidImg} alt='App Link Android' />
            </Link>
            <Link
              to={{
                pathname:
                  'https://app.appsflyer.com/id894649641?af_ad=icon&pid=dodopizza.site&af_click_lookback=7d&c=web'
              }}
              target='_blank'
              className='app-link'
            >
              <img src={linkIosImg} alt='App Link Android' />
            </Link>
          </div>
          <div className='contacts'>
            <div className='contacts-phone'>
              <div className='contacts-phone__desc'>Звонок по телефону</div>
              <a
                href={`tel:+${city.phoneNumber.match(/\d/g).join('')}`}
                className='contacts-phone__num'
              >
                {city.phoneNumber}
              </a>
            </div>
            <a href='mailto:feedback@dodopizza.kz' className='contacts-link'>
              feedback@dodopizza.kz
            </a>
          </div>
        </div>
      </div>
      <div className='container copyright-social'>
        <div className='copyright'>
          <i className='dodo-pizza-text'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 305.8 64'>
              <path d='M291.3,35c-1.4,0-2.8-0.2-4.1-0.5l4-8.9l4,8.9C293.9,34.8,292.6,35,291.3,35 M305.4,41.8l-9.3-20.4c-1.1-2.2-2.5-3.2-4.6-3.2h-0.4c-2.2,0-3.6,1-4.7,3.2l-9.3,20.4c-0.9,2-0.3,3.8,1.6,4.5c1.6,0.7,3.4,0.1,4.2-1.5l0.1-0.2l2.1-4.4c2.1,0.7,4.2,1,6.4,1c2.1,0,4.2-0.3,6.1-1l2,4.4c0.6,1.6,2.4,2.4,4.1,1.8c0,0,0,0,0.1,0l0.2-0.1c1.6-0.7,2.4-2.6,1.7-4.2C305.5,42,305.5,41.9,305.4,41.8 M271.8,39.9H270V21.3c0.1-1.8-1.4-3.3-3.2-3.4h-0.3c-1.8-0.1-3.3,1.3-3.4,3.1c0,0.1,0,0.2,0,0.3v18.7h-11.9V21.3c-0.1-1.9-1.7-3.4-3.7-3.3c-1.8,0.1-3.2,1.5-3.3,3.3v22c-0.1,1.8,1.2,3.3,3,3.4h21v3c-0.1,1.8,1.2,3.3,3,3.4h0.3c1.7,0.1,3.3-1.2,3.4-2.9c0-0.1,0-0.3,0-0.4v-6.3c0.2-1.7-1.1-3.2-2.7-3.4c-0.2,0-0.4,0-0.6,0 M237.2,39.9h-1.8V21.3c0.1-1.8-1.4-3.3-3.2-3.4H232c-1.8,0-3.2,1.4-3.3,3.2c0,0.1,0,0.1,0,0.2v18.7h-11.9V21.3c-0.1-1.9-1.7-3.4-3.7-3.3c-1.8,0.1-3.2,1.5-3.3,3.3v22c-0.1,1.8,1.2,3.3,3,3.4h21v3c-0.1,1.8,1.2,3.3,3,3.4h0.3c1.7,0.2,3.3-1.1,3.5-2.8c0-0.2,0-0.4,0-0.6v-6.3c0.2-1.7-1.1-3.2-2.7-3.4c-0.2,0-0.4,0-0.6,0 M199,18.2h-0.3c-2,0-3.4,1-4.8,3l-11.2,15.9V21.5c0-1.8-1.5-3.3-3.3-3.3c-1.8,0-3.3,1.5-3.3,3.3v21.2c-0.1,2,1.3,3.7,3.3,3.8c0.2,0,0.4,0,0.5,0h0.4c2.1,0,3.6-1.1,4.9-3l11.2-15.9v15.5c0,1.8,1.5,3.3,3.3,3.3c1.8,0,3.3-1.5,3.3-3.3l0,0V22c0.2-2-1.3-3.7-3.3-3.8C199.5,18.2,199.2,18.2,199,18.2 M165.6,18.2h-19.2c-1.7-0.1-3.3,1.2-3.4,2.9c0,0.1,0,0.3,0,0.4v22c-0.1,1.8,1.4,3.3,3.2,3.4h0.3c1.8,0.1,3.3-1.3,3.4-3.1c0-0.1,0-0.2,0-0.3V24.8h12.3v18.7c-0.1,1.8,1.3,3.3,3.1,3.4c0,0,0,0,0,0h0.4c1.8,0.1,3.4-1.3,3.5-3.1c0-0.1,0-0.2,0-0.3v-22c0-1.8-1.4-3.3-3.1-3.3c0,0,0,0,0,0L165.6,18.2 M115.9,40.4c-4.5,0-7.7-3.4-7.7-8c0-4.3,3.5-7.7,7.7-7.7s7.7,3.5,7.7,7.7l0,0C123.7,37,120.5,40.4,115.9,40.4 M115.9,18c-7.9-0.2-14.4,6-14.6,13.9c0,0,0,0,0,0c0,0.2,0,0.4,0,0.6c-0.2,7.9,6.1,14.4,13.9,14.5c0,0,0,0,0,0h0.6c7.9,0.1,14.5-6.2,14.6-14.1c0,0,0,0,0,0c0-0.1,0-0.3,0-0.4c0.1-7.8-6.2-14.3-14-14.4L115.9,18 M88,40H76.7c0.8-1.5,1.3-3.1,1.7-4.8c0.4-2.3,0.7-4.7,0.7-7l0.1-3.3h8.7L88,40z M96.6,40h-1.8V21.5c0.1-1.8-1.2-3.3-3-3.4H75.6c-1.9,0-3.1,1.2-3.1,3.4V26c0.1,2.8-0.1,5.6-0.6,8.4c-0.3,2-1.1,3.9-2.2,5.6h-0.8c-1.7-0.1-3.2,1.1-3.3,2.8c0,0.2,0,0.4,0,0.6v6.3c-0.1,1.8,1.2,3.3,3,3.4h0.3c1.7,0.1,3.3-1.2,3.4-2.9c0-0.1,0-0.3,0-0.4v-3H93v3c-0.1,1.8,1.2,3.3,3,3.4h0.3c1.7,0.1,3.3-1.2,3.4-2.9c0-0.1,0-0.3,0-0.4v-6.3c0.2-1.6-0.9-3.2-2.6-3.4c-0.2,0-0.5,0-0.7,0 M50.3,40.4c-4.5,0-7.7-3.4-7.7-8c0-4.3,3.5-7.7,7.7-7.7c4.3,0,7.7,3.5,7.7,7.7l0,0l0,0C58.1,37,55.1,40.4,50.3,40.4 M50.3,18c-7.9-0.2-14.4,6-14.6,13.9c0,0,0,0,0,0c0,0.2,0,0.4,0,0.6c-0.2,7.9,6,14.4,13.9,14.5c0,0,0.1,0,0.1,0h0.6c7.9,0.1,14.5-6.2,14.6-14.1c0,0,0,0,0,0c0-0.1,0-0.3,0-0.4C65,24,58.7,18,50.3,18 M22.2,40H11c0.8-1.6,1.3-3.2,1.7-4.9c0.4-2.3,0.7-4.7,0.7-7l0.1-3.3h8.7L22.2,40z M30.8,40h-1.8V21.5c0.1-1.8-1.2-3.3-3-3.4H10c-1.9,0-3.1,1.2-3.1,3.4V26c0.1,2.8-0.1,5.6-0.6,8.4c-0.3,2-1.1,3.9-2.2,5.6H3.3c-1.7-0.1-3.2,1.1-3.3,2.8c0,0.2,0,0.4,0,0.6v6.3c-0.1,1.8,1.2,3.3,3,3.4h0.3c1.7,0.1,3.3-1.2,3.4-2.9c0-0.1,0-0.3,0-0.4v-3h20.7v3c-0.1,1.8,1.2,3.3,3,3.4h0.3c1.7,0.1,3.3-1.2,3.4-2.9c0-0.1,0-0.3,0-0.4v-6.3c0.2-1.7-1.1-3.2-2.7-3.4C31.2,39.9,31,39.9,30.8,40'></path>
            </svg>
          </i>{' '}
          © 2021
        </div>
        <div style={{ flexGrow: 1 }}>
          <Link to={`/${city.link}/legal`} className='bottom-link'>
            Правовая информация
          </Link>
          <Link
            to={{
              pathname:
                'https://drive.google.com/file/d/1GWaKPdU7t5URgMkh_X4pJqmyZuGr9FdQ'
            }}
            target='_blank'
            className='bottom-link'
          >
            Калорийность и состав
          </Link>
          <Link to={`/${city.link}/faq`} className='bottom-link'>
            Помощь
          </Link>
        </div>
        <div style={{ display: 'flex' }}>
          <a
            href='https://www.facebook.com/dodopizza'
            target='_blank'
            rel='noreferrer'
            className='social-link'
          >
            <i className='social-link-svg'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 140 140'>
                <path d='M29.56,24.55a5,5,0,0,0-5,5v80.88a5,5,0,0,0,5,5H73.1V80.26H61.25V66.53H73.1V56.41c0-11.74,7.17-18.13,17.65-18.13a97.08,97.08,0,0,1,10.58.54V51.09H94.07c-5.7,0-6.8,2.71-6.8,6.68v8.76h13.59L99.08,80.26H87.27v35.2h23.17a5,5,0,0,0,5-5V29.56a5,5,0,0,0-5-5H29.56Z'></path>
              </svg>
            </i>
          </a>
          <a
            href='http://instagram.com/dodopizzakz'
            target='_blank'
            rel='noreferrer'
            className='social-link'
          >
            <i className='social-link-svg'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 140 140'>
                <path d='M49.91,22.28A27.69,27.69,0,0,0,22.28,50V90a27.68,27.68,0,0,0,27.62,27.69H90.09A27.68,27.68,0,0,0,117.72,90V50a27.69,27.69,0,0,0-27.62-27.7H49.91Zm0,8.2H90.09A19.34,19.34,0,0,1,109.54,50V90a19.33,19.33,0,0,1-19.44,19.49H49.91A19.33,19.33,0,0,1,30.47,90V50A19.33,19.33,0,0,1,49.91,30.49Zm45.71,8.2a5.74,5.74,0,1,0,5.72,5.74A5.73,5.73,0,0,0,95.61,38.69ZM70,45.43A24.57,24.57,0,1,0,94.52,70,24.6,24.6,0,0,0,70,45.43Zm0,8.2A16.37,16.37,0,1,1,53.67,70,16.29,16.29,0,0,1,70,53.63Z'></path>
              </svg>
            </i>
          </a>
          <a
            href='https://vk.com/dodopizzakz'
            target='_blank'
            rel='noreferrer'
            className='social-link'
          >
            <i className='social-link-svg'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 140 140'>
                <path d='M127.62,39c0.84-2.8,0-4.86-4-4.86H110.41a5.71,5.71,0,0,0-5.75,3.74s-6.72,16.38-16.24,27c-3.08,3.08-4.48,4.06-6.16,4.06-0.84,0-2.1-1-2.1-3.78V39c0-3.36-.93-4.86-3.73-4.86H55.67a3.19,3.19,0,0,0-3.36,3c0,3.19,4.76,3.92,5.25,12.88V69.51c0,4.27-.77,5-2.45,5-4.48,0-15.38-16.45-21.84-35.28-1.27-3.66-2.54-5.14-5.91-5.14H14.14c-3.78,0-4.53,1.78-4.53,3.74,0,3.5,4.48,20.86,20.86,43.82,10.92,15.68,26.3,24.18,40.3,24.18,8.4,0,9.44-1.89,9.44-5.14V88.88c0-3.78.8-4.53,3.46-4.53,2,0,5.32,1,13.16,8.54,9,9,10.44,13,15.48,13h13.21c3.78,0,5.66-1.89,4.57-5.61s-5.47-9.1-11.15-15.48c-3.08-3.64-7.7-7.56-9.1-9.52-2-2.52-1.4-3.64,0-5.88C109.84,69.37,125.94,46.69,127.62,39Z'></path>
              </svg>
            </i>
          </a>
          <a
            href='https://www.youtube.com/user/dodomovie'
            target='_blank'
            rel='noreferrer'
            className='social-link'
          >
            <i className='social-link-svg'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 140 140'>
                <path d='M70,30.36c-22.31,0-44.61,1.71-49.51,5.12-9.8,6.83-9.8,62.19,0,69s89.22,6.83,99,0,9.8-62.19,0-69c-4.9-3.42-27.21-5.12-49.51-5.12h0ZM58.69,53.43L87.39,70,58.69,86.57V53.43Z'></path>
              </svg>
            </i>
          </a>
        </div>
      </div>
    </footer>
  ) : (
    <Loading />
  )
}
export default Footer
