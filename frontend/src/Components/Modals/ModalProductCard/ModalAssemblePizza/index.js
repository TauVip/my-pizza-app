import { useState } from 'react'
import { useSelector } from 'react-redux'
import closeIcon from '../../../../images/close-icon.svg'
import ChooseHalvePizza from './ChooseHalvePizza'
import SelectedHalveSection from './SelectedHalveSection'

const ModalAssemblePizza = props => {
  const { pizzas } = useSelector(state => state.fetchPizzas)

  const [thickness, setThickness] = useState('traditional')
  const [leftHalveSelected, setLeftHalveSelected] = useState(null)
  const [rightHalveSelected, setRightHalveSelected] = useState(null)
  const [addCartError, setAddCartError] = useState(false)

  const onAddCart = () => {
    if (!leftHalveSelected || !rightHalveSelected) {
      setAddCartError(true)
      setTimeout(() => setAddCartError(false), 2000)
    }
  }

  return (
    <div className='show-locality__selector'>
      <div className='show-locality__shadow' />
      <div className='locality-selector__wrapper'>
        <div className='modal-product__card'>
          <div className='choose-halves__wrapper'>
            <div className='choose-halves__pizzas'>
              <div className='choose-halves__title'>
                Выберите пиццы для левой и правой половинки
              </div>
              {pizzas?.map(
                pizza =>
                  pizza.price.big && (
                    <ChooseHalvePizza
                      pizza={pizza}
                      leftHalveSelected={leftHalveSelected}
                      setLeftHalveSelected={setLeftHalveSelected}
                      rightHalveSelected={rightHalveSelected}
                      setRightHalveSelected={setRightHalveSelected}
                      thickness={thickness}
                      key={pizza._id}
                    />
                  )
              )}
            </div>
            <div className='choose-halves__selected'>
              <div className='halves-desc__wrapper'>
                <div className='halves__selected-images'>
                  <img
                    src='https://dodopizza-a.akamaihd.net/site-static/dist/c6707f17b454b0af1283.svg'
                    alt=''
                    className='halves__selected-none'
                  />
                  {leftHalveSelected && (
                    <div className='halves__selected left'>
                      <img
                        src={leftHalveSelected.images[thickness].big}
                        alt={leftHalveSelected.name}
                        title={leftHalveSelected.name}
                        className='halves__selected-img left'
                      />
                    </div>
                  )}
                  {rightHalveSelected && (
                    <div className='halves__selected right'>
                      <img
                        src={rightHalveSelected.images[thickness].big}
                        alt={rightHalveSelected.name}
                        title={rightHalveSelected.name}
                        className='halves__selected-img right'
                      />
                    </div>
                  )}
                </div>
                <div className='halves__selected-desc'>
                  <SelectedHalveSection
                    halveSelected={leftHalveSelected}
                    thickness={thickness}
                    left={true}
                  />
                  <SelectedHalveSection
                    halveSelected={rightHalveSelected}
                    thickness={thickness}
                  />
                </div>
              </div>
              <div className='halves-buttons__wrapper'>
                <div className='product-info__size'>
                  <div className={`product-chosen`} />
                  <input
                    type='radio'
                    id='big-pizza'
                    className='product-size__input'
                    name='product-size'
                    defaultChecked={true}
                  />
                  <label htmlFor='big-pizza' className='product-size__label'>
                    Большая 35 см
                  </label>
                </div>
                <div className='product-info__size'>
                  <div
                    className={`product-chosen ${thickness}-chosen`}
                    style={{ width: '50%' }}
                  />
                  <input
                    type='radio'
                    id='thickness-traditional'
                    className='product-size__input'
                    name='product-thickness'
                    checked={thickness === 'traditional'}
                    onChange={() => setThickness('traditional')}
                  />
                  <label
                    htmlFor='thickness-traditional'
                    className='product-size__label'
                  >
                    Традиционное
                  </label>
                  <input
                    type='radio'
                    id='thickness-thin'
                    className='product-size__input'
                    name='product-thickness'
                    checked={thickness === 'thin'}
                    onChange={() => setThickness('thin')}
                  />
                  <label
                    htmlFor='thickness-thin'
                    className='product-size__label'
                  >
                    Тонкое
                  </label>
                </div>
                <button className='add-cart__button' onClick={onAddCart}>
                  {addCartError && (
                    <div className='add__cart-popup'>
                      Выберите {!leftHalveSelected ? 'левую' : 'правую'}{' '}
                      половинку
                      <i className='cart-popup__pointer'>
                        <svg
                          viewBox='0 0 18 12'
                          version='1.1'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            transform='translate(-2 0)'
                            fillRule='evenodd'
                            d='M 9.52569 1.60834L 3.07216 8.64855C 1.89626 9.93135 2.80626 12 4.54647 12L 17.4535 12C 19.1937 12 20.1037 9.93135 18.9278 8.64855L 12.4743 1.60834C 11.6816 0.743602 10.3184 0.743603 9.52569 1.60834Z'
                          ></path>
                        </svg>
                      </i>
                    </div>
                  )}
                  {!leftHalveSelected || !rightHalveSelected
                    ? 'В корзину'
                    : `Добавить в корзину за ${(
                        leftHalveSelected.price.small +
                        rightHalveSelected.price.small
                      ).toLocaleString()} тг.`}
                </button>
              </div>
            </div>
          </div>
          <img
            src={closeIcon}
            alt='Close Icon'
            className='close-icon'
            onClick={() => props.setShowAssemblePizza(false)}
          />
        </div>
      </div>
    </div>
  )
}
export default ModalAssemblePizza