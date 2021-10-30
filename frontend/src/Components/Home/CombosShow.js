import { useDispatch } from 'react-redux'
import { getComboAction } from '../../redux/actions/products/comboProductsActions'
import { imagesURL } from '../../redux/store'

const CombosShow = props => {
  const dispatch = useDispatch()

  return (
    <article className='menu__meta-product' key={props.combo._id}>
      <main className='menu__meta-main'>
        <img
          alt={props.combo.name}
          title={props.combo.name}
          className='menu__meta-img'
          src={imagesURL + props.combo.image}
          onClick={() => dispatch(getComboAction(props.combo._id))}
        />
        <div className='menu__meta-title'>{props.combo.name}</div>
        {props.combo.description}
      </main>
      <footer className='product-footer'>
        <div className='product-control-price'>
          от {props.combo.price.toLocaleString()} тг.
        </div>
        <button
          className='product-button'
          onClick={() => dispatch(getComboAction(props.combo._id))}
        >
          Выбрать
        </button>
      </footer>
    </article>
  )
}
export default CombosShow
