import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import Container from '../../Container'
import { fetchArticlesAction } from '../../redux/actions/articlesActions'
import { getPizzaAction } from '../../redux/actions/products/pizzasActions'
import { getProductAction } from '../../redux/actions/products/productsActions'
import { imagesURL } from '../../redux/store'
import './styles.css'

const BonusActions = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const { articles } = useSelector(state => state.articlesList)
  const { city } = useSelector(state => state.getCity)

  useEffect(() => {
    if (city) {
      document.title = `🍕 Акции и скидки | Додо Пицца ${city.name} | Доставка пиццы №1 в Казахстане`
      dispatch(fetchArticlesAction(city._id))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city])

  const getArticleProduct = article => {
    if (article.addInfo?.pizzaId) {
      history.push(`/${city.link}`)
      dispatch(getPizzaAction(article.addInfo.pizzaId, city._id))
    } else if (article.addInfo?.productId) {
      history.push(`/${city.link}`)
      dispatch(getProductAction(article.addInfo.productId))
    } else if (article._id === '60d06519a7839b2ed8c19185')
      history.push(`/${city.link}/#pizzas`)
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
    </Container>
  )
}
export default BonusActions
