import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Container from '../../Container'
import './styles.css'

const Profile = () => {
  const { city } = useSelector(state => state.getCity)

  return (
    <Container>
      <div className='page__content'>
        <div className='client-bonus-actions'>
          <div className='container'>
            <h2 className='client-bonuses'>Мои бонусы</h2>
            <div className='slider-container'>
              <div className='slider'>
                <div className='client-bonus__subscribe'></div>
              </div>
            </div>
            <div className='client-bonus__all'>
              <Link
                to={`/${city?.link}/bonusactions`}
                className='client-bonus__link'
              >
                Все наши акции
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
export default Profile
