import { useDispatch } from 'react-redux'
import { getPizzaAction } from '../../../redux/actions/products/pizzasActions'
import { getProductAction } from '../../../redux/actions/products/productsActions'
import './styles.css'

const Banner = props => {
  const dispatch = useDispatch()

  const onClick = () => {
    if (props.banner.addInfo?.articleId) {
      props.setArticleId(props.banner.addInfo.articleId)
      props.setShowModal(true)
    } else if (props.banner.addInfo?.pizzaId)
      dispatch(getPizzaAction(props.banner.addInfo.pizzaId))
    else if (props.banner.addInfo?.productId)
      dispatch(getProductAction(props.banner.addInfo.productId))
  }

  return props.banner ? (
    <img
      src={props.banner.image}
      alt=''
      className={`products__slider-img${
        props.i === props.current ? ' current' : ''
      }`}
      style={{ cursor: props.banner.addInfo ? 'pointer' : 'default' }}
      onClick={onClick}
    />
  ) : (
    Array.from({ length: 3 }).map((_, i) => (
      <img src='' alt='Some Banner' className='products__slider-img' key={i} />
    ))
  )
}
export default Banner
