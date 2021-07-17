import { useHistory } from 'react-router-dom'
import './styles.css'

const Banner = props => {
  const history = useHistory()

  const onClick = () => {
    if (!props.banner.addInfo) return

    if (props.banner.addInfo.articleId) {
      props.setArticleId(props.banner.addInfo.articleId)
      props.setShowModal(true)
    }

    if (props.banner.addInfo.link) history.push(`?${props.banner.addInfo.link}`)
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
