import { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Loading from '../../../Loading'

const ComboProductSection = props => {
  const { pizzas, sizeVars } = useSelector(state => state.pizzasList)
  const { products } = useSelector(state => state.productsList)

  const [thickness, setThickness] = useState('traditional')
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const findItem = item => item._id === props.item.default
    setProduct(
      props.item.category === 'pizzas'
        ? pizzas?.find(findItem)
        : products[props.item.category]?.find(findItem)
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const findItem = item => item._id === props.comboProductSelected
    if (props.item.productsId.includes(props.comboProductSelected))
      setProduct(
        pizzas?.find(findItem) || products[props.item.category]?.find(findItem)
      )
    const arr = props.comboProducts
    arr[props.index] = product
    props.setComboProducts(arr)
  }, [pizzas, product, products, props])

  return product ? (
    <div
      className='combo-product__section'
      data-active={props.checked}
      onClick={() => {
        if (props.checked) props.setCheckedItem(null)
        else {
          props.setCheckedItem(props.item)
          props.setComboProductSelected(product._id)
        }
      }}
    >
      <img
        src={
          props.item.category === 'pizzas'
            ? product.images.traditional[props.item.size]
            : product.image
        }
        alt='Product'
        className='combo-product__img'
      />
      <i style={{ position: 'absolute', top: 14, right: 12 }}>
        <svg
          width='8'
          height='13'
          viewBox='0 0 8 13'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M7.26544 5.78418C7.66806 6.17666 7.66806 6.82382 7.26544 7.21631L6.72208 7.74599L1.90072 12.3992C1.55373 12.7341 1.00345 12.7327 0.65814 12.3961C0.297847 12.0448 0.299019 11.4654 0.66073 11.1156L5.06205 6.85969C5.26529 6.66315 5.26529 6.33733 5.06204 6.1408L0.66073 1.8849C0.299019 1.53513 0.297847 0.955646 0.658139 0.604424C1.00345 0.267805 1.55373 0.266429 1.90072 0.601317L6.72208 5.2545L7.26544 5.78418Z'
            fill='#D8D8D8'
          ></path>
        </svg>
      </i>
      <div style={{ marginLeft: 76 }}>
        <div className='combo-product__title'>{product.name}</div>
        <div className='combo-product__info'>
          {props.item.category === 'pizzas'
            ? product.composition.map((compose, i) => (
                <Fragment key={compose.name}>
                  {compose.name}
                  {i !== product.composition.length - 1 && ', '}
                </Fragment>
              ))
            : product.info
            ? product.info
            : product.defaultCount}
        </div>
        {props.item.category === 'pizzas' && (
          <div className='combo-product__size'>
            {props.item.size === 'small' ? 'Маленькая' : 'Средняя'}{' '}
            {sizeVars[props.item.size]} см,{' '}
            {thickness === 'thin' ? 'тонкое' : 'традиционное'} тесто
          </div>
        )}
      </div>
      {props.item.size && props.item.size === 'medium' && (
        <div
          className='pizza-info__size'
          onClick={e => e.stopPropagation()}
          data-active={props.checked}
        >
          <div
            className={`product-chosen ${thickness}-chosen`}
            style={{ width: '50%' }}
          />
          <input
            type='radio'
            id={`thickness-traditional-${props.index}`}
            className='product-size__input'
            name={`product-thickness-${props.index}`}
            onChange={() => setThickness('traditional')}
            checked={thickness === 'traditional'}
          />
          <label
            htmlFor={`thickness-traditional-${props.index}`}
            className='product-size__label'
          >
            Традиционное
          </label>
          <input
            type='radio'
            id={`thickness-thin-${props.index}`}
            className='product-size__input'
            name={`product-thickness-${props.index}`}
            onChange={() => setThickness('thin')}
            checked={thickness === 'thin'}
          />
          <label
            htmlFor={`thickness-thin-${props.index}`}
            className='product-size__label'
          >
            Тонкое
          </label>
        </div>
      )}
    </div>
  ) : (
    <Loading />
  )
}
export default ComboProductSection
