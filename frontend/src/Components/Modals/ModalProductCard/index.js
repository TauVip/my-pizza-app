import InformationCircle from './InformationCircle'
import closeIcon from '../../../images/close-icon.svg'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { clearGetProduct } from '../../../redux/actions/products/productsActions'
import { imagesURL } from '../../../redux/store'

const ModalProductCard = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const { product } = useSelector(state => state.getProduct)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    history.replace({
      search: `product=${product._id}`,
      hash: history.location.hash
    })

    return () => {
      history.replace({ search: null, hash: history.location.hash })
      document.body.style.overflow = 'auto'
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='show-locality__selector'>
      <div
        className='show-locality__shadow'
        onClick={() => dispatch(clearGetProduct())}
      />
      <div className='locality-selector__wrapper'>
        <div className='modal-product__card'>
          <section style={{ display: 'flex' }}>
            <div className='product__card-image'>
              <img
                alt={product.name}
                title={product.name}
                style={{ width: '100%' }}
                src={imagesURL + product.image}
              />
            </div>
            <main className='product__card-info'>
              <div style={{ position: 'relative', paddingRight: 30 }}>
                <span className='pizza-info__title'>{product.name}</span>
                {product.description && <InformationCircle product={product} />}
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
            onClick={() => dispatch(clearGetProduct())}
          />
        </div>
      </div>
    </div>
  )
}
export default ModalProductCard
