import closeIcon from '../../../../images/close-icon.svg'
import InformationCircle from '../InformationCircle'

const ModalComboCard = props => {
  const product = {
    category: 'drinks',
    name: 'Кофе Латте 0.4 л',
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/1e13f05e0d9046528933bcc6e1215c07_1875x1875.jpeg',
    defaultCount: '0.4 л',
    price: 570,
    info: 'Горячий напиток на основе эспрессо с увеличенной порцией молока',
    weight: 330,
    description: {
      energyValue: 57.1,
      proteins: 2.8,
      fats: 3.1,
      carbohydrates: 4.2
    }
  }

  return (
    <div className='show-locality__selector'>
      <div className='show-locality__shadow' />
      <div className='locality-selector__wrapper'>
        <div className='modal-product__card'>
          <div style={{ display: 'flex' }}>
            <div className='combo-info__wrapper'>
              <div className='combo-info__section'>
                <div className='combo-info__title'>
                  <span style={{ fontSize: 24, lineHeight: '28px' }}>
                    Комбо за 2 650 тг.
                  </span>
                  <InformationCircle product={product} />
                </div>
                <div className='combo-info__desc'>
                  Наш хит «Аррива!» или другая пицца 25 см, Додстер, напиток и
                  соус. Выбор пицц ограничен
                </div>
                <div className='combo-product__section'>
                  <img
                    src='https://dodopizza-a.akamaihd.net/static/Img/Products/2e8c610d59ce49fbae8f8909b2940343_233x233.jpeg'
                    alt=''
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
                    <div className='combo-product__title'>Аррива!</div>
                    <div style={{ fontSize: 12, lineHeight: '16px' }}>
                      Соус бургер, цыпленок, соус ранч, чоризо из цыпленка,
                      сладкий перец, красный лук, моцарелла, томаты, чеснок
                    </div>
                    <div className='combo-product__size'>
                      Маленькая 25 см, традиционное тесто
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='combo-choose__wrapper'></div>
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
