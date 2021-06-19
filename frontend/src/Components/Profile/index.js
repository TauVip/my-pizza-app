import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import Loading from '../Loading'

import './index.css'

const Profile = () => {
  const history = useHistory()
  const { city } = useSelector(state => state.getCity)

  useEffect(() => {
    const storageUserInfo = JSON.parse(localStorage.getItem('userInfo'))
    if (!storageUserInfo) history.push('/')
  }, [history])

  return city ? (
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
    <Loading />
  )
}
export default Profile
