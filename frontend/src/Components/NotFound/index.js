import { Link } from 'react-router-dom'
import logoImg from '../../images/logo-404.svg'
import './index.css'

const NotFound = () => {
  return (
    <div className='container'>
      <header className='header'>
        <img className='logo-404-img' src={logoImg} alt='Logo' />
        <div className='header__message'>Страница не найдена</div>
        <Link to='/' className='header__button'>
          Перейти в меню
        </Link>
      </header>
      <footer className='footer'>
        Додо Пицца <span style={{ fontSize: 24 }}>🍕</span> 2021
      </footer>
    </div>
  )
}
export default NotFound
