import { useDispatch, useSelector } from 'react-redux'
import { getComboAction } from '../../redux/actions/products/comboProductsActions'
import { imagesURL } from '../../redux/store'

const CombosShow = props => {
  const dispatch = useDispatch()

  const { city } = useSelector(state => state.getCity)

  return (
    <article className='menu__meta-product' key={props.combo._id}>
      <main className='menu__meta-main'>
        <img
          alt={props.combo.name || `Комбо за ${props.combo.price[city?._id]}`}
          title={props.combo.name || `Комбо за ${props.combo.price[city?._id]}`}
          className='menu__meta-img'
          src={imagesURL + props.combo.image}
          onClick={() => dispatch(getComboAction(props.combo._id))}
        />
        <div className='menu__meta-title'>
          {props.combo.name || `Комбо за ${props.combo.price[city?._id]}`}
        </div>
        {props.combo.description}
      </main>
      <footer className='product-footer'>
        <div className='product-control-price'>
          от {props.combo.price[city?._id]?.toLocaleString()} тг.
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
