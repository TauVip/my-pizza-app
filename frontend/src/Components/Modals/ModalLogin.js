import { useState } from 'react'
import { useDispatch } from 'react-redux'
import closeIcon from '../../images/close-icon.svg'
import { smsLoginAction } from '../../redux/actions/smsLoginAction'

const ModalLogin = props => {
  const dispatch = useDispatch()

  const [input, setInput] = useState('+7')
  const [dispatchPhone, setDispatchPhone] = useState(false)

  const onChange = e => {
    const x = e.target.value
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

    if (input.length > e.target.value.length && e.target.value.length < 4)
      value = ''

    setInput(value)
  }

  const onClick = () => {
    if (input.length === 18) {
      //dispatch(smsLoginAction(input))
      setDispatchPhone(true)
    }
  }

  return (
    <div className='show-locality-selector'>
      <div className='show-locality-shadow' />
      <div className='modal-login__form'>
        <h1 className='modal-login__title'>Вход на сайт</h1>

        <div className='modal-login__phone'>
          <div className='phone-text'>Номер телефона</div>
          {!dispatchPhone ? (
            <input
              type='tel'
              className='phone-input'
              placeholder='+7 (999) 999-99-99'
              required
              onChange={onChange}
              value={input}
            />
          ) : (
            <div className='phone-input-wrapper'>
              <input className='phone-input' value={input} disabled />
              <div className='phone-input-change'>Изменить</div>
            </div>
          )}
        </div>

        <button className='modal-login__button' onClick={onClick}>
          Выслать код
        </button>

        <img
          src={closeIcon}
          alt='Close Icon'
          className='close-icon'
          onClick={() => props.setLogin(false)}
        />
      </div>
    </div>
  )
}
export default ModalLogin
