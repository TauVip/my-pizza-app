import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useHistory, withRouter } from 'react-router-dom'
import Loading from '../Loading'
import cartEmpty from '../../images/cart-empty.svg'
import './styles.css'
import {
  addQuantityAction,
  clearSendingProductAction,
  deleteProductCartAction,
  getProductsCartAction,
  reduceQuantityAction
} from '../../redux/actions/productsCartActions'

const Navigation = () => {
  const y = document.querySelector('header').offsetHeight

  const history = useHistory()
  const dispatch = useDispatch()

  const { city } = useSelector(state => state.getCity)
  const { sizeVars } = useSelector(state => state.pizzasList)
  const { productsCart } = useSelector(state => state.productsCart)
  const sendingProduct = useSelector(state => state.sendingCart)
  console.log(productsCart, sendingProduct)

  const [stick, setStick] = useState(null)
  const [showGradientTop, setShowGradientTop] = useState(false)
  const [showGradientBottom, setShowGradientBottom] = useState(false)

  const onScrollCart = () => {
    const elem = document.getElementById('floating-cart__products')
    if (elem?.scrollTop > 10) setShowGradientTop(true)
    else setShowGradientTop(false)

    if (elem?.scrollHeight > elem?.scrollTop + elem?.offsetHeight + 10)
      setShowGradientBottom(true)
    else setShowGradientBottom(false)
  }

  useEffect(() => {
    const onScroll = () =>
      window.pageYOffset > y ? setStick(true) : setStick(false)
    window.addEventListener('scroll', onScroll)
    onScroll()

    dispatch(getProductsCartAction())

    return () => window.removeEventListener('scroll', onScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (sendingProduct)
      setTimeout(() => dispatch(clearSendingProductAction()), 2000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sendingProduct])

  const onClick = () =>
    document.querySelector(history.location.hash)?.scrollIntoView()

  return city ? (
    <nav className='nav' data-stick={stick}>
      <div className='container'>
        <div className='header__items'>
          <Link
            className='sticky-logo'
            to={`/${city.link}`}
            onClick={() => window.scrollTo(0, 0)}
          >
            <svg
              data-stick={stick}
              id='logo_svg__Layer_1'
              x='0'
              y='0'
              viewBox='0 0 70 70'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M32.6 3c18.6 0 32.9 12.8 32.9 31.8C65.5 53.9 51.2 67 32.6 67H11.7C7.5 67 4 64.2 4 59.3V11c0-4.9 3.5-8 7.7-8h20.9z'
                fill='#ff6900'
              ></path>
              <path d='M54 27.9c-.1.8-1 .8-1.4.1-1.3-2.2-3-2.6-5.7-2.8-2-.1-4.4.1-6.6.1-.4 0-.5-.3-.5-.4.4-1.9 2-5.4 3.7-5.7.8-.1 2.6-.3 3.6-.3 4.6 0 7.1 5.3 6.9 9M28 46c2.9.8 7 1.3 10.4 1 5.9-.4 10.4-2.6 12.9-4.2-1.5 3.8-7.2 6.2-12.6 6.8 0 .3-.1.5-.1.8 4.1-.2 8-1.6 9.8-2.8-1 3.7-6 5.2-10.6 5.5-.1.3-.3.6-.4.8 2.7 0 5.2-.4 6.7-.9-2.1 3.9-11.1 6.6-18.7 3 1.7-3.4 2.5-6.8 2.6-10m25.1-26.6c-1.8-1.7-4.2-2.5-6.3-2.4-3 0-5.5.8-9.2.9-2.5.1-4.8-5.4-7.8-6.1-1.3-2.9-4.3-3.3-6.1-1.8-1.7-1-4.3-.5-4.4 1.4-1.9-.6-4.4.4-3.3 3-4.7.1-5.5 4.3-2.4 4.7-4.1 2.3-2.2 6.3 1.2 5.5.6 6 3.3 13.8-1.1 15.7-.5.2-2.5.7-6.3-.2-1.1-.3-2.3-.6-3.4-.9v3.1c3.3.8 6.6 1.4 8.7 1.2 5.8-.6 6.1-5.4 5.8-9.6-.3-4.1-1.7-8.9-1.2-12.3l-.2-.2c-2.1 2.2-3.5 1.6-3.7.9-.3-1.4 2.2-3.2 3.6-3.8 0-.1.1-.2.1-.3-1.3.2-2.9 0-3-.9-.1-1.1 2.2-2.2 5.2-1.9.1 0 .1-.1.2-.1l-.6-.3c-.8-.4-1-1.1-.7-1.5.3-.5 1.1-.7 1.8-.7 1.1 0 2 .3 2.7.6.1 0 .1-.1.2-.1-.2-.2-.5-.4-.6-.6-.2-.3-.2-.8.1-1 .4-.3 1.5-.4 2.4.4l.5.5c.1 0 .2 0 .3-.1-.2-.2-.3-.5-.3-.7-.1-.3 0-.7.4-.8s.9.1 1.2.5.5 1 .6 1.3c-2.1.2-4.6 1-6.1 3.1-1.5 2-2.1 5.2-1.2 8.2.6 3.1 1.8 6 2.9 9v.1c2.4 6.9 7 23.9-15.3 32.9.8.5 2.4.9 3.7.9h2.3c4.6-2.4 7.7-5.3 9.9-8.2 10.2 4.5 19.5 2.2 23.5-5.2 2.7-1.6 4.4-4.9 4.5-7.2 1.7-2.1 2-4.7 1.5-6.5-.1-.4-.5-.4-1.1-.1-8.3 5-15.6 5.8-24.3 3.2-.2-3.4-.9-6.3-1.2-8.1-.2-3.5.9-5.2 7.3-3.1 4.2 1.1 6.1 3 7.6 4 .7.5 1.6 1.1 2.1.7.3-.2.4-.8.4-1.5-.1-1.9-1-5.1-1.8-6.3 2.5-.1 4.6-.1 5.7 0 2.4.4 2.6 1.7 2.9 2.2.7 2 4.6 1.5 4.9-.2.6-3.5.8-8.1-2.6-11.3m-44.4 30c-1.6-.1-3.2-.1-4.7 0v2.1c2.7-.6 4.4-.9 4.4-.9l.3-1.2z'></path>
              <path
                d='M33.7 27.5c-3.5-.8-7.4-1.8-9.4-4.8 0-.1-.1-.1-.2-.1s-.1.1-.1.1c0 .2 0 .3.1.5l-.3.1c-.5-.8-.7-1.7-.1-2.4.8-1 2.3-.9 3.3-.3l-.1.3c-.5-.1-1-.1-1.4.1-.3.2-.4.5-.2.8C27 25 32 25.7 37.9 25.2c.6 0 .7-.3.8-.6.5-2 1.4-3.9 2.8-5.3-1.1.2-2.1.2-2.9.2-3 .2-4.8-.2-5.3-.6l.1-.3c.3.1.7.1.7 0 .1-.1 0-.2-.1-.3-.6-.5-3.2-3.2-3.2-3.2-.3-2.3-3.6-2.3-4.9-.1l-.4-.1c.1-.5.3-.9.5-1.2-2.7.6-4.3 3.1-4.6 5.4-1.2 10.2 14.3 7.8 18.7 11.9.1.1.3.4.4.2.2-.2-1.8-2.6-6.8-3.7m-5.4-12.2c.7-.2 1.8.5 2.3 1.6.6 1.1.4 2.2-.3 2.5s-1.8-.5-2.3-1.6c-.1-.2-.1-.3-.2-.5h.1c.2.2.5.3.7.2.3-.2.2-.6 0-1-.2-.3-.5-.6-.8-.6l-.1-.1c.2-.3.4-.4.6-.5M51.3 42.8c-2.5 1.6-7 3.8-12.9 4.2-3.4.2-7.4-.2-10.4-1 0 1-.1 2-.3 3 1.7.4 4.6 1 8.9 1.1-.2 1.1-1.4 5.1-4.3 7.6 5.4.2 10.3-1.9 11.8-4.7-1.5.5-4.1 1-6.7.9.1-.3.3-.5.4-.8 4.6-.2 9.6-1.7 10.6-5.5-1.8 1.2-5.7 2.6-9.8 2.8 0-.3.1-.5.1-.8 5.4-.7 11.1-3 12.6-6.8'
                fill='#fff'
              ></path>
            </svg>
          </Link>
          <ul className='products' data-stick={stick}>
            <li className='product' onClick={onClick}>
              <NavLink
                to={`/${city.link}#pizzas`}
                className='product-link'
                exact
                isActive={() => window.location.hash === '#pizzas'}
                activeStyle={{ color: 'rgb(255, 105, 0)' }}
              >
                Пицца
              </NavLink>
            </li>
            <li className='product' onClick={onClick}>
              <NavLink
                to={`/${city.link}#combos`}
                className='product-link'
                exact
                isActive={() => window.location.hash === '#combos'}
                activeStyle={{ color: 'rgb(255, 105, 0)' }}
              >
                Комбо
              </NavLink>
            </li>
            <li className='product' onClick={onClick}>
              <NavLink
                to={`/${city.link}#snacks`}
                className='product-link'
                exact
                isActive={() => window.location.hash === '#snacks'}
                activeStyle={{ color: 'rgb(255, 105, 0)' }}
              >
                Закуски
              </NavLink>
            </li>
            <li className='product' onClick={onClick}>
              <NavLink
                to={`/${city.link}#desserts`}
                className='product-link'
                exact
                isActive={() => window.location.hash === '#desserts'}
                activeStyle={{ color: 'rgb(255, 105, 0)' }}
              >
                Десерты
              </NavLink>
            </li>
            <li className='product' onClick={onClick}>
              <NavLink
                to={`/${city.link}#drinks`}
                className='product-link'
                exact
                isActive={() => window.location.hash === '#drinks'}
                activeStyle={{ color: 'rgb(255, 105, 0)' }}
              >
                Напитки
              </NavLink>
            </li>
            <li className='product' onClick={onClick}>
              <NavLink
                to={`/${city.link}#others`}
                className='product-link'
                exact
                isActive={() => window.location.hash === '#others'}
                activeStyle={{ color: 'rgb(255, 105, 0)' }}
              >
                Другие товары
              </NavLink>
            </li>
            <li className='product'>
              <NavLink
                to={`/${city.link}/bonusactions`}
                className='product-link'
                exact
                activeStyle={{ color: 'rgb(255, 105, 0)' }}
              >
                Акции
              </NavLink>
            </li>
            <li className='product'>
              <NavLink
                to={`/${city.link}/contacts`}
                className='product-link'
                exact
                activeStyle={{ color: 'rgb(255, 105, 0)' }}
              >
                Контакты
              </NavLink>
            </li>
            <li className='product'>
              <NavLink
                to={{ pathname: 'https://www.dodofranchise.ru' }}
                target='_blank'
                className='product-link'
              >
                Франшиза
              </NavLink>
            </li>
            <li className='product'>
              <NavLink
                to={`/${city.link}/about`}
                className='product-link'
                exact
                activeStyle={{ color: 'rgb(255, 105, 0)' }}
              >
                О нас
              </NavLink>
            </li>
            {window.location.pathname === `/${city.link}` && (
              <li className='product'>
                <span className='camera-link'>Прямой эфир</span>
              </li>
            )}
          </ul>
          <div className='nav__cart' onMouseEnter={onScrollCart}>
            <button className='nav__cart-btn'>
              Корзина
              {productsCart?.length > 0 && (
                <>
                  <div className='cart-line' />
                  <svg
                    width='13'
                    height='11'
                    fill='none'
                    className='cart-desc__arrow'
                  >
                    <path
                      d='M1 5.483h11m0 0L7.286 1M12 5.483L7.286 10'
                      stroke='#fff'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    ></path>
                  </svg>
                  <div className='products-cart__length'>
                    {productsCart.reduce((sum, val) => sum + val.quantity, 0) +
                      1}
                  </div>
                </>
              )}
            </button>
            {productsCart?.length > 0 ? (
              <div className='floating-cart__container'>
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
                <div
                  id='floating-cart__products'
                  data-stick={stick}
                  onScroll={onScrollCart}
                >
                  <div
                    id='scroll__gradient-top'
                    data-gradient-top={showGradientTop}
                    style={{ top: 15 }}
                  />
                  {productsCart.map((product, i) => (
                    <div className='floating-cart__product' key={i}>
                      <img
                        className='floating-cart__image'
                        src={product.image}
                        alt='Product-cart'
                      />
                      <div style={{ flex: '1 1 auto', flexFlow: 'column' }}>
                        <div style={{ paddingRight: 20, marginBottom: 2 }}>
                          {product.name}
                          <svg
                            width='20'
                            height='20'
                            fill='none'
                            className='cart__product-delete'
                            onClick={() =>
                              dispatch(deleteProductCartAction(product))
                            }
                          >
                            <path
                              d='M14.75 6h-9.5l.66 9.805c.061 1.013.598 1.695 1.489 1.695H12.6c.89 0 1.412-.682 1.49-1.695L14.75 6z'
                              fill='#373536'
                            ></path>
                            <path
                              d='M13.85 3.007H6.196C4.984 2.887 5.021 4.365 5 5h9.992c.024-.62.07-1.873-1.142-1.993z'
                              fill='#373535'
                            ></path>
                          </svg>
                        </div>
                        <div className='cart__product-desc'>
                          {product.sizeChosen === 'small'
                            ? 'Маленькая'
                            : product.sizeChosen === 'medium'
                            ? 'Средняя'
                            : 'Большая'}{' '}
                          {sizeVars && sizeVars[product.sizeChosen]} см,{' '}
                          {product.thickness === 'traditional'
                            ? 'традиционное'
                            : 'тонкое'}{' '}
                          тесто
                        </div>
                        <div className='product__quantity-price'>
                          <div className='cart__product-quantity'>
                            <button
                              className='cart__product-balance'
                              onClick={() => {
                                if (product.quantity > 1)
                                  dispatch(reduceQuantityAction(product))
                                else dispatch(deleteProductCartAction(product))
                              }}
                            >
                              <svg width='10' height='10'>
                                <rect
                                  fill='#454B54'
                                  y='4'
                                  width='10'
                                  height='2'
                                  rx='1'
                                ></rect>
                              </svg>
                            </button>
                            <div className='cart__product-count'>
                              {product.quantity}
                            </div>
                            <button
                              className='cart__product-balance'
                              onClick={() =>
                                dispatch(addQuantityAction(product))
                              }
                            >
                              <svg width='10' height='10'>
                                <g fill='#454B54'>
                                  <rect
                                    x='4'
                                    width='2'
                                    height='10'
                                    ry='1'
                                  ></rect>
                                  <rect
                                    y='4'
                                    width='10'
                                    height='2'
                                    rx='1'
                                  ></rect>
                                </g>
                              </svg>
                            </button>
                          </div>
                          <div>{product.price.toLocaleString()} тг.</div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className='floating-cart__product'>
                    <img
                      className='floating-cart__image'
                      src='https://dodopizza-a.akamaihd.net/static/Img/Products/d34f93b52d994d9388a9605aad536f9c_138x138.jpeg'
                      alt='Product-cart'
                    />
                    <div style={{ flex: '1 1 auto', flexFlow: 'column' }}>
                      <div style={{ paddingRight: 20, marginBottom: 2 }}>
                        Додо набор
                        <svg
                          width='20'
                          height='20'
                          fill='none'
                          className='cart__product-delete'
                        >
                          <path
                            d='M14.75 6h-9.5l.66 9.805c.061 1.013.598 1.695 1.489 1.695H12.6c.89 0 1.412-.682 1.49-1.695L14.75 6z'
                            fill='#373536'
                          ></path>
                          <path
                            d='M13.85 3.007H6.196C4.984 2.887 5.021 4.365 5 5h9.992c.024-.62.07-1.873-1.142-1.993z'
                            fill='#373535'
                          ></path>
                        </svg>
                      </div>
                      <div className='cart__product-desc'>1шт</div>
                      <div className='cart__product-gift'>
                        <svg
                          width='18'
                          height='19'
                          fill='none'
                          style={{ marginRight: 5 }}
                        >
                          <path
                            d='M17 17c0 .7 0 1.05-.136 1.317a1.25 1.25 0 01-.547.547C16.05 19 15.7 19 15 19H3c-.7 0-1.05 0-1.317-.136a1.25 1.25 0 01-.547-.547C1 18.05 1 17.7 1 17V9.48c0-.168 0-.252.033-.316a.3.3 0 01.13-.131C1.229 9 1.313 9 1.48 9H7.5s.5 0 .5.5v7.7c0 .28 0 .42.055.527a.5.5 0 00.218.218C8.38 18 8.52 18 8.8 18h.4c.28 0 .42 0 .527-.055a.5.5 0 00.218-.218C10 17.62 10 17.48 10 17.2V9.5c0-.456.5-.5.5-.5h6.02c.168 0 .252 0 .316.033a.3.3 0 01.131.13c.033.065.033.149.033.317V17zM17.1 4.444h-2.52c.45-.444.72-1.066.72-1.778C15.3 1.156 14.13 0 12.6 0c-.9 0-2.52.8-3.6 1.866C7.92.8 6.3 0 5.4 0 3.87 0 2.7 1.155 2.7 2.666c0 .712.27 1.334.72 1.778H.9c-.54 0-.9.356-.9.89v2.488C0 7.911.09 8 .18 8h7.56c.18 0 .36-.178.36-.356V4.8c0-.178.18-.356.36-.356h1.08c.18 0 .36.178.36.356v2.844c0 .178.18.356.36.356h7.56c.09 0 .18-.09.18-.178V5.333c0-.533-.36-.889-.9-.889zM5.4 3.555c-.54 0-.9-.355-.9-.889 0-.533.36-.888.9-.888s2.07 1.244 2.52 1.777c-.27.09-2.52 0-2.52 0zm7.2 0s-2.43.09-2.7 0c.54-.622 2.16-1.777 2.7-1.777s.9.355.9.888c0 .534-.36.89-.9.89z'
                            fill='#FF6900'
                          ></path>
                          <path
                            d='M8.1 7.644c0 .178-.18.356-.36.356h2.52c-.18 0-.36-.178-.36-.356V4.8c0-.178-.18-.356-.36-.356H8.46c-.18 0-.36.178-.36.356v2.844z'
                            fill='#FF6900'
                          ></path>
                        </svg>
                        Подарок
                      </div>
                    </div>
                  </div>
                  <div
                    id='scroll__gradient-bottom'
                    data-gradient-bottom={showGradientBottom}
                    style={{ bottom: 63 }}
                  />
                </div>
                <div style={{ padding: '0 32px' }}>
                  <div style={{ marginTop: 12, position: 'relative' }}>
                    Сумма заказа
                    <div className='products-cart__price'>
                      {productsCart
                        .reduce((sum, val) => sum + val.price * val.quantity, 0)
                        .toLocaleString()}{' '}
                      тг
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className='floating-cart__container'>
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
                <div className='floating-cart__content'>
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
          {sendingProduct && (
            <div className='add-cart__popup'>
              <div className='timing-description' style={{ padding: 18 }}>
                <div>Добавлено:</div>
                <div>
                  {sendingProduct.name}, {sizeVars[sendingProduct.sizeChosen]}{' '}
                  см
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  ) : (
    <Loading />
  )
}
export default withRouter(Navigation)
