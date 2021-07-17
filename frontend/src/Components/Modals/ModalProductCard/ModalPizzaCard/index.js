import { Fragment } from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import closeIcon from '../../../../images/close-icon.svg'
import {
  clearGetPizza,
  getPizzaAction
} from '../../../../redux/actions/pizzasAction'
import '../styles.css'
import PizzaComposition from './PizzaComposition'
import PizzaSnack from './PizzaSnack'

const ModalPizzaCard = props => {
  const dispatch = useDispatch()

  const { pizza, pizzaSnacks } = useSelector(state => state.getPizza)

  const [iHover, setIHover] = useState(false)
  const [iActive, setIActive] = useState(false)
  const [sizeChosen, setSizeChosen] = useState(null)
  const [thickness, setThickness] = useState('traditional')
  const [checkedSnacks, setCheckedSnacks] = useState([])
  const [price, setPrice] = useState(0)

  const sizeVars = { small: 25, medium: 30, big: 35 }

  useEffect(() => {
    if (!pizza) dispatch(getPizzaAction(props.pizzaId))
    else {
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
    }
  }, [checkedSnacks, dispatch, pizza, pizzaSnacks, props.pizzaId, sizeChosen])

  return (
    <div className='show-locality__selector'>
      <div className='show-locality__shadow' />
      <div className='locality-selector__wrapper'>
        {pizza && (
          <div className='modal-product__card'>
            <div className='product__card-image'>
              <div className='card-image__wrapper'>
                <div className={`card-image ${sizeChosen}-pizza-img`}>
                  <img
                    alt={pizza.name}
                    className='pizza__img'
                    src={pizza.images[thickness][sizeChosen]}
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
                          xmlns='http://www.w3.org/2000/svg'>
                          <circle
                            cx='191'
                            cy='191'
                            r='190'
                            stroke='#6F6E6F'
                            strokeWidth='0.6'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeDasharray='1 6.1'></circle>
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
                          xmlns='http://www.w3.org/2000/svg'>
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
                            strokeDasharray='2 12.2'></ellipse>
                        </svg>
                      </i>
                    )}
                  </>
                )}
              </div>
            </div>
            <div className='product__card-info'>
              <div className='product-info'>
                <div style={{ padding: '0px 30px' }}>
                  <div style={{ position: 'relative', paddingRight: 30 }}>
                    <span className='product-info__title'>{pizza.name}</span>
                    <div className='product-info__additional'>
                      <i
                        className='additional__info-icon'
                        onMouseOver={() => setIHover(true)}
                        onMouseLeave={() => setIHover(false)}
                        onClick={() => setIActive(!iActive)}>
                        <svg
                          viewBox='0 0 23 23'
                          preserveAspectRatio='xMidYMin meet'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fill={
                              iHover || iActive ? 'rgb(92, 99, 112)' : '#f1f2f5'
                            }
                            style={{ transition: 'fill 150ms ease-out 0s' }}
                            d='M23 11.5C23 17.8513 17.8513 23 11.5 23C5.14873 23 0 17.8513 0 11.5C0 5.14873 5.14873 0 11.5 0C17.8513 0 23 5.14873 23 11.5Z'></path>
                          <path
                            fill={
                              iHover || iActive
                                ? 'rgb(255, 255, 255)'
                                : '#000000'
                            }
                            style={{ transition: 'fill 150ms ease-out 0s' }}
                            d='M11.5 8C12.0658 8 12.5 7.56579 12.5 7C12.5 6.44737 12.0789 6 11.5 6C10.9605 6 10.5 6.44737 10.5 7C10.5 7.56579 10.9737 8 11.5 8ZM12.2968 16.1278C12.2968 16.6108 11.9716 17 11.4903 17C11.022 17 10.6968 16.6108 10.6968 16.1278V10.5722C10.6968 10.0892 11.022 9.7 11.4903 9.7C11.9846 9.7 12.2968 10.0892 12.2968 10.5722V16.1278Z'></path>
                        </svg>
                      </i>
                      {iActive && (
                        <div className='additional__info-popup'>
                          <i className='info-popup__pointer'>
                            <svg
                              viewBox='0 0 18 12'
                              version='1.1'
                              xmlns='http://www.w3.org/2000/svg'>
                              <path
                                transform='translate(-2 0)'
                                fillRule='evenodd'
                                d='M 9.52569 1.60834L 3.07216 8.64855C 1.89626 9.93135 2.80626 12 4.54647 12L 17.4535 12C 19.1937 12 20.1037 9.93135 18.9278 8.64855L 12.4743 1.60834C 11.6816 0.743602 10.3184 0.743603 9.52569 1.60834Z'></path>
                            </svg>
                          </i>
                          <h2 className='info-popup__title'>
                            Пищевая ценность на 100 г
                          </h2>
                          <section className='info-popup__section'>
                            <div>Энерг. ценность</div>
                            <div>
                              {
                                pizza.description.energyValue[thickness][
                                  sizeChosen
                                ]
                              }{' '}
                              ккал
                            </div>
                          </section>
                          <section className='info-popup__section'>
                            <div>Белки</div>
                            <div>
                              {
                                pizza.description.proteins[thickness][
                                  sizeChosen
                                ]
                              }{' '}
                              г
                            </div>
                          </section>
                          <section className='info-popup__section'>
                            <div>Жиры</div>
                            <div>
                              {pizza.description.fats[thickness][sizeChosen]} г
                            </div>
                          </section>
                          <section className='info-popup__section'>
                            <div>Углеводы</div>
                            <div>
                              {
                                pizza.description.carbohydrates[thickness][
                                  sizeChosen
                                ]
                              }{' '}
                              г
                            </div>
                          </section>
                          <section className='info-popup__section'>
                            <div>Вес</div>
                            <div>{pizza.weight[thickness][sizeChosen]} г</div>
                          </section>
                          <section className='info-popup__section'>
                            <div>Диаметр</div>
                            <div>{sizeVars[sizeChosen]} см</div>
                          </section>
                          {pizza.description.addInfo &&
                            pizza.description.addInfo.map(addInfo => (
                              <section
                                className='info-popup__section'
                                key={addInfo}>
                                {addInfo}
                              </section>
                            ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className='product-info__chosen'>
                    {sizeVars[sizeChosen]} см,{' '}
                    {thickness === 'traditional' ? 'традиционное' : 'тонкое'}{' '}
                    тесто, {pizza.weight[thickness][sizeChosen]} г
                  </div>
                  <div className='product-info__composition'>
                    {pizza.composition.map((compose, i) => (
                      <Fragment key={compose.name}>
                        <PizzaComposition
                          name={compose.name}
                          canRemove={compose.canRemove}
                        />
                        {i !== pizza.composition.length - 1 && ', '}
                      </Fragment>
                    ))}
                  </div>
                  <div className='product-info__size'>
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
                    <label
                      htmlFor='small-pizza'
                      className='product-size__label'>
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
                          className='product-size__label'>
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
                          className='product-size__label'>
                          Большая
                        </label>
                      </>
                    )}
                  </div>
                  <div className='product-info__size'>
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
                      className='product-size__label'>
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
                          data-disabled={sizeChosen === 'small'}>
                          Тонкое
                        </label>
                      </>
                    )}
                  </div>
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
                </div>
              </div>
              <div style={{ margin: '24px 30px 30px' }}>
                <button className='add-card__button'>
                  Добавить в корзину за {price.toLocaleString()} тг.
                </button>
              </div>
            </div>
            <img
              src={closeIcon}
              alt='Close Icon'
              className='close-icon'
              onClick={() => {
                dispatch(clearGetPizza())
                props.setPizzaId(null)
              }}
            />
          </div>
        )}
      </div>
    </div>
  )
}
export default ModalPizzaCard
