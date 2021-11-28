import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getArticleAction } from '../../../redux/actions/articlesActions'
import { getPizzaAction } from '../../../redux/actions/products/pizzasActions'
import { getProductAction } from '../../../redux/actions/products/productsActions'
import { imagesURL } from '../../../redux/store'
import './styles.css'

const Banner = props => {
  const dispatch = useDispatch()

  const { article } = useSelector(state => state.getArticle)

  useEffect(() => {
    if (article?.addInfo?.pizzaId)
      dispatch(getPizzaAction(article.addInfo.pizzaId))
    else if (article?.addInfo?.productId)
      dispatch(getProductAction(article.addInfo.productId))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [article])

  return props.banner ? (
    <img
      src={imagesURL + props.banner.image}
      alt=''
      className={`products__slider-img${
        props.i === props.current ? ' current' : ''
      }`}
      style={{ cursor: props.banner.articleId ? 'pointer' : 'default' }}
      onClick={() => {
        props.banner.articleId && getArticleAction(props.banner.articleId)
        console.log(article)
      }}
    />
  ) : (
    Array.from({ length: 3 }).map((_, i) => (
      <img src='' alt='Some Banner' className='products__slider-img' key={i} />
    ))
  )
}
export default Banner
