import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import closeIcon from '../../images/close-icon.svg'
import { getArticleAction } from '../../redux/actions/articlesAction'

const ModalArticle = props => {
  const dispatch = useDispatch()

  const { article } = useSelector(state => state.getArticle)

  useEffect(() => {
    dispatch(getArticleAction(props.articleId))
  }, [dispatch, props.articleId])

  return article ? (
    <div className='show-locality-selector'>
      <div className='show-locality-shadow' />
      <div className='locality-selector-wrapper'>
        <div className='modal-article__wrapper'>
          <article className='modal-article'>
            <img src={article.image} alt='' />
            <h1 className='modal-article__title'>{article.title}</h1>
            <p className='modal-article__desc'>{article.description}</p>
            {article.buttonDesc && (
              <button className='modal-article__button'>
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
