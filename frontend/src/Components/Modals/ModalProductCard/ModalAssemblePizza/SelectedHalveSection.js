import { Fragment, useState } from 'react'
import InformationCircle from '../InformationCircle'
import PizzaComposition from '../ModalPizzaCard/PizzaComposition'

const SelectedHalveSection = props => {
  const [removedCompose, setRemovedCompose] = useState([])

  return (
    <div className='selected__halve-section'>
      <div className='halve-img__wrapper'>
        {props.halveSelected ? (
          <>
            <img
              src={props.halveSelected.images[props.thickness].big}
              alt={props.halveSelected.name}
              title={props.halveSelected.name}
              className='halves__menu-img'
            />
            <div className={`halves__menu-curtain ${props.left && 'left'}`} />
          </>
        ) : (
          <img
            src='https://dodopizza.kz/dist/fdb09565b56cb9ae35ac.svg'
            alt='Halve not selected'
            className='halves__menu-img'
          />
        )}
      </div>
      <div className='selected__halve-info'>
        {props.halveSelected ? (
          <>
            <div className='halve-title__wrapper'>
              <span>{props.halveSelected.name}</span>
              <InformationCircle
                pizza={props.halveSelected}
                thickness={props.thickness}
                sizeChosen='small'
              />
            </div>
            <div className='halve-composition__wrapper'>
              {props.halveSelected.composition.map((compose, i) => (
                <Fragment key={i}>
                  <PizzaComposition
                    name={compose.name}
                    canRemove={compose.canRemove}
                    removedCompose={removedCompose}
                    setRemovedCompose={setRemovedCompose}
                  />
                  {i !== props.halveSelected.composition.length - 1 && ', '}
                </Fragment>
              ))}
            </div>
          </>
        ) : (
          <div className='selected__halve-empty'>
            Выберите {props.left ? 'левую' : 'правую'} половинку
          </div>
        )}
      </div>
    </div>
  )
}
export default SelectedHalveSection
