import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import closeIcon from '../../../../images/close-icon.svg'
import { clearGetProduct } from '../../../../redux/actions/products/productsActions'
import { pizzaSizes } from '../../../../redux/reducers/products/pizzasReducers'
import { imagesURL } from '../../../../redux/store'
import InformationCircle from '../InformationCircle'
import ComboProductChoose from './ComboProductChoose'
import ComboProductSection from './ComboProductSection'

const ModalComboCard = props => {
  const dispatch = useDispatch()
  const history = useHistory()

  const { combo } = useSelector(state => state.getCombo)
  const { pizzas } = useSelector(state => state.pizzasList)
  const { products } = useSelector(state => state.productsList)
  const { city } = useSelector(state => state.getCity)

  const [comboProducts, setComboProducts] = useState({})
  const [fullPrice, setFullPrice] = useState(0)
  const [checkedItem, setCheckedItem] = useState(null)
  const [comboProductSelected, setComboProductSelected] = useState(null)
  const [size, setSize] = useState(null)
  const [thicknessObj, setThicknessObj] = useState({})

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    history.replace({
      search: `product=${combo._id}`,
      hash: history.location.hash
    })

    return () => {
      history.replace({ search: null, hash: history.location.hash })
      document.body.style.overflow = 'auto'
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setFullPrice(
      Object.values(comboProducts).reduce(
        (count, product) =>
          product?.category
            ? product.price[city._id] + count
            : product?.price[city._id][size] + count,
        0
      )
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comboProducts])

  const findItemFunc = (category, id) => {
    const findItem = item => item._id === id
    return category === 'pizzas'
      ? pizzas.find(findItem)
      : products.find(findItem)
  }

  const onClick = () => {
    const sortedProducts = Object.entries(comboProducts).reduce(
      (sortedProducts, [id, product]) =>
        product.category
          ? {
              ...sortedProducts,
              products: sortedProducts.products
                ? [...sortedProducts.products, product]
                : [product]
            }
          : {
              ...sortedProducts,
              [`${size}-${thicknessObj[id]}`]: sortedProducts[
                `${size}-${thicknessObj[id]}`
              ]
                ? [...sortedProducts[`${size}-${thicknessObj[id]}`], product]
                : [product]
            },
      {}
    )
    const item = {
      type: 'combo',
      productId: combo._id,
      image: imagesURL + combo.image,
      name: combo.name,
      description: Object.entries(sortedProducts).map(([key, products]) => {
        if (key === 'products')
          return products.map(product => product.name).join(', ')
        else {
          const [size, thickness] = key.split('-')
          return (
            products.map(product => product.name).join(', ') +
            (size === 'small'
              ? ' - Маленькая '
              : size === 'medium'
              ? ' - Средняя '
              : ' - Большая ') +
            pizzaSizes[size] +
            ' см, ' +
            (thickness === 'traditional' ? 'Традиционное' : 'Тонкое') +
            ' тесто'
          )
        }
      }),
      price: combo.price[city._id],
      products: Object.entries(comboProducts).map(([id, product]) =>
        product.category
          ? {
              category: product.category,
              productId: product._id,
              name: product.name,
              defaultCount: product.defaultCount
            }
          : {
              category: 'pizza',
              productId: product._id,
              name: product.name,
              sizeChosen: size,
              thickness: thicknessObj[id]
            }
      )
    }
    props.productCartAdd(item)
    dispatch(clearGetProduct())
  }

  return pizzas && products ? (
    <div className='show-locality__selector'>
      <div
        className='show-locality__shadow'
        onClick={() => dispatch(clearGetProduct())}
      />
      <div className='locality-selector__wrapper'>
        <div className='modal-product__card'>
          <div style={{ display: 'flex' }}>
            <div className='combo-info__wrapper'>
              <div className='combo-info__section'>
                <div className='combo-info__title'>
                  <span style={{ fontSize: 24, lineHeight: '28px' }}>
                    {combo.name || `Комбо за ${combo.price[city._id]}`}
                  </span>
                  <InformationCircle
                    comboProducts={comboProducts}
                    thicknessObj={thicknessObj}
                    sizeChosen={size}
                    diameter={pizzaSizes[size]}
                  />
                </div>
                <div className='combo-info__desc'>{combo.description}</div>
                {combo?.items.map(item => (
                  <ComboProductSection
                    key={item._id}
                    item={item}
                    checkedItem={checkedItem}
                    setCheckedItem={setCheckedItem}
                    comboProducts={comboProducts}
                    setComboProducts={setComboProducts}
                    comboProductSelected={comboProductSelected}
                    setComboProductSelected={setComboProductSelected}
                    size={size}
                    setSize={setSize}
                    thicknessObj={thicknessObj}
                    setThicknessObj={setThicknessObj}
                    findItemFunc={findItemFunc}
                  />
                ))}
              </div>
              <div style={{ flex: '0 0 auto', padding: '16px 30px 30px' }}>
                <div style={{ lineHeight: '16px', marginBottom: 16 }}>
                  Стоимость
                  <div style={{ float: 'right' }}>
                    {combo.price[city._id].toLocaleString()} тг.
                  </div>
                  <div className='combo-full-price'>
                    {fullPrice.toLocaleString()} тг.
                  </div>
                </div>
                <button className='add-cart__button' onClick={onClick}>
                  В корзину
                </button>
              </div>
            </div>
            <div className='combo-choose__wrapper'>
              {checkedItem ? (
                <div className='combo-choose__product'>
                  {checkedItem.productsId[city._id].map(productId => (
                    <ComboProductChoose
                      product={findItemFunc(checkedItem.category, productId)}
                      selected={comboProductSelected === productId}
                      setSelected={setComboProductSelected}
                      thickness={thicknessObj[checkedItem._id]}
                      size={size}
                      diameter={pizzaSizes[size]}
                      key={productId}
                    />
                  ))}
                </div>
              ) : (
                <img
                  src={imagesURL + combo.image}
                  alt='Combo-card'
                  style={{ width: '100%', userSelect: 'none' }}
                />
              )}
            </div>
          </div>
          <img
            src={closeIcon}
            alt='Close Icon'
            className='close-icon'
            onClick={() => dispatch(clearGetProduct())}
          />
        </div>
      </div>
    </div>
  ) : null
}
export default ModalComboCard
