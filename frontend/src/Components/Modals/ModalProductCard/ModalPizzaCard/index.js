import { Fragment } from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import closeIcon from '../../../../images/close-icon.svg'
import { clearGetProduct } from '../../../../redux/actions/products/productsActions'
import {
  addQuantityAction,
  addToCartAction
} from '../../../../redux/actions/productsCartActions'
import { imagesURL } from '../../../../redux/store'
import InformationCircle from '../InformationCircle'
import '../styles.css'
import PizzaComposition from './PizzaComposition'
import PizzaSnack from './PizzaSnack'

const ModalPizzaCard = props => {
  const dispatch = useDispatch()
  const history = useHistory()

  const { sizeVars } = useSelector(state => state.pizzasList)
  const { pizza, pizzaSnacks } = useSelector(state => state.getPizza)
  const productsCart = useSelector(state => state.productsCart)

  const [sizeChosen, setSizeChosen] = useState(null)
  const [thickness, setThickness] = useState('traditional')
  const [checkedSnacks, setCheckedSnacks] = useState([])
  const [price, setPrice] = useState(0)
  const [removedCompose, setRemovedCompose] = useState([])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    history.replace({
      search: `product=${pizza._id}`,
      hash: history.location.hash
    })

    return () => {
      history.replace({ search: null, hash: history.location.hash })
      document.body.style.overflow = 'auto'
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!sizeChosen) setSizeChosen(pizza.price.medium ? 'medium' : 'small')
    else
      setPrice(
        checkedSnacks.reduce(
          (price, snackId) =>
            price +
            pizzaSnacks.filter(pizzaSnack => pizzaSnack._id === snackId)[0]
              .price[sizeChosen],
          pizza.price[sizeChosen]
        )
      )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkedSnacks, sizeChosen])

  const onClick = () => {
    const item = {
      productId: pizza._id,
      image: imagesURL + pizza.images[thickness][sizeChosen],
      name: pizza.name,
      sizeChosen,
      thickness,
      checkedSnacks,
      price,
      removedCompose
    }
    const checkProduct = productsCart?.find(
      product => JSON.stringify(product.item) === JSON.stringify(item)
    )
    checkProduct
      ? dispatch(addQuantityAction(item))
      : dispatch(addToCartAction(item))

    props.setSendingProduct(item)

    dispatch(clearGetProduct())
  }

  return pizza.images[thickness][sizeChosen] ? (
    <div className='show-locality__selector'>
      <div
        className='show-locality__shadow'
        onClick={() => dispatch(clearGetProduct())}
      />
      <div className='locality-selector__wrapper'>
        <div className='modal-product__card'>
          <div className='pizza__card-image'>
            <div className='card-image__wrapper'>
              <div className={`card-image ${sizeChosen}-pizza-img`}>
                <img
                  alt={pizza.name}
                  title={pizza.name}
                  className='pizza__img'
                  src={imagesURL + pizza.images[thickness][sizeChosen]}
                />
              </div>
              {pizza.price.medium && (
                <>
                  {sizeChosen === 'small' && (
                    <i className='medium-border border-icon'>
                      <svg
                        width='382'
                        height='382'
                        viewBox='0 0 382 382'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <circle
                          cx='191'
                          cy='191'
                          r='190'
                          stroke='#6F6E6F'
                          strokeWidth='0.6'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeDasharray='1 6.1'
                        ></circle>
                      </svg>
                    </i>
                  )}
                  {sizeChosen !== 'big' && (
                    <i className='big-border border-icon'>
                      <svg
                        width='450'
                        height='450'
                        viewBox='0 0 450 450'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <ellipse
                          opacity='0.6'
                          cx='225'
                          cy='225'
                          rx='224'
                          ry='224'
                          stroke='#6F6E6F'
                          strokeWidth='0.8'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeDasharray='2 12.2'
                        ></ellipse>
                      </svg>
                    </i>
                  )}
                </>
              )}
            </div>
          </div>
          <div className='pizza__card-info'>
            <div className='pizza-info'>
              <div style={{ padding: '0px 30px' }}>
                <div style={{ position: 'relative', paddingRight: 30 }}>
                  <span className='pizza-info__title'>{pizza.name}</span>
                  <InformationCircle
                    pizza={pizza}
                    thickness={thickness}
                    sizeChosen={sizeChosen}
                    diameter={sizeVars[sizeChosen]}
                  />
                </div>
                <div className='pizza-info__chosen'>
                  {sizeVars[sizeChosen]} см,{' '}
                  {thickness === 'traditional' ? 'традиционное' : 'тонкое'}{' '}
                  тесто, {pizza.weight[thickness][sizeChosen]} г
                </div>
                <div className='pizza-info__composition'>
                  {pizza.composition.map((compose, i) => (
                    <Fragment key={compose.name}>
                      <PizzaComposition
                        name={compose.name}
                        canRemove={compose.canRemove}
                        removedCompose={removedCompose}
                        setRemovedCompose={setRemovedCompose}
                      />
                      {i !== pizza.composition.length - 1 && ', '}
                    </Fragment>
                  ))}
                </div>
                <div className='pizza-info__size'>
                  <div
                    className={`product-chosen ${sizeChosen}-chosen`}
                    style={pizza.price.medium && { width: '33.33%' }}
                  />
                  <input
                    type='radio'
                    id='small-pizza'
                    className='product-size__input'
                    name='product-size'
                    checked={sizeChosen === 'small'}
                    onChange={() => {
                      setSizeChosen('small')
                      if (thickness === 'thin') setThickness('traditional')
                    }}
                  />
                  <label htmlFor='small-pizza' className='product-size__label'>
                    Маленькая
                  </label>
                  {pizza.price.medium && (
                    <>
                      <input
                        type='radio'
                        id='medium-pizza'
                        className='product-size__input'
                        name='product-size'
                        checked={sizeChosen === 'medium'}
                        onChange={() => setSizeChosen('medium')}
                      />
                      <label
                        htmlFor='medium-pizza'
                        className='product-size__label'
                      >
                        Средняя
                      </label>
                      <input
                        type='radio'
                        id='big-pizza'
                        className='product-size__input'
                        name='product-size'
                        checked={sizeChosen === 'big'}
                        onChange={() => setSizeChosen('big')}
                      />
                      <label
                        htmlFor='big-pizza'
                        className='product-size__label'
                      >
                        Большая
                      </label>
                    </>
                  )}
                </div>
                <div className='pizza-info__size'>
                  <div
                    className={`product-chosen ${thickness}-chosen`}
                    style={{ width: pizza.price.medium ? '50%' : '100%' }}
                  />
                  <input
                    type='radio'
                    id='thickness-traditional'
                    className='product-size__input'
                    name='product-thickness'
                    checked={
                      thickness === 'traditional' || sizeChosen === 'small'
                    }
                    onChange={() => setThickness('traditional')}
                  />
                  <label
                    htmlFor='thickness-traditional'
                    className='product-size__label'
                  >
                    Традиционное
                  </label>
                  {pizza.price.medium && (
                    <>
                      <input
                        type='radio'
                        id='thickness-thin'
                        className='product-size__input'
                        name='product-thickness'
                        checked={thickness === 'thin'}
                        onChange={() =>
                          sizeChosen !== 'small' && setThickness('thin')
                        }
                      />
                      <label
                        htmlFor='thickness-thin'
                        className='product-size__label'
                        data-disabled={sizeChosen === 'small'}
                      >
                        Тонкое
                      </label>
                    </>
                  )}
                </div>
                {pizzaSnacks.length > 0 && (
                  <div style={{ padding: '14px 0px 24px' }}>
                    <div className='product-snacks__title'>
                      Добавить в пиццу
                    </div>
                    <section className='product-snack-section'>
                      {pizzaSnacks.map(pizzaSnack => (
                        <PizzaSnack
                          key={pizzaSnack._id}
                          pizzaSnack={pizzaSnack}
                          size={sizeChosen}
                          thickness={thickness}
                          setCheckedSnacks={setCheckedSnacks}
                          checkedSnacks={checkedSnacks}
                        />
                      ))}
                    </section>
                  </div>
                )}
              </div>
            </div>
            <div style={{ margin: '24px 30px 30px' }}>
              <button className='add-cart__button' onClick={onClick}>
                Добавить в корзину за {price.toLocaleString()} тг.
              </button>
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
export default ModalPizzaCard
