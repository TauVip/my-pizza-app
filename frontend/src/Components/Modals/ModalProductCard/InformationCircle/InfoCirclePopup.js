const InfoCirclePopup = props => (
  <div className='info-popup__wrapper'>
    {props.combo && (
      <h1
        style={{
          font: '500 15px / 17px Dodo, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
          margin: '0px 0px 4px'
        }}
      >
        {props.pizza
          ? `${props.pizza.name} - ${
              props.thickness === 'thin' ? 'тонкое тесто' : 'традиционное тесто'
            }`
          : props.product.name}
      </h1>
    )}
    <h2 className='info-popup__title'>Пищевая ценность на 100 г</h2>
    <section className='info-popup__section'>
      <div>Энерг. ценность</div>
      <div>
        {props.pizza?.description.energyValue[props.thickness][
          props.sizeChosen
        ] || props.product.description.energyValue}{' '}
        ккал
      </div>
    </section>
    <section className='info-popup__section'>
      <div>Белки</div>
      <div>
        {props.pizza?.description.proteins[props.thickness][props.sizeChosen] ||
          props.product.description.proteins}{' '}
        г
      </div>
    </section>
    <section className='info-popup__section'>
      <div>Жиры</div>
      <div>
        {props.pizza?.description.fats[props.thickness][props.sizeChosen] ||
          props.product.description.fats}{' '}
        г
      </div>
    </section>
    <section className='info-popup__section'>
      <div>Углеводы</div>
      <div>
        {props.pizza?.description.carbohydrates[props.thickness][
          props.sizeChosen
        ] || props.product.description.carbohydrates}{' '}
        г
      </div>
    </section>
    {(props.pizza || props.product).weight && (
      <section className='info-popup__section'>
        <div>Вес</div>
        <div>
          {props.pizza?.weight[props.thickness][props.sizeChosen] ||
            props.product.weight}{' '}
          г
        </div>
      </section>
    )}
    {props.diameter && (
      <section className='info-popup__section'>
        <div>Диаметр</div>
        <div>{props.diameter} см</div>
      </section>
    )}
    {(props.pizza || props.product).description.addInfo?.map(addInfo => (
      <section className='info-popup__section' key={addInfo}>
        {addInfo}
      </section>
    ))}
  </div>
)
export default InfoCirclePopup
