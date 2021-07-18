import InformationCircle from './InformationCircle'
import closeIcon from '../../../images/close-icon.svg'

const ModalProductCard = props => {
  return (
    <div className='show-locality__selector'>
      <div className='show-locality__shadow' />
      <div className='locality-selector__wrapper'>
        <div className='modal-product__card'>
          <div className='product__card-image'>
            <div className='card-image__wrapper'>
              <div className='card-image'>
                <img
                  alt='Томатный суп с гренками'
                  title='Томатный суп с гренками'
                  className='pizza__img'
                  src='https://dodopizza-a.akamaihd.net/static/Img/Products/bbe43b83a9f34ec3bbcdb2b7b67749bc_1875x1875.jpeg'
                />
              </div>
            </div>
          </div>
          <div className='product__card-info'>
            <div className='product-info'>
              <div style={{ padding: '0px 30px' }}>
                <div style={{ position: 'relative', paddingRight: 30 }}>
                  <span className='product-info__title'>
                    Томатный суп с гренками
                  </span>
                  <InformationCircle />
                </div>
                <div className='product-info__chosen'>1 шт</div>
                <div className='product-info__composition'>
                  Суп на основе натурального томатного соуса с хрустящими
                  гренками.
                </div>
              </div>
            </div>
            <div style={{ margin: '24px 30px 30px' }}>
              <button className='add-cart__button'>
                Добавить в корзину за 490 тг.
              </button>
            </div>
          </div>
          <img
            src={closeIcon}
            alt='Close Icon'
            className='close-icon'
            onClick={() => props.setShowProductCard(false)}
          />
        </div>
      </div>
    </div>
  )
}
export default ModalProductCard
