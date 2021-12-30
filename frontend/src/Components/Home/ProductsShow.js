import { useDispatch, useSelector } from 'react-redux'
import { getProductAction } from '../../redux/actions/products/productsActions'
import { imagesURL } from '../../redux/store'

const ProductsShow = props => {
  const dispatch = useDispatch()

  const { city } = useSelector(state => state.getCity)

  return (
    <article className='menu__meta-product'>
      <main className='menu__meta-main'>
        <img
          alt={props.product.name}
          title={props.product.name}
          className='menu__meta-img'
          src={imagesURL + props.product.image}
          onClick={() => dispatch(getProductAction(props.product._id))}
        />
        <div className='menu__meta-title'>{props.product.name}</div>
        {props.product.info || props.product.defaultCount}
      </main>
      <footer className='product-footer'>
        <div className='product-control-price'>
          от {props.product.price[city?._id]?.toLocaleString()} тг.
        </div>
        <button className='product-button' onClick={props.onClick}>
          В корзину
        </button>
      </footer>
    </article>
  )
}
export default ProductsShow
