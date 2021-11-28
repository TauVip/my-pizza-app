import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import closeIcon from '../../images/close-icon.svg'
import { clearGetArticle } from '../../redux/actions/articlesActions'
import { imagesURL } from '../../redux/store'

const ModalArticle = props => {
  const dispatch = useDispatch()

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => (document.body.style.overflow = 'auto')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='show-locality__selector'>
      <div
        className='show-locality__shadow'
        onClick={() => dispatch(clearGetArticle())}
      />
      <div className='locality-selector__wrapper'>
        <div className='modal-article__wrapper'>
          <article className='modal-article'>
            <img src={imagesURL + props.article.image} alt='' />
            <h1 className='modal-article__title'>{props.article.title}</h1>
            <p className='modal-article__desc'>{props.article.description}</p>
            {props.article.buttonDesc && (
              <button
                className='modal-article__button'
                onClick={() => {
                  dispatch(clearGetArticle())
                  document.getElementById('pizzas')?.scrollIntoView()
                }}
              >
                {props.article.buttonDesc}
              </button>
            )}
          </article>
          <img
            src={closeIcon}
            alt='Close Icon'
            className='close-icon'
            onClick={() => dispatch(clearGetArticle())}
          />
        </div>
      </div>
    </div>
  )
}
export default ModalArticle
