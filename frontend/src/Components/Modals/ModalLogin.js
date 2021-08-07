import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import closeIcon from '../../images/close-icon.svg'
import {
  loginAction,
  modalOpenAction,
  smsLoginAction
} from '../../redux/actions/loginActions'
import Loading from '../Loading'

const ModalLogin = props => {
  const [phoneValue, setPhoneValue] = useState('+7')
  const [phoneError, setPhoneError] = useState(false)
  const [dispatchPhone, setDispatchPhone] = useState(false)
  const [codeError, setCodeError] = useState(false)
  const [codeTiming, setCodeTiming] = useState(false)
  const [time, setTime] = useState(60)
  const [checkCode, setCheckCode] = useState(false)
  const [codeValue, setCodeValue] = useState('')

  const dispatch = useDispatch()
  const history = useHistory()
  const { loading, code, smsLoginError } = useSelector(state => state.smsLogin)
  console.log(code)
  const { city } = useSelector(state => state.getCity)
  const { userInfo } = useSelector(state => state.login)

  useEffect(() => {
    dispatch(modalOpenAction(true))

    return () => dispatch(modalOpenAction(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    time === 0 && setCodeTiming(false)

    if (userInfo) {
      history.push(`/${city.link}/profile`)
      props.setLogin(false)
    }

    if (codeTiming) {
      const timer = setInterval(() => {
        const newTime = time - 1
        setTime(newTime)
      }, 1000)
      return () => clearInterval(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [codeTiming, time, userInfo])

  const onChangePhone = e => {
    const target = e.target.value

    const x = target
      .replace(/\D/g, '')
      .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/)
    let value = !x[3]
      ? '+7 (' + x[2]
      : '+7 (' +
        x[2] +
        ') ' +
        x[3] +
        (x[4] && '-' + x[4]) +
        (x[5] && '-' + x[5])

    if (phoneValue.length > target.length && target.length < 4) value = ''

    phoneError && setPhoneError(false)

    setPhoneValue(value)
  }

  const onDispatchCode = () => {
    if (phoneValue.length === 18) {
      dispatch(smsLoginAction(phoneValue))
      setDispatchPhone(true)
      setCodeTiming(true)
    } else {
      setPhoneError(true)
      document.querySelector('.phone-input').focus()
    }
  }

  const onChangeCode = e => {
    const value = e.target.value
    setCodeValue(value)
    if (codeError) setCodeError(false)

    if (value.length === 4) {
      setCheckCode(true)

      if (value === code) dispatch(loginAction(phoneValue))
      else {
        setCheckCode(false)
        setCodeError(true)
        setCodeValue('')
      }
    }
  }

  return (
    <div className='show-locality__selector'>
      <div
        className='show-locality__shadow'
        onClick={() => props.setLogin(false)}
      />
      <div className='locality-selector__wrapper'>
        <div className='modal-login__form'>
          <h1 className='modal-login__title'>Вход на сайт</h1>

          <div className='modal-login__phone'>
            <div className='phone-text'>Номер телефона</div>
            {!dispatchPhone ? (
              <>
                <input
                  type='tel'
                  className='phone-input'
                  placeholder='+7 (999) 999-99-99'
                  required
                  onChange={onChangePhone}
                  value={phoneValue}
                />
                {phoneError && (
                  <div className='input-error_anchor'>
                    <i className='tooltip__pointer_default'>
                      <svg
                        viewBox='0 0 18 12'
                        version='1.1'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          transform='translate(-2 0)'
                          fillRule='evenodd'
                          d='M 9.52569 1.60834L 3.07216 8.64855C 1.89626 9.93135 2.80626 12 4.54647 12L 17.4535 12C 19.1937 12 20.1037 9.93135 18.9278 8.64855L 12.4743 1.60834C 11.6816 0.743602 10.3184 0.743603 9.52569 1.60834Z'></path>
                      </svg>
                    </i>
                    <div className='input-error_content'>
                      <button
                        className='tooltip__close-control'
                        onClick={() => setPhoneError(false)}>
                        <svg
                          viewBox='0 0 22 22'
                          version='1.1'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fill='#FFFFFF'
                            fillOpacity='0.2'
                            fillRule='evenodd'
                            d='M 11 0C 4.92487 1.14941e-15 -7.1838e-16 4.92487 0 11C 8.62056e-16 17.0751 4.92487 22 11 22C 17.0751 22 22 17.0751 22 11C 22 4.92487 17.0751 -1.14941e-15 11 0Z'></path>
                          <path
                            transform='translate(6.5 6.5)'
                            fillRule='evenodd'
                            d='M 5.33691 4.39941L 8.60645 1.12793C 8.86426 0.870117 8.86426 0.452148 8.60645 0.193359C 8.34863 -0.0644531 7.93066 -0.0644531 7.67285 0.193359L 4.39941 3.46582L 1.12988 0.193359C 0.87207 -0.0644531 0.454102 -0.0644531 0.196289 0.193359C -0.0654297 0.452148 -0.0654297 0.870117 0.196289 1.12793L 3.46582 4.39941L 0.196289 7.67188C -0.0654297 7.92969 -0.0654297 8.34863 0.196289 8.60645C 0.454102 8.86426 0.87207 8.86426 1.12988 8.60645L 4.39941 5.33398L 7.67285 8.60645C 7.93066 8.86426 8.34863 8.86426 8.60645 8.60645C 8.86426 8.34863 8.86426 7.92969 8.60645 7.67188L 5.33691 4.39941Z'></path>
                        </svg>
                      </button>
                      <i className='error-tooltip-icon'>
                        <svg
                          width='22'
                          height='19'
                          viewBox='0 0 22 19'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M10.6126 0.460866C10.2489 -0.153622 9.65353 -0.153622 9.29031 0.460866L0.160069 15.8786C-0.20315 16.4919 0.0729962 16.9948 0.773728 16.9948H19.1288C19.8295 16.9948 20.106 16.4919 19.7428 15.8786L10.6126 0.460866Z'
                            transform='translate(1 1)'
                            fill='white'
                            stroke='white'
                            strokeLinecap='round'
                            strokeLinejoin='round'></path>
                          <path
                            d='M-1.90735e-07 0V4.5'
                            transform='translate(10.9492 8)'
                            stroke='#EB1D00'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'></path>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M2 0.998193C2 1.5512 1.5494 2 1.00181 2C0.446386 2 0 1.5512 0 0.998193C0 0.449398 0.446386 0 1.00181 0C1.5494 0 2 0.449398 2 0.998193Z'
                            transform='translate(10 14)'
                            fill='#EB1D00'></path>
                        </svg>
                      </i>
                      <span>Неверный номер телефона</span>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className='phone-input-wrapper'>
                <input
                  className='phone-input-send'
                  value={phoneValue}
                  disabled
                />
                <span
                  className='phone-input-change'
                  onClick={() => {
                    setDispatchPhone(false)
                    setCodeTiming(false)
                    setTime(60)
                    setCodeError(false)
                    setCheckCode(false)
                    setCodeValue('')
                  }}>
                  Изменить
                </span>
              </div>
            )}
          </div>

          {!dispatchPhone ? (
            <button className='modal-login__button' onClick={onDispatchCode}>
              Выслать код
            </button>
          ) : (
            <div style={{ position: 'relative' }}>
              <div className='phone-text'>Код из СМС</div>
              {checkCode ? (
                <input
                  className='phone-input-send'
                  style={{ width: 100 }}
                  value={codeValue}
                  disabled
                />
              ) : loading ? (
                <Loading />
              ) : code ? (
                <>
                  <input
                    className='code-input'
                    value={codeValue}
                    onChange={onChangeCode}
                  />
                  {codeTiming ? (
                    <span className='code-text__timing'>
                      Получить новый код через {time} сек.
                    </span>
                  ) : (
                    <span
                      className='code-text'
                      onClick={() => setCodeError(true)}>
                      Получить новый код
                    </span>
                  )}
                  {codeError && (
                    <div className='code-error-tooltip'>
                      <i className='tooltip__pointer_default'>
                        <svg
                          viewBox='0 0 18 12'
                          version='1.1'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            transform='translate(-2 0)'
                            fillRule='evenodd'
                            d='M 9.52569 1.60834L 3.07216 8.64855C 1.89626 9.93135 2.80626 12 4.54647 12L 17.4535 12C 19.1937 12 20.1037 9.93135 18.9278 8.64855L 12.4743 1.60834C 11.6816 0.743602 10.3184 0.743603 9.52569 1.60834Z'></path>
                        </svg>
                      </i>
                      <div className='input-error_content'>
                        <button
                          className='tooltip__close-control'
                          onClick={() => setCodeError(false)}>
                          <svg
                            viewBox='0 0 22 22'
                            version='1.1'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                              fill='#FFFFFF'
                              fillOpacity='0.2'
                              fillRule='evenodd'
                              d='M 11 0C 4.92487 1.14941e-15 -7.1838e-16 4.92487 0 11C 8.62056e-16 17.0751 4.92487 22 11 22C 17.0751 22 22 17.0751 22 11C 22 4.92487 17.0751 -1.14941e-15 11 0Z'></path>
                            <path
                              transform='translate(6.5 6.5)'
                              fillRule='evenodd'
                              d='M 5.33691 4.39941L 8.60645 1.12793C 8.86426 0.870117 8.86426 0.452148 8.60645 0.193359C 8.34863 -0.0644531 7.93066 -0.0644531 7.67285 0.193359L 4.39941 3.46582L 1.12988 0.193359C 0.87207 -0.0644531 0.454102 -0.0644531 0.196289 0.193359C -0.0654297 0.452148 -0.0654297 0.870117 0.196289 1.12793L 3.46582 4.39941L 0.196289 7.67188C -0.0654297 7.92969 -0.0654297 8.34863 0.196289 8.60645C 0.454102 8.86426 0.87207 8.86426 1.12988 8.60645L 4.39941 5.33398L 7.67285 8.60645C 7.93066 8.86426 8.34863 8.86426 8.60645 8.60645C 8.86426 8.34863 8.86426 7.92969 8.60645 7.67188L 5.33691 4.39941Z'></path>
                          </svg>
                        </button>
                        <i className='error-tooltip-icon'>
                          <svg
                            width='22'
                            height='19'
                            viewBox='0 0 22 19'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M10.6126 0.460866C10.2489 -0.153622 9.65353 -0.153622 9.29031 0.460866L0.160069 15.8786C-0.20315 16.4919 0.0729962 16.9948 0.773728 16.9948H19.1288C19.8295 16.9948 20.106 16.4919 19.7428 15.8786L10.6126 0.460866Z'
                              transform='translate(1 1)'
                              fill='white'
                              stroke='white'
                              strokeLinecap='round'
                              strokeLinejoin='round'></path>
                            <path
                              d='M-1.90735e-07 0V4.5'
                              transform='translate(10.9492 8)'
                              stroke='#EB1D00'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'></path>
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M2 0.998193C2 1.5512 1.5494 2 1.00181 2C0.446386 2 0 1.5512 0 0.998193C0 0.449398 0.446386 0 1.00181 0C1.5494 0 2 0.449398 2 0.998193Z'
                              transform='translate(10 14)'
                              fill='#EB1D00'></path>
                          </svg>
                        </i>
                        <span>Неверный код</span>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <h2>{smsLoginError}</h2>
              )}
            </div>
          )}

          <img
            src={closeIcon}
            alt='Close Icon'
            className='close-icon'
            onClick={() => props.setLogin(false)}
          />
        </div>
      </div>
    </div>
  )
}
export default ModalLogin
