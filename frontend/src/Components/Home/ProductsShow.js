const ProductsShow = props => (
  <article className='menu__meta-product'>
    <main className='menu__meta-main'>
      <img
        alt={props.product.name}
        title={props.product.name}
        className='menu__meta-img'
        src={props.product.image}
        onClick={() => props.setProductCardId(props.product._id)}
      />
      <div className='menu__meta-title'>{props.product.name}</div>
      {props.product.info || props.product.defaultCount}
    </main>
    <footer className='product-footer'>
      <div className='product-control-price'>
        от {props.product.price.toLocaleString()} тг.
      </div>
      <button
        className='product-button'
        onClick={() => props.setProductCardId(props.product._id)}
      >
        В корзину
      </button>
    </footer>
  </article>
)
export default ProductsShow
