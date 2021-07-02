import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Loading from '../Loading'
import './styles.css'

const Profile = () => {
  const { city, loading, getCityError } = useSelector(state => state.getCity)

  return loading ? (
    <Loading />
  ) : city ? (
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
              to={`/${city.link}/bonusactions`}
              className='client-bonus__link'>
              Все наши акции
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h2>{getCityError}</h2>
  )
}
export default Profile
