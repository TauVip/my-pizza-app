import { useState } from 'react'
import closeIcon from '../../../../images/close-icon.svg'
import ChooseHalvePizza from './ChooseHalvePizza'
import SelectedHalveSection from './SelectedHalveSection'

const ModalAssemblePizza = props => {
  const [thickness, setThickness] = useState('traditional')

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
              {Array.from({ length: 5 }).map(() => (
                <ChooseHalvePizza />
              ))}
              <ChooseHalvePizza />
              {Array.from({ length: 5 }).map(() => (
                <ChooseHalvePizza />
              ))}
            </div>
            <div className='choose-halves__selected'>
              <div className='halves__selected-images'>
                <img
                  src='https://dodopizza-a.akamaihd.net/site-static/dist/c6707f17b454b0af1283.svg'
                  alt=''
                  className='halves__selected-none'
                />
                <div className='halves__selected left'>
                  <img
                    src='https://dodopizza-a.akamaihd.net/static/Img/Products/b72f19ea8d934c42a8df55f17a2cc993_292x292.jpeg'
                    alt='Гавайская'
                    title='Гавайская'
                    className='halves__selected-img left'
                  />
                </div>
                <div className='halves__selected right'>
                  <img
                    src='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b0e036ed-7d5c-4554-b570-531c10918d62.jpg'
                    alt='Пепперони'
                    title='Пепперони'
                    className='halves__selected-img right'
                  />
                </div>
              </div>
              <div className='halves__selected-desc'>
                <SelectedHalveSection />
                <SelectedHalveSection />
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
                    className='product-size__label'>
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
                    className='product-size__label'>
                    Тонкое
                  </label>
                </div>
                <button className='add-card__button'>
                  Добавить в корзину за 3 550 тг.
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
