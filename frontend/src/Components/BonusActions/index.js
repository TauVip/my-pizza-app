import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from '../../Container'
import { fetchArticlesAction } from '../../redux/actions/articlesActions'
import './styles.css'

const BonusActions = () => {
  const dispatch = useDispatch()

  const { articles } = useSelector(state => state.articlesList)
  const { city } = useSelector(state => state.getCity)

  useEffect(() => {
    if (city) {
      document.title = `🍕 Акции и скидки | Додо Пицца ${city.name} | Доставка пиццы №1 в Казахстане`
      dispatch(fetchArticlesAction(city._id))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city])

  return (
    <Container>
      <main className='bonus-actions__content'>
        <h1 className='actions-title'>Акции</h1>
        {articles?.map(article => (
          <article className='article' key={article._id}>
            <img
              className='image'
              src={article.image}
              alt='Bonus Action Banner'
            />
            <h1 className='article-title'>{article.title}</h1>
            <div className='description'>
              <p style={{ margin: 0 }}>{article.description}</p>
            </div>
            {article.buttonDesc && (
              <button className='action-button'>{article.buttonDesc}</button>
            )}
          </article>
        ))}
      </main>
    </Container>
  )
}
export default BonusActions
