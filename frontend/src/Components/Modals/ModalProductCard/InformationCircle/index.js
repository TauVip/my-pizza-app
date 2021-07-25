import { useEffect, useState } from 'react'
import InfoCirclePopup from './InfoCirclePopup'

const InformationCircle = props => {
  const [iHover, setIHover] = useState(false)
  const [iActive, setIActive] = useState(false)

  useEffect(() => {
    const onClick = () => iActive && !iHover && setIActive(false)
    document.addEventListener('click', onClick)

    return () => document.removeEventListener('click', onClick)
  }, [iActive, iHover])

  return (
    <div
      className='pizza-info__additional'
      onMouseOver={() => setIHover(true)}
      onMouseLeave={() => setIHover(false)}
    >
      <i className='additional__info-icon' onClick={() => setIActive(!iActive)}>
        <svg
          viewBox='0 0 23 23'
          preserveAspectRatio='xMidYMin meet'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill={iHover || iActive ? 'rgb(92, 99, 112)' : '#f1f2f5'}
            style={{ transition: 'fill 150ms ease-out 0s' }}
            d='M23 11.5C23 17.8513 17.8513 23 11.5 23C5.14873 23 0 17.8513 0 11.5C0 5.14873 5.14873 0 11.5 0C17.8513 0 23 5.14873 23 11.5Z'
          ></path>
          <path
            fill={iHover || iActive ? 'rgb(255, 255, 255)' : '#000000'}
            style={{ transition: 'fill 150ms ease-out 0s' }}
            d='M11.5 8C12.0658 8 12.5 7.56579 12.5 7C12.5 6.44737 12.0789 6 11.5 6C10.9605 6 10.5 6.44737 10.5 7C10.5 7.56579 10.9737 8 11.5 8ZM12.2968 16.1278C12.2968 16.6108 11.9716 17 11.4903 17C11.022 17 10.6968 16.6108 10.6968 16.1278V10.5722C10.6968 10.0892 11.022 9.7 11.4903 9.7C11.9846 9.7 12.2968 10.0892 12.2968 10.5722V16.1278Z'
          ></path>
        </svg>
      </i>
      {iActive && (
        <div className='additional__info-popup'>
          <i className='info-popup__pointer'>
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
          <div style={{ maxHeight: 386, overflow: 'auto' }}>
            {props.comboProducts ? (
              <>
                {props.comboProducts.pizzas?.map(pizza => (
                  <InfoCirclePopup
                    pizza={pizza}
                    thickness={props.thickness}
                    sizeChosen={props.sizeChosen}
                    sizeVars={props.sizeVars}
                    combo={true}
                    key={pizza._id}
                  />
                ))}
                {props.comboProducts.products?.map(product => (
                  <InfoCirclePopup
                    product={product}
                    combo={true}
                    key={product._id}
                  />
                ))}
              </>
            ) : (
              <InfoCirclePopup {...props} />
            )}
          </div>
        </div>
      )}
    </div>
  )
}
export default InformationCircle
