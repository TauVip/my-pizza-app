import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import closeIcon from '../../../../images/close-icon.svg'
import { modalOpenAction } from '../../../../redux/actions/loginActions'
import InformationCircle from '../InformationCircle'
import ComboProductChoose from './ComboProductChoose'
import ComboProductSection from './ComboProductSection'

const ModalComboCard = props => {
  const combo = {
    name: 'Комбо за 2 650 тг.',
    description:
      'Наш хит «Аррива!» или другая пицца 25 см, Додстер, напиток и соус. Выбор пицц ограничен',
    price: 2650,
    items: [
      {
        productsId: [
          '60efb7e16fe49c2f24bcf5fb',
          '60efd0346fe49c2f24bcf601',
          '60efcb026fe49c2f24bcf600',
          '60eeacd02c89e728981370fb',
          '60ee84ce1fecbc14c4e6b5f3',
          '60eea79b2c89e728981370fa'
        ],
        default: '60efb7e16fe49c2f24bcf5fb',
        category: 'pizzas',
        size: 'small',
        thickness: 'traditional'
      },
      {
        productsId: ['60f649607b9ed7012cf01b52', '60f6485d7b9ed7012cf01b50'],
        default: '60f649607b9ed7012cf01b52',
        category: 'snacks'
      },
      {
        productsId: [
          '60f69af630d3c2052c49c37f',
          '60f69cae30d3c2052c49c383',
          '60f69de930d3c2052c49c386',
          '60f691e1f4c44505209148f3',
          '60f694155078231b8c133e20',
          '60f694a15078231b8c133e23',
          '60f695665078231b8c133e26',
          '60f695205078231b8c133e25',
          '60f697755078231b8c133e2d',
          '60f6a25e3a91d90fec508663'
        ],
        default: '60f691e1f4c44505209148f3',
        category: 'drinks'
      },
      {
        productsId: [
          '60ffaa15996e2228f0aff0ed',
          '60ffaa55996e2228f0aff0ef',
          '60ffaa64996e2228f0aff0f0',
          '60ffaa41996e2228f0aff0ee'
        ],
        default: '60ffaa15996e2228f0aff0ed',
        category: 'sauces'
      }
    ]
  }

  const dispatch = useDispatch()

  const [comboProducts, setComboProducts] = useState([])
  const [checkedItem, setCheckedItem] = useState(null)
  const [comboProductSelected, setComboProductSelected] = useState(null)

  useEffect(() => {
    dispatch(modalOpenAction(true))

    return () => dispatch(modalOpenAction(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='show-locality__selector'>
      <div
        className='show-locality__shadow'
        onClick={() => props.setShowComboCard(false)}
      />
      <div className='locality-selector__wrapper'>
        <div className='modal-product__card'>
          <div style={{ display: 'flex' }}>
            <div className='combo-info__wrapper'>
              <div className='combo-info__section'>
                <div className='combo-info__title'>
                  <span style={{ fontSize: 24, lineHeight: '28px' }}>
                    Комбо за 2 650 тг.
                  </span>
                  <InformationCircle
                    comboProducts={comboProducts}
                    thickness='traditional'
                    sizeChosen='small'
                  />
                </div>
                <div className='combo-info__desc'>
                  Наш хит «Аррива!» или другая пицца 25 см, Додстер, напиток и
                  соус. Выбор пицц ограничен
                </div>
                {combo.items.map((item, i) => (
                  <ComboProductSection
                    key={i}
                    item={item}
                    checked={
                      JSON.stringify(checkedItem) === JSON.stringify(item)
                    }
                    setCheckedItem={setCheckedItem}
                    index={i}
                    comboProducts={comboProducts}
                    setComboProducts={setComboProducts}
                    comboProductSelected={comboProductSelected}
                    setComboProductSelected={setComboProductSelected}
                  />
                ))}
              </div>
              <div style={{ flex: '0 0 auto', padding: '16px 30px 30px' }}>
                <div style={{ lineHeight: '16px', marginBottom: 16 }}>
                  Стоимость
                  <div style={{ float: 'right' }}>2 650 тг.</div>
                  <div className='combo-full-price'>3 150 тг.</div>
                </div>
                <button className='add-cart__button'>В корзину</button>
              </div>
            </div>
            <div className='combo-choose__wrapper'>
              {checkedItem ? (
                <div className='combo-choose__product'>
                  {checkedItem.productsId.map(productId => (
                    <ComboProductChoose
                      productId={productId}
                      category={checkedItem.category}
                      selected={comboProductSelected === productId}
                      setSelected={setComboProductSelected}
                      key={productId}
                    />
                  ))}
                </div>
              ) : (
                <img
                  src='https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/e4aecdc6e454411b912eb335be5249de_1875x1875.webp'
                  alt=''
                  style={{ width: '100%', userSelect: 'none' }}
                />
              )}
            </div>
          </div>
          <img
            src={closeIcon}
            alt='Close Icon'
            className='close-icon'
            onClick={() => props.setShowComboCard(false)}
          />
        </div>
      </div>
    </div>
  )
}
export default ModalComboCard
