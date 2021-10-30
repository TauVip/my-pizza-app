import { useEffect, useState } from 'react'
import { imagesURL } from '../../../../redux/store'

const PizzaSnack = props => {
  const [selected, setSelected] = useState(false)

  const disabled = props.pizzaSnack.disabled.some(
    obj => props.thickness === obj.thickness && obj.size.includes(props.size)
  )

  useEffect(() => {
    if (disabled && selected) {
      setSelected(false)
      props.setCheckedSnacks(
        props.checkedSnacks.filter(id => id !== props.pizzaSnack._id)
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled, selected])

  return (
    <button
      className='snack-item__info'
      data-selected={selected}
      disabled={disabled}
      onClick={() => {
        if (!selected)
          props.setCheckedSnacks([...props.checkedSnacks, props.pizzaSnack._id])
        else
          props.setCheckedSnacks(
            props.checkedSnacks.filter(id => id !== props.pizzaSnack._id)
          )
        setSelected(!selected)
      }}
    >
      <img
        src={imagesURL + props.pizzaSnack.image}
        alt={props.pizzaSnack.name}
        style={{ width: 90 }}
      />
      <h2 className='snack-item__title'>{props.pizzaSnack.name}</h2>
      <span style={{ lineHeight: '20px', margin: 4 }}>
        {props.pizzaSnack.price[props.size]} тг.
      </span>
      <svg
        width='20'
        height='20'
        fill='none'
        className='selected-icon'
        data-selected={selected}
      >
        <circle cx='10' cy='10' r='10' fill='#fff'></circle>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M10 3.25c3.74 0 6.75 3.01 6.75 6.75s-3.01 6.75-6.75 6.75S3.25 13.74 3.25 10 6.26 3.25 10 3.25zM18.25 10c0-4.57-3.68-8.25-8.25-8.25S1.75 5.43 1.75 10s3.68 8.25 8.25 8.25 8.25-3.68 8.25-8.25z'
          fill='#FF6900'
        ></path>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12.881 8.076a.6.6 0 010 .848l-3.638 3.639a.6.6 0 01-.849 0l-1.818-1.82a.6.6 0 11.848-.848L8.82 11.29l3.214-3.214a.6.6 0 01.848 0z'
          fill='#FF6900'
        ></path>
      </svg>
    </button>
  )
}
export default PizzaSnack
