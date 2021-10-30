import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import closeIcon from '../../images/close-icon.svg'
import { getArticleAction } from '../../redux/actions/articlesActions'
import { imagesURL } from '../../redux/store'

const ModalArticle = props => {
  const dispatch = useDispatch()

  const { article } = useSelector(state => state.getArticle)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    dispatch(getArticleAction(props.articleId))

    return () => (document.body.style.overflow = 'auto')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return article ? (
    <div className='show-locality__selector'>
      <div
        className='show-locality__shadow'
        onClick={() => props.setShowModal(false)}
      />
      <div className='locality-selector__wrapper'>
        <div className='modal-article__wrapper'>
          <article className='modal-article'>
            <img src={imagesURL + article.image} alt='' />
            <h1 className='modal-article__title'>{article.title}</h1>
            <p className='modal-article__desc'>{article.description}</p>
            {article.buttonDesc && (
              <button
                className='modal-article__button'
                onClick={() => {
                  props.setShowModal(false)
                  document.getElementById('pizzas')?.scrollIntoView()
                }}
              >
                {article.buttonDesc}
              </button>
            )}
          </article>
          <img
            src={closeIcon}
            alt='Close Icon'
            className='close-icon'
            onClick={() => props.setShowModal(false)}
          />
        </div>
      </div>
    </div>
  ) : null
}
export default ModalArticle
