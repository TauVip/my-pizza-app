import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logoImg from '../../images/logo-404.svg'
import { pageNotFoundAction } from '../../redux/actions/loginActions'
import './styles.css'

const NotFound = () => {
  const dispatch = useDispatch()
  const { pageNotFound } = useSelector(state => state.pageNotFound)

  useEffect(() => {
    dispatch(pageNotFoundAction(true))
  }, [dispatch])

  const onClick = () => dispatch(pageNotFoundAction(false))

  return pageNotFound ? (
    <div className='container'>
      <header className='header'>
        <img className='logo-404-img' src={logoImg} alt='Logo' />
        <div className='header__message'>Страница не найдена</div>
        <Link to='/' className='header__button' onClick={onClick}>
          Перейти в меню
        </Link>
      </header>
      <footer className='footer'>
        Додо Пицца <span style={{ fontSize: 24 }}>🍕</span> 2021
      </footer>
    </div>
  ) : null
}
export default NotFound
