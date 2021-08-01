import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const ComboProductChoose = props => {
  const { pizzas } = useSelector(state => state.pizzasList)
  const { products } = useSelector(state => state.productsList)

  const [product, setProduct] = useState(null)
  console.log(product)

  useEffect(() => {
    const findItem = item => item._id === props.productId
    setProduct(
      props.category === 'pizzas'
        ? pizzas?.find(findItem)
        : products[props.category]?.find(findItem)
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      className='choose-halves__menu'
      onClick={() => props.setSelected(props.productId)}
    >
      <div className='menu-img__wrapper' data-selected={props.selected}>
        <img
          src='	https://dodopizza-a.akamaihd.net/static/Img/Products/2e8c610d59ce49fbae8f8909b2940343_233x233.jpeg'
          alt='Аррива!'
          title='Аррива!'
          className='halves__menu-img'
          data-selected={props.selected}
        />
      </div>
      <div className='halves__menu-desc'>
        <div>Аррива!</div>
        <div className='combo-choose__size'>25 см</div>
      </div>
    </div>
  )
}
export default ComboProductChoose
