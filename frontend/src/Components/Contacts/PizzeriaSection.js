import { useState } from 'react'
import { Link } from 'react-router-dom'
import TimeRatingPopup from '../TimeRatingPopup'

const PizzeriaSection = ({ pizzeria }) => {
  const [timingDesc, setTimingDesc] = useState(false)

  return (
    <div className='contacts-pizzerias__section-item'>
      <span style={{ marginTop: 44 }}>
        <Link
          className='contacts-pizzerias__block-link'
          to={`/${pizzeria.link}`}>
          {pizzeria.name}
        </Link>
        {pizzeria.deliveryRating && (
          <div
            className='header__about-timing'
            onMouseEnter={() => setTimingDesc(true)}
            onMouseLeave={() => setTimingDesc(false)}>
            {pizzeria.deliveryRating.deliveryTime} мин -{' '}
            {pizzeria.deliveryRating.rating}{' '}
            <span className='rating'>&#9733;</span>
          </div>
        )}
        {timingDesc && <TimeRatingPopup />}
        <div>
          {pizzeria.metroStation.length > 0 && (
            <span className='contacts-pizzerias__item'>
              <svg
                width='20'
                height='17'
                viewBox='0 0 20 15'
                className='metro-icon'>
                <path
                  fill='#EB1D00'
                  fillRule='evenodd'
                  d='M13.399.056h-.158L9.88 6.54 6.401 0 1.638 11.816H.406v.949H7.15v-.95H5.813L7.15 8.124l2.73 4.642 2.624-4.642 1.338 3.693h-1.338v.949h6.691v-.95h-1.159z'></path>
              </svg>
              {pizzeria.metroStation.join(', ')}
            </span>
          )}
          <span className='contacts-pizzerias__item'>{pizzeria.address}</span>
          {pizzeria.delivery && (
            <span className='contacts-pizzerias__item'>
              {pizzeria.delivery.deliveryMethod}
              <div className='contacts-pizzerias__schedule'>
                {pizzeria.delivery.deliverySchedule}
              </div>
            </span>
          )}
          {pizzeria.restaurantSchedule && (
            <span className='contacts-pizzerias__item'>
              Ресторан
              <div className='contacts-pizzerias__schedule'>
                {pizzeria.restaurantSchedule}
              </div>
            </span>
          )}
        </div>
      </span>
    </div>
  )
}
export default PizzeriaSection
