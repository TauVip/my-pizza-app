import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Loading from '../Loading'
import cartEmpty from '../../images/cart-empty.svg'
import './index.css'

const Navigation = () => {
  const { city } = useSelector(state => state.getCity)

  const [cartDesc, setCartDesc] = useState(false)

  return city ? (
    <nav>
      <div className='container'>
        <div className='header__items'>
          <ul className='products'>
            <li className='product'>
              <Link to='#pizzas' className='product-link'>
                Пицца
              </Link>
            </li>
            <li className='product'>
              <Link to='#combos' className='product-link'>
                Комбо
              </Link>
            </li>
            <li className='product'>
              <Link to='#snacks' className='product-link'>
                Закуски
              </Link>
            </li>
            <li className='product'>
              <Link to='#desserts' className='product-link'>
                Десерты
              </Link>
            </li>
            <li className='product'>
              <Link to='#drinks' className='product-link'>
                Напитки
              </Link>
            </li>
            <li className='product'>
              <Link to='#other' className='product-link'>
                Другие товары
              </Link>
            </li>
            <li className='product'>
              <Link to={`${city.link}/bonusactions`} className='product-link'>
                Акции
              </Link>
            </li>
            <li className='product'>
              <Link to={`${city.link}/contacts`} className='product-link'>
                Контакты
              </Link>
            </li>
            <li className='product'>
              <Link
                to={{ pathname: 'https://www.dodofranchise.ru' }}
                target='_blank'
                className='product-link'
              >
                Франшиза
              </Link>
            </li>
            <li className='product'>
              <Link to={`${city.link}/about`} className='product-link'>
                О нас
              </Link>
            </li>
            <li className='product'>
              <span to='/' className='camera-link'>
                Прямой эфир
              </span>
            </li>
          </ul>
          <div
            className='nav__cart'
            onMouseEnter={() => setCartDesc(true)}
            onMouseLeave={() => setCartDesc(false)}
          >
            <button className='nav__cart-btn'>Корзина</button>
            {!cartDesc && (
              <div className='floating-cart-container'>
                <i className='pointer-icon__cart'>
                  <svg
                    viewBox='0 0 18 12'
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      transform='translate(-2 0)'
                      fillRule='evenodd'
                      d='M 9.52569 1.60834L 3.07216 8.64855C 1.89626 9.93135 2.80626 12 4.54647 12L 17.4535 12C 19.1937 12 20.1037 9.93135 18.9278 8.64855L 12.4743 1.60834C 11.6816 0.743602 10.3184 0.743603 9.52569 1.60834Z'
                    ></path>
                  </svg>
                </i>
                <div className='floating-cart-content'>
                  <img src={cartEmpty} alt='Cart' />
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
export default Navigation

//nav logo
