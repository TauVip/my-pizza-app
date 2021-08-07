import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArticlesAction } from '../../redux/actions/articlesAction'
import Loading from '../Loading'
import './styles.css'

const BonusActions = () => {
  const dispatch = useDispatch()

  const { articles, articlesError } = useSelector(state => state.articlesList)
  const { city } = useSelector(state => state.getCity)

  useEffect(() => {
    if (city) {
      document.title = `🍕 Акции и скидки | Додо Пицца ${city.name} | Доставка пиццы №1 в Казахстане`
      dispatch(fetchArticlesAction(city._id))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city])

  return (
    <main className='bonus-actions__content'>
      {articles ? (
        <>
          <h1 className='actions-title'>Акции</h1>
          {articles.map(article => (
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
        </>
      ) : articlesError ? (
        <h2>{articlesError}</h2>
      ) : (
        <Loading />
      )}
    </main>
  )
}
export default BonusActions
