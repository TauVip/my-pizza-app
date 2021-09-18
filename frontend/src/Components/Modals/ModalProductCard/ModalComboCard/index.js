import { useEffect, useState } from 'react'
import { /*useDispatch,*/ useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import closeIcon from '../../../../images/close-icon.svg'
//import { getComboAction } from '../../../../redux/actions/products/comboProductsActions'
import InformationCircle from '../InformationCircle'
import ComboProductChoose from './ComboProductChoose'
import ComboProductSection from './ComboProductSection'

const ModalComboCard = props => {
  //const dispatch = useDispatch()
  const history = useHistory()

  const { combo } = useSelector(state => state.getCombo)
  const { pizzas, sizeVars } = useSelector(state => state.pizzasList)
  const { products } = useSelector(state => state.productsList)

  const [comboProducts, setComboProducts] = useState({})
  const [fullPrice, setFullPrice] = useState(0)
  const [checkedItem, setCheckedItem] = useState(null)
  const [comboProductSelected, setComboProductSelected] = useState(null)
  const [size, setSize] = useState(null)
  const [thicknessObj, setThicknessObj] = useState({})

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    //dispatch(getComboAction(props.comboCardId))
    history.replace({
      search: `product=${props.comboCardId}`,
      hash: history.location.hash
    })
    localStorage.setItem('comboCardId', props.comboCardId)

    return () => {
      localStorage.removeItem('comboCardId')
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
            ? product.price + count
            : product?.price[size] + count,
        0
      )
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comboProducts])

  const findItemFunc = (category, id) => {
    const findItem = item => item._id === id
    return category === 'pizzas'
      ? pizzas.find(findItem)
      : products[category].find(findItem)
  }

  return combo ? (
    <div className='show-locality__selector'>
      <div
        className='show-locality__shadow'
        onClick={() => props.setComboCardId(null)}
      />
      <div className='locality-selector__wrapper'>
        <div className='modal-product__card'>
          <div style={{ display: 'flex' }}>
            <div className='combo-info__wrapper'>
              <div className='combo-info__section'>
                <div className='combo-info__title'>
                  <span style={{ fontSize: 24, lineHeight: '28px' }}>
                    {combo.name}
                  </span>
                  <InformationCircle
                    comboProducts={comboProducts}
                    thicknessObj={thicknessObj}
                    sizeChosen={size}
                    diameter={sizeVars[size]}
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
                    {combo.price.toLocaleString()} тг.
                  </div>
                  <div className='combo-full-price'>
                    {fullPrice.toLocaleString()} тг.
                  </div>
                </div>
                <button className='add-cart__button'>В корзину</button>
              </div>
            </div>
            <div className='combo-choose__wrapper'>
              {checkedItem ? (
                <div className='combo-choose__product'>
                  {checkedItem.productsId.map(productId => (
                    <ComboProductChoose
                      product={findItemFunc(checkedItem.category, productId)}
                      selected={comboProductSelected === productId}
                      setSelected={setComboProductSelected}
                      thickness={thicknessObj[checkedItem._id]}
                      size={size}
                      diameter={sizeVars[size]}
                      key={productId}
                    />
                  ))}
                </div>
              ) : (
                <img
                  src={combo.image}
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
            onClick={() => props.setComboCardId(null)}
          />
        </div>
      </div>
    </div>
  ) : null
}
export default ModalComboCard
