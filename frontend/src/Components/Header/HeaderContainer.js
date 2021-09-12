import { Link } from 'react-router-dom'
import logo from '../../images/logo-header.svg'
import './styles.css'

const HeaderContainer = props => (
  <header>
    <div className='container'>
      <div className='header__items'>
        <div className='header__item_info'>
          <div className='header__item-logo'>
            <Link to={`/${props.city?.link}`}>
              <img src={logo} alt='logo-img' />
            </Link>
          </div>
          {props.children}
        </div>
      </div>
    </div>
  </header>
)
export default HeaderContainer
