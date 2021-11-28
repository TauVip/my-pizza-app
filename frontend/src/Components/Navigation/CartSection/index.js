import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cartEmpty from '../../../images/cart-empty.svg'
import { GET_PRODUCTS_CART } from '../../../redux/actions/actionTypes'
import { pizzaSizes } from '../../../redux/reducers/products/pizzasReducers'
import { productsCartAction } from '../../../redux/reducers/productsCartReducers'
import ModalLogin from '../../Modals/ModalLogin'
import FloatingCartProduct from './FloatingCartProduct'

const CartSection = props => {
  const dispatch = useDispatch()

  const productsCart = useSelector(state => state.productsCart)
  const { userInfo } = useSelector(state => state.login)

  const [showGradientTop, setShowGradientTop] = useState(false)
  const [showGradientBottom, setShowGradientBottom] = useState(false)
  const [login, setLogin] = useState(false)

  const onScrollCart = () => {
    const elem = document.getElementById('floating-cart__products')
    if (elem?.scrollTop > 10) setShowGradientTop(true)
    else setShowGradientTop(false)

    if (elem?.scrollHeight > elem?.scrollTop + elem?.offsetHeight + 10)
      setShowGradientBottom(true)
    else setShowGradientBottom(false)
  }

  useEffect(() => {
    dispatch(
      productsCartAction(
        GET_PRODUCTS_CART,
        JSON.parse(localStorage.getItem('productsCart'))
      )
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onClick = () => {
    if (productsCart?.length) {
      if (!userInfo) setLogin(true)
    }
  }

  return (
    <>
      <div className='nav__cart' onMouseEnter={onScrollCart}>
        <button className='nav__cart-btn' onClick={onClick}>
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
                {productsCart.reduce((sum, val) => sum + val.quantity, 0)}
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
              data-stick={props.stick}
              onScroll={onScrollCart}
            >
              <div
                id='scroll__gradient-top'
                data-gradient-top={showGradientTop}
                style={{ top: 15 }}
              />
              {productsCart.map(
                (product, i) =>
                  product.item.type !== 'gift' && (
                    <FloatingCartProduct product={product} key={i} />
                  )
              )}
              {productsCart.map(
                (product, i) =>
                  product.item.type === 'gift' && (
                    <FloatingCartProduct product={product} key={i} />
                  )
              )}
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
                    .reduce(
                      (sum, val) => sum + val.item.price * val.quantity,
                      0
                    )
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
                Мы всегда доставляем бесплатно, но сумма заказа должна быть от 2
                500 тг.
              </div>
            </div>
          </div>
        )}
      </div>
      {props.sendingProduct && (
        <div className='add-cart__popup'>
          <div className='timing-description' style={{ padding: 18 }}>
            <div>Добавлено:</div>
            <div>
              {props.sendingProduct.name}
              {props.sendingProduct.type === 'pizza' &&
                `, ${pizzaSizes[props.sendingProduct.sizeChosen]} см`}
            </div>
          </div>
        </div>
      )}
      {login && <ModalLogin setLogin={setLogin} />}
    </>
  )
}
export default CartSection
