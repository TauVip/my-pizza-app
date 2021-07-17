import { useState } from 'react'

const ChooseHalvePizza = () => {
  const [halveSelected, setHalveSelected] = useState(false)

  return (
    <div
      className='choose-halves__menu'
      onClick={() => setHalveSelected(!halveSelected)}>
      <div className='menu-img__wrapper' data-selected={halveSelected}>
        <img
          src='https://dodopizza-a.akamaihd.net/static/Img/Products/8a94610faea04c68bbf15f68d2b03626_233x233.jpeg'
          alt='Сырная'
          title='Сырная'
          className='halves__menu-img'
          data-selected={halveSelected}
        />
        {halveSelected && <div className='halves__menu-curtain' />}
      </div>
      <div className='halves__menu-desc'>
        <div>Сырная</div>
        <span className='halves__menu-price'>1 550 тг.</span>
      </div>
    </div>
  )
}
export default ChooseHalvePizza
