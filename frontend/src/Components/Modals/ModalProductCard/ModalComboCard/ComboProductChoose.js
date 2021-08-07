const ComboProductChoose = props => (
  <div
    className='choose-halves__menu'
    onClick={() => props.setSelected(props.product._id)}>
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
      {props.category === 'pizzas' && (
        <div className='combo-choose__size'>{props.diameter} см</div>
      )}
    </div>
  </div>
)
export default ComboProductChoose
