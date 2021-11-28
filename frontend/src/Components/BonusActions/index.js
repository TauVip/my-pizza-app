import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from '../../Container'
import { fetchArticlesAction } from '../../redux/actions/articlesActions'
import { getPizzaAction } from '../../redux/actions/products/pizzasActions'
import {
  clearGetProduct,
  getProductAction
} from '../../redux/actions/products/productsActions'
import { imagesURL } from '../../redux/store'
import ModalProductCard from '../Modals/ModalProductCard'
import ModalPizzaCard from '../Modals/ModalProductCard/ModalPizzaCard'
import './styles.css'

const BonusActions = () => {
  const dispatch = useDispatch()

  const { articles } = useSelector(state => state.articlesList)
  const { city } = useSelector(state => state.getCity)
  const { product } = useSelector(state => state.getProduct)
  const { pizza } = useSelector(state => state.getPizza)

  useEffect(() => {
    if (city) {
      document.title = `🍕 Акции и скидки | Додо Пицца ${city.name} | Доставка пиццы №1 в Казахстане`
      dispatch(fetchArticlesAction(city._id))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city])

  const getArticleProduct = article => {
    if (article.addInfo?.pizzaId)
      dispatch(getPizzaAction(article.addInfo.pizzaId))
    else if (article.addInfo?.productId)
      dispatch(getProductAction(article.addInfo.productId))
  }

  return (
    <Container>
      <main className='bonus-actions__content'>
        <h1 className='actions-title'>Акции</h1>
        {articles?.map(article => (
          <article className='article' key={article._id}>
            <img
              className='image'
              src={imagesURL + article.image}
              alt='Bonus Action Banner'
            />
            <h1 className='article-title'>{article.title}</h1>
            <div className='description'>
              <p style={{ margin: 0 }}>{article.description}</p>
            </div>
            {article.buttonDesc && (
              <button
                className='action-button'
                onClick={() => getArticleProduct(article)}
              >
                {article.buttonDesc}
              </button>
            )}
          </article>
        ))}
      </main>
      {product && <ModalProductCard onClick={() => false} />}
      {pizza && (
        <ModalPizzaCard productCartAdd={() => dispatch(clearGetProduct())} />
      )}
    </Container>
  )
}
export default BonusActions
