import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import Header from '../Header'
import Loading from '../Loading'
import './index.css'

const Profile = () => {
  const history = useHistory()
  const { city, loading, error } = useSelector(state => state.getCity)
  console.log({ city, loading, error })

  useEffect(() => {
    if (!localStorage.getItem('userInfo')) history.push('/')
  }, [history])

  return (
    <>
      <Header />
      {loading ? (
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
                  className='client-bonus__link'
                >
                  Все наши акции
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2>{error}</h2>
      )}
    </>
  )
}
export default Profile
