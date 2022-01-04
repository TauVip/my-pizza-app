import { useDispatch, useSelector } from 'react-redux'
import { getPizzaAction } from '../../redux/actions/products/pizzasActions'
import { imagesURL } from '../../redux/store'

const PizzasShow = props => {
  const dispatch = useDispatch()

  const { city } = useSelector(state => state.getCity)

  return (
    <article className='menu__meta-product' key={props.pizza._id}>
      <main className='menu__meta-main'>
        <img
          alt={props.pizza.name}
          title={props.pizza.name}
          className='menu__meta-img'
          src={
            imagesURL +
            (props.pizza.images.traditional.medium ||
              props.pizza.images.traditional.small)
          }
          onClick={() => dispatch(getPizzaAction(props.pizza._id, city._id))}
        />
        <div className='menu__meta-title'>{props.pizza.name}</div>
        {props.pizza.composition.map(compose => compose.name).join(', ')}
      </main>
      <footer className='product-footer'>
        <div className='product-control-price'>
          от {props.pizza.price[city?._id]?.small.toLocaleString()} тг.
        </div>
        <button
          className='product-button'
          onClick={() => dispatch(getPizzaAction(props.pizza._id, city._id))}
        >
          Выбрать
        </button>
      </footer>
    </article>
  )
}
export default PizzasShow
