import InformationCircle from './InformationCircle'
import closeIcon from '../../../images/close-icon.svg'

const ModalProductCard = props => {
  const product = {
    name: 'Томатный суп с гренками',
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/bbe43b83a9f34ec3bbcdb2b7b67749bc_1875x1875.jpeg',
    info: 'Суп на основе натурального томатного соуса с хрустящими гренками.',
    defaultCount: '10 шт',
    weight: 1,
    price: 100,
    description: {
      energyValue: 2,
      proteins: 3,
      fats: 4,
      carbohydrates: 5,
      addInfo: [
        'Содержит аллергены: молоко, орехи',
        'Может содержать аллергены: аспартам, горчица, диоксид серы и сульфиты, кунжут, моллюски, орехи, ракообразные, рыба, сельдерей, соя, яйца'
      ]
    }
  }

  return (
    <div className='show-locality__selector'>
      <div className='show-locality__shadow' />
      <div className='locality-selector__wrapper'>
        <div className='modal-product__card'>
          <section style={{ display: 'flex' }}>
            <div className='product__card-image'>
              <img
                alt={product.name}
                title={product.name}
                style={{ width: '100%' }}
                src={product.image}
              />
            </div>
            <main className='product__card-info'>
              <div style={{ position: 'relative', paddingRight: 30 }}>
                <span className='pizza-info__title'>{product.name}</span>
                <InformationCircle product={product} />
              </div>
              <span style={{ margin: '4px 0', color: 'rgb(92, 99, 112)' }}>
                {product.defaultCount}
              </span>
              <div style={{ marginBottom: 32, flex: '1 1 auto' }}>
                {product.info}
              </div>
              <button className='add-cart__button'>
                Добавить в корзину за {product.price.toLocaleString()} тг.
              </button>
            </main>
          </section>
          <img
            src={closeIcon}
            alt='Close Icon'
            className='close-icon'
            onClick={() => props.setProductCard(false)}
          />
        </div>
      </div>
    </div>
  )
}
export default ModalProductCard
