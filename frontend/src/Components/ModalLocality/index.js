import './index.css'
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchCitiesAction } from '../../redux/actions/citiesActions'
import Loading from '../Loading'

const ModalLocality = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCitiesAction())
  }, [dispatch])

  const { cities, loading, error } = useSelector(state => state.citiesList)

  console.log({ cities, loading, error })

  return (
    <div className='show-locality-selector'>
      <div className='show-locality-shadow' />
      <div className='locality-selector'>
        <div className='locality-selector__header'>
          <img className='logo-img' src={logo} alt='logo-img' />
        </div>
        <div className='locality-selector__actions'>
          <input className='locality-selector__input' placeholder='Поиск...' />
          <span className='locality-selector__search-icon' />
          <div className='locality-selector__megacities'>
            {loading ? (
              <Loading />
            ) : cities ? (
              cities.map(
                city =>
                  city.status === 'megacity' && (
                    <Link
                      to={`/${city.link}`}
                      className='megacity'
                      key={city._id}
                    >
                      {city.name}
                    </Link>
                  )
              )
            ) : (
              <h2>{error}</h2>
            )}
          </div>
        </div>
        <div className='locality-selector__content'></div>
      </div>
    </div>
  )
}
export default ModalLocality
