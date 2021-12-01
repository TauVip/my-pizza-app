import { useDispatch } from 'react-redux'
import { getArticleAction } from '../../../redux/actions/articlesActions'
import { imagesURL } from '../../../redux/store'
import './styles.css'

const Banner = props => {
  const dispatch = useDispatch()

  return props.banner ? (
    <>
      <img
        src={imagesURL + props.banner.image}
        alt=''
        className={`products__slider-img${
          props.index === props.current ? ' current' : ''
        }`}
        style={{ cursor: props.banner.articleId ? 'pointer' : 'default' }}
        onClick={() =>
          props.banner.articleId &&
          dispatch(getArticleAction(props.banner.articleId))
        }
      />
    </>
  ) : (
    Array.from({ length: 3 }).map((_, i) => (
      <img src='' alt='Some Banner' className='products__slider-img' key={i} />
    ))
  )
}
export default Banner
