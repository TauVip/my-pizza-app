import { useDispatch } from 'react-redux'
import {
  ADD_QUANTITY_CART,
  DELETE_PRODUCT_CART,
  REDUCE_QUANTITY_CART
} from '../../../redux/actions/actionTypes'
import { productsCartAction } from '../../../redux/reducers/productsCartReducers'

const FloatingCartProduct = props => {
  const dispatch = useDispatch()

  return (
    <div className='floating-cart__product'>
      {props.product.item.type === 'assemblePizza' ? (
        <div style={{ display: 'flex', width: 64, marginRight: 8 }}>
          <div style={{ width: '50%', overflow: 'hidden' }}>
            <img
              className='floating-cart__image'
              src={props.product.item.image.left}
              alt='Product-cart'
            />
          </div>
          <div
            style={{ position: 'relative', width: '50%', overflow: 'hidden' }}
          >
            <img
              className='floating-cart__image'
              src={props.product.item.image.right}
              alt='Product-cart'
              style={{ position: 'absolute', right: 0, marginRight: 0 }}
            />
          </div>
        </div>
      ) : (
        <img
          className='floating-cart__image'
          src={props.product.item.image}
          alt='Product-cart'
        />
      )}
      <div style={{ flex: '1 1 auto', flexFlow: 'column' }}>
        <div style={{ paddingRight: 20, marginBottom: 2 }}>
          {props.product.item.name}
          <svg
            width='20'
            height='20'
            fill='none'
            className='cart__product-delete'
            onClick={() =>
              dispatch(
                productsCartAction(DELETE_PRODUCT_CART, props.product.item)
              )
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
          {props.product.item.type === 'combo'
            ? props.product.item.description.map((desc, i) => (
                <div style={{ marginBottom: 8 }} key={i}>
                  {desc}
                </div>
              ))
            : props.product.item.description}
        </div>
        {props.product.item.type === 'gift' ? (
          <div className='cart__product-gift'>
            <svg width='18' height='19' fill='none' style={{ marginRight: 5 }}>
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
        ) : (
          <div className='product__quantity-price'>
            <div className='cart__product-quantity'>
              <button
                className='cart__product-balance'
                onClick={() => {
                  if (props.product.quantity > 1)
                    dispatch(
                      productsCartAction(
                        REDUCE_QUANTITY_CART,
                        props.product.item
                      )
                    )
                  else
                    dispatch(
                      productsCartAction(
                        DELETE_PRODUCT_CART,
                        props.product.item
                      )
                    )
                }}
              >
                <svg width='10' height='10'>
                  <rect
                    fill='rgb(92, 99, 112)'
                    y='4'
                    width='10'
                    height='2'
                    rx='1'
                  ></rect>
                </svg>
              </button>
              <div className='cart__product-count'>
                {props.product.quantity}
              </div>
              <button
                className='cart__product-balance'
                onClick={() =>
                  dispatch(
                    productsCartAction(ADD_QUANTITY_CART, props.product.item)
                  )
                }
              >
                <svg width='10' height='10'>
                  <g fill='rgb(92, 99, 112)'>
                    <rect x='4' width='2' height='10' ry='1'></rect>
                    <rect y='4' width='10' height='2' rx='1'></rect>
                  </g>
                </svg>
              </button>
            </div>
            <div>
              {props.product.item.price
                ? props.product.item.price.toLocaleString() + ' тг.'
                : 'Бесплатно'}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default FloatingCartProduct
