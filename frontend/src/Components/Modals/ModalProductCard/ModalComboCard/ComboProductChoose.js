import { useEffect } from 'react'

const ComboProductChoose = props => {
  useEffect(() => {
    if (props.selected) {
      const block = document.querySelector('.combo-choose__wrapper')
      const product = document.querySelector('[data-selected="true"]')

      const bottom =
        product.getBoundingClientRect().bottom +
        12 -
        block.getBoundingClientRect().bottom
      if (bottom > 0) block.scrollBy(0, bottom)

      const top =
        product.getBoundingClientRect().top -
        12 -
        block.getBoundingClientRect().top
      if (top < 0) block.scrollBy(0, top)
    }
  }, [props.selected])

  return (
    <div
      className='choose-halves__menu'
      onClick={() => props.setSelected(props.product._id)}
      data-selected={props.selected}>
      <div className='menu-img__wrapper' data-selected={props.selected}>
        <img
          src={
            props.product.images
              ? props.product.images[props.thickness][props.size]
              : props.product.image
          }
          alt={props.product.name}
          title={props.product.name}
          className='halves__menu-img'
          data-selected={props.selected}
        />
      </div>
      <div className='halves__menu-desc'>
        <div>{props.product.name}</div>
        {!props.product.category && (
          <div className='combo-choose__size'>{props.diameter} см</div>
        )}
      </div>
    </div>
  )
}
export default ComboProductChoose
