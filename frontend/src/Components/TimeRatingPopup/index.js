import { useState, useEffect } from 'react'
import './styles.css'

const TimeRatingPopup = () => {
  const [leavingLeft, setLeavingLeft] = useState(false)

  useEffect(() => {
    if (document.querySelector('.timing-description__wrapper').offsetLeft < 0)
      setLeavingLeft(true)
  }, [])

  return (
    <div className='timing-description__wrapper' data-leavingleft={leavingLeft}>
      <div className='timing-description'>
        <i className='pointer-icon' data-leavingleft={leavingLeft}>
          <svg
            viewBox='0 0 18 12'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              transform='translate(-2 0)'
              fillRule='evenodd'
              d='M 9.52569 1.60834L 3.07216 8.64855C 1.89626 9.93135 2.80626 12 4.54647 12L 17.4535 12C 19.1937 12 20.1037 9.93135 18.9278 8.64855L 12.4743 1.60834C 11.6816 0.743602 10.3184 0.743603 9.52569 1.60834Z'
            ></path>
          </svg>
        </i>
        <div className='time-rate-desc'>
          <div style={{ fontSize: 26 }}>26 минут</div>
          <div style={{ marginTop: 2 }}>Среднее время доставки</div>
          <div
            style={{
              marginTop: 5,
              color: 'rgba(255, 255, 255, 0.7)'
            }}
          >
            Если не успеем за 60 минут, вы получите сертификат на большую пиццу
          </div>
        </div>
        <div className='time-rate-desc'>
          <div style={{ fontSize: 26 }}>
            4.81{' '}
            <span className='rating'>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          </div>
          <div style={{ marginTop: 2 }}>121 оценка</div>
          <div
            style={{
              marginTop: 5,
              color: 'rgba(255, 255, 255, 0.7)'
            }}
          >
            Оценить заказ можно в мобильном приложении
          </div>
        </div>
        <div
          style={{
            marginTop: 16,
            color: 'rgba(255, 255, 255, 0.7)',
            lineHeight: 1
          }}
        >
          Данные за последние 7 дней в вашем городе
        </div>
      </div>
    </div>
  )
}
export default TimeRatingPopup
