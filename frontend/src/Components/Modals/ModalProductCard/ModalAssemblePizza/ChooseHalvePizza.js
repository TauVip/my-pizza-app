import { useEffect, useState } from 'react'
import { imagesURL } from '../../../../redux/store'

const ChooseHalvePizza = props => {
  const [halveSelected, setHalveSelected] = useState(null)
  const [halveClassName, setHalveClassName] = useState('')

  const onClick = () => {
    if (!halveSelected) {
      if (!props.leftHalveSelected) props.setLeftHalveSelected(props.pizza)
      else if (props.leftHalveSelected && props.rightHalveSelected) {
        props.setLeftHalveSelected(props.pizza)
        props.setRightHalveSelected(null)
      } else if (props.leftHalveSelected)
        props.setRightHalveSelected(props.pizza)
    } else {
      if (props.rightHalveSelected?._id === props.pizza._id)
        props.setRightHalveSelected(null)
      else if (props.leftHalveSelected?._id === props.pizza._id)
        props.setLeftHalveSelected(null)
    }
  }

  useEffect(() => {
    if (props.leftHalveSelected?._id === props.pizza._id) {
      setHalveClassName('left')
      setHalveSelected(true)
    } else if (props.rightHalveSelected?._id === props.pizza._id) {
      setHalveClassName('right')
      setHalveSelected(true)
    } else setHalveSelected(false)
  }, [props.leftHalveSelected, props.pizza._id, props.rightHalveSelected])

  return (
    <div className='choose-halves__menu' onClick={onClick}>
      <div className='menu-img__wrapper' data-selected={halveSelected}>
        <img
          src={imagesURL + props.pizza.images[props.thickness].big}
          alt={props.pizza.name}
          title={props.pizza.name}
          className='halves__menu-img'
          data-selected={halveSelected}
        />
        {halveSelected && (
          <div className={`halves__menu-curtain ${halveClassName}`} />
        )}
      </div>
      <div className='halves__menu-desc'>
        <div>{props.pizza.name}</div>
        <span className='halves__menu-price'>
          {props.pizza.price.small.toLocaleString()} тг.
        </span>
      </div>
    </div>
  )
}
export default ChooseHalvePizza
