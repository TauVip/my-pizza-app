import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink, withRouter } from 'react-router-dom'
import Loading from '../Loading'
import cartEmpty from '../../images/cart-empty.svg'
import './styles.css'

const Navigation = () => {
  const { city } = useSelector(state => state.getCity)

  const [cartDesc, setCartDesc] = useState(false)
  const [stick, setStick] = useState(null)

  useEffect(() => {
    const onScroll = () =>
      window.pageYOffset > 80 ? setStick(true) : setStick(false)
    window.addEventListener('scroll', onScroll)
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return city ? (
    <nav className='nav' data-stick={`${stick}`}>
      <div className='container'>
        <div className='header__items'>
          <Link className='sticky-logo' to={`/${city.link}`}>
            <svg
              data-stick={`${stick}`}
              id='logo_svg__Layer_1'
              x='0'
              y='0'
              viewBox='0 0 70 70'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M32.6 3c18.6 0 32.9 12.8 32.9 31.8C65.5 53.9 51.2 67 32.6 67H11.7C7.5 67 4 64.2 4 59.3V11c0-4.9 3.5-8 7.7-8h20.9z'
                fill='#ff6900'></path>
              <path d='M54 27.9c-.1.8-1 .8-1.4.1-1.3-2.2-3-2.6-5.7-2.8-2-.1-4.4.1-6.6.1-.4 0-.5-.3-.5-.4.4-1.9 2-5.4 3.7-5.7.8-.1 2.6-.3 3.6-.3 4.6 0 7.1 5.3 6.9 9M28 46c2.9.8 7 1.3 10.4 1 5.9-.4 10.4-2.6 12.9-4.2-1.5 3.8-7.2 6.2-12.6 6.8 0 .3-.1.5-.1.8 4.1-.2 8-1.6 9.8-2.8-1 3.7-6 5.2-10.6 5.5-.1.3-.3.6-.4.8 2.7 0 5.2-.4 6.7-.9-2.1 3.9-11.1 6.6-18.7 3 1.7-3.4 2.5-6.8 2.6-10m25.1-26.6c-1.8-1.7-4.2-2.5-6.3-2.4-3 0-5.5.8-9.2.9-2.5.1-4.8-5.4-7.8-6.1-1.3-2.9-4.3-3.3-6.1-1.8-1.7-1-4.3-.5-4.4 1.4-1.9-.6-4.4.4-3.3 3-4.7.1-5.5 4.3-2.4 4.7-4.1 2.3-2.2 6.3 1.2 5.5.6 6 3.3 13.8-1.1 15.7-.5.2-2.5.7-6.3-.2-1.1-.3-2.3-.6-3.4-.9v3.1c3.3.8 6.6 1.4 8.7 1.2 5.8-.6 6.1-5.4 5.8-9.6-.3-4.1-1.7-8.9-1.2-12.3l-.2-.2c-2.1 2.2-3.5 1.6-3.7.9-.3-1.4 2.2-3.2 3.6-3.8 0-.1.1-.2.1-.3-1.3.2-2.9 0-3-.9-.1-1.1 2.2-2.2 5.2-1.9.1 0 .1-.1.2-.1l-.6-.3c-.8-.4-1-1.1-.7-1.5.3-.5 1.1-.7 1.8-.7 1.1 0 2 .3 2.7.6.1 0 .1-.1.2-.1-.2-.2-.5-.4-.6-.6-.2-.3-.2-.8.1-1 .4-.3 1.5-.4 2.4.4l.5.5c.1 0 .2 0 .3-.1-.2-.2-.3-.5-.3-.7-.1-.3 0-.7.4-.8s.9.1 1.2.5.5 1 .6 1.3c-2.1.2-4.6 1-6.1 3.1-1.5 2-2.1 5.2-1.2 8.2.6 3.1 1.8 6 2.9 9v.1c2.4 6.9 7 23.9-15.3 32.9.8.5 2.4.9 3.7.9h2.3c4.6-2.4 7.7-5.3 9.9-8.2 10.2 4.5 19.5 2.2 23.5-5.2 2.7-1.6 4.4-4.9 4.5-7.2 1.7-2.1 2-4.7 1.5-6.5-.1-.4-.5-.4-1.1-.1-8.3 5-15.6 5.8-24.3 3.2-.2-3.4-.9-6.3-1.2-8.1-.2-3.5.9-5.2 7.3-3.1 4.2 1.1 6.1 3 7.6 4 .7.5 1.6 1.1 2.1.7.3-.2.4-.8.4-1.5-.1-1.9-1-5.1-1.8-6.3 2.5-.1 4.6-.1 5.7 0 2.4.4 2.6 1.7 2.9 2.2.7 2 4.6 1.5 4.9-.2.6-3.5.8-8.1-2.6-11.3m-44.4 30c-1.6-.1-3.2-.1-4.7 0v2.1c2.7-.6 4.4-.9 4.4-.9l.3-1.2z'></path>
              <path
                d='M33.7 27.5c-3.5-.8-7.4-1.8-9.4-4.8 0-.1-.1-.1-.2-.1s-.1.1-.1.1c0 .2 0 .3.1.5l-.3.1c-.5-.8-.7-1.7-.1-2.4.8-1 2.3-.9 3.3-.3l-.1.3c-.5-.1-1-.1-1.4.1-.3.2-.4.5-.2.8C27 25 32 25.7 37.9 25.2c.6 0 .7-.3.8-.6.5-2 1.4-3.9 2.8-5.3-1.1.2-2.1.2-2.9.2-3 .2-4.8-.2-5.3-.6l.1-.3c.3.1.7.1.7 0 .1-.1 0-.2-.1-.3-.6-.5-3.2-3.2-3.2-3.2-.3-2.3-3.6-2.3-4.9-.1l-.4-.1c.1-.5.3-.9.5-1.2-2.7.6-4.3 3.1-4.6 5.4-1.2 10.2 14.3 7.8 18.7 11.9.1.1.3.4.4.2.2-.2-1.8-2.6-6.8-3.7m-5.4-12.2c.7-.2 1.8.5 2.3 1.6.6 1.1.4 2.2-.3 2.5s-1.8-.5-2.3-1.6c-.1-.2-.1-.3-.2-.5h.1c.2.2.5.3.7.2.3-.2.2-.6 0-1-.2-.3-.5-.6-.8-.6l-.1-.1c.2-.3.4-.4.6-.5M51.3 42.8c-2.5 1.6-7 3.8-12.9 4.2-3.4.2-7.4-.2-10.4-1 0 1-.1 2-.3 3 1.7.4 4.6 1 8.9 1.1-.2 1.1-1.4 5.1-4.3 7.6 5.4.2 10.3-1.9 11.8-4.7-1.5.5-4.1 1-6.7.9.1-.3.3-.5.4-.8 4.6-.2 9.6-1.7 10.6-5.5-1.8 1.2-5.7 2.6-9.8 2.8 0-.3.1-.5.1-.8 5.4-.7 11.1-3 12.6-6.8'
                fill='#fff'></path>
            </svg>
          </Link>
          <ul className='products' data-stick={`${stick}`}>
            <li className='product'>
              <NavLink
                to={`/${city.link}#pizzas`}
                className='product-link'
                exact
                isActive={() => window.location.hash === '#pizzas'}
                activeStyle={{ color: 'rgb(255, 105, 0)' }}>
                Пицца
              </NavLink>
            </li>
            <li className='product'>
              <NavLink
                to={`/${city.link}#combos`}
                className='product-link'
                exact
                isActive={() => window.location.hash === '#combos'}
                activeStyle={{ color: 'rgb(255, 105, 0)' }}>
                Комбо
              </NavLink>
            </li>
            <li className='product'>
              <NavLink
                to={`/${city.link}#snacks`}
                className='product-link'
                exact
                isActive={() => window.location.hash === '#snacks'}
                activeStyle={{ color: 'rgb(255, 105, 0)' }}>
                Закуски
              </NavLink>
            </li>
            <li className='product'>
              <NavLink
                to={`/${city.link}#desserts`}
                className='product-link'
                exact
                isActive={() => window.location.hash === '#desserts'}
                activeStyle={{ color: 'rgb(255, 105, 0)' }}>
                Десерты
              </NavLink>
            </li>
            <li className='product'>
              <NavLink
                to={`/${city.link}#drinks`}
                className='product-link'
                exact
                isActive={() => window.location.hash === '#drinks'}
                activeStyle={{ color: 'rgb(255, 105, 0)' }}>
                Напитки
              </NavLink>
            </li>
            <li className='product'>
              <NavLink
                to={`/${city.link}#others`}
                className='product-link'
                exact
                isActive={() => window.location.hash === '#others'}
                activeStyle={{ color: 'rgb(255, 105, 0)' }}>
                Другие товары
              </NavLink>
            </li>
            <li className='product'>
              <NavLink
                to={`/${city.link}/bonusactions`}
                className='product-link'
                exact
                activeStyle={{ color: 'rgb(255, 105, 0)' }}>
                Акции
              </NavLink>
            </li>
            <li className='product'>
              <NavLink
                to={`/${city.link}/contacts`}
                className='product-link'
                exact
                activeStyle={{ color: 'rgb(255, 105, 0)' }}>
                Контакты
              </NavLink>
            </li>
            <li className='product'>
              <NavLink
                to={{ pathname: 'https://www.dodofranchise.ru' }}
                target='_blank'
                className='product-link'>
                Франшиза
              </NavLink>
            </li>
            <li className='product'>
              <NavLink
                to={`/${city.link}/about`}
                className='product-link'
                exact
                activeStyle={{ color: 'rgb(255, 105, 0)' }}>
                О нас
              </NavLink>
            </li>
            {window.location.pathname === `/${city.link}` && (
              <li className='product'>
                <span className='camera-link'>Прямой эфир</span>
              </li>
            )}
          </ul>
          <div
            className='nav__cart'
            onMouseEnter={() => setCartDesc(true)}
            onMouseLeave={() => setCartDesc(false)}>
            <button className='nav__cart-btn'>Корзина</button>
            {cartDesc && (
              <div className='floating-cart-container'>
                <i className='pointer-icon__cart'>
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
                <div className='floating-cart-content'>
                  <img src={cartEmpty} alt='Empty Cart' />
                  <h2 style={{ fontSize: 22, marginBottom: 10 }}>Ой, пусто!</h2>
                  <div>
                    Мы всегда доставляем бесплатно, но сумма заказа должна быть
                    от 2 500 тг.
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  ) : (
    <Loading />
  )
}
export default withRouter(Navigation)
