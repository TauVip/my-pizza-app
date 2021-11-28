import { Fragment, useEffect, useState } from 'react'
import { pizzaSizes } from '../../../../redux/reducers/products/pizzasReducers'
import { imagesURL } from '../../../../redux/store'
import Loading from '../../../Loading'

const ComboProductSection = props => {
  const [product, setProduct] = useState(null)
  const [thickness, setThickness] = useState(null)

  useEffect(() => {
    if (!product) {
      props.comboProducts[props.item._id] = props.findItemFunc(
        props.item.category,
        props.item.default
      )
      if (props.item.category === 'pizzas') {
        props.thicknessObj[props.item._id] = props.item.thickness
        props.setThicknessObj({ ...props.thicknessObj })
        setThickness(props.item.thickness)
        if (!props.size) props.setSize(props.item.size)
      }
    } else if (props.item._id === props.checkedItem?._id)
      props.comboProducts[props.item._id] = props.findItemFunc(
        props.item.category,
        props.comboProductSelected
      )
    props.setComboProducts({ ...props.comboProducts })
    setProduct(props.comboProducts[props.item._id])

    return () => props.setComboProducts({})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.comboProductSelected, props.checkedItem?._id])

  return product ? (
    <div
      className='combo-product__section'
      data-active={props.item._id === props.checkedItem?._id}
      onClick={() => {
        if (props.item._id === props.checkedItem?._id)
          props.setCheckedItem(null)
        else {
          props.setCheckedItem(props.item)
          props.setComboProductSelected(product._id)
        }
      }}
    >
      <img
        src={
          imagesURL +
          (props.item.category === 'pizzas'
            ? product.images[thickness][props.size]
            : product.image)
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
            {props.size === 'small' ? 'Маленькая' : 'Средняя'}{' '}
            {pizzaSizes[props.size]} см,{' '}
            {thickness === 'thin' ? 'тонкое' : 'традиционное'} тесто
          </div>
        )}
      </div>
      {props.item.category === 'pizzas' &&
        props.size === 'medium' &&
        props.item.thickness !== 'thin' && (
          <div
            className='pizza-info__size'
            onClick={e => e.stopPropagation()}
            data-active={props.item._id === props.checkedItem?._id}
          >
            <div
              className={`product-chosen ${thickness}-chosen`}
              style={{ width: '50%' }}
            />
            <input
              type='radio'
              id={`thickness-traditional-${props.item._id}`}
              className='product-size__input'
              name={`product-thickness-${props.item._id}`}
              onChange={() => {
                setThickness('traditional')
                props.thicknessObj[props.item._id] = 'traditional'
                props.setThicknessObj({ ...props.thicknessObj })
              }}
              checked={props.thicknessObj[props.item._id] === 'traditional'}
            />
            <label
              htmlFor={`thickness-traditional-${props.item._id}`}
              className='product-size__label'
            >
              Традиционное
            </label>
            <input
              type='radio'
              id={`thickness-thin-${props.item._id}`}
              className='product-size__input'
              name={`product-thickness-${props.item._id}`}
              onChange={() => {
                setThickness('thin')
                props.thicknessObj[props.item._id] = 'thin'
                props.setThicknessObj({ ...props.thicknessObj })
              }}
              checked={thickness === 'thin'}
            />
            <label
              htmlFor={`thickness-thin-${props.item._id}`}
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
