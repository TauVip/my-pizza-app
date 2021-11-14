import './styles.css'
import logo from '../../images/logo-locality.svg'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import {
  fetchCitiesAction,
  getCityAction
} from '../../redux/actions/citiesActions'
import Loading from '../Loading'
import closeIcon from '../../images/close-icon.svg'
import HeaderContainer from '../Header/HeaderContainer'

const ModalLocality = props => {
  const history = useHistory()
  const dispatch = useDispatch()

  const { megaCities, citiesGroup, columnsGroup, loading, citiesListError } =
    useSelector(state => state.citiesList)
  const { city } = useSelector(state => state.getCity)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    dispatch(fetchCitiesAction())

    return () => (document.body.style.overflow = 'auto')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    history.push(city?.link)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city])

  const [showGradientTop, setShowGradientTop] = useState(false)
  const [showGradientBottom, setShowGradientBottom] = useState(false)

  const onScroll = e => {
    if (e.target.scrollTop > 10) setShowGradientTop(true)
    else setShowGradientTop(false)

    if (e.target.scrollHeight > e.target.scrollTop + e.target.offsetHeight + 10)
      setShowGradientBottom(true)
    else setShowGradientBottom(false)
  }

  const onInput = e => dispatch(fetchCitiesAction(e.target.value))

  const onClick = cityId => {
    if (city?._id !== cityId) {
      localStorage.removeItem('productsCart')
      localStorage.removeItem('city')
      dispatch(getCityAction(cityId))
    }
    city && props.setChangeCity(false)
  }

  return (
    <>
      {!city && <HeaderContainer />}
      <div className='show-locality__selector'>
        <div
          className='show-locality__shadow'
          onClick={() => city && props.setChangeCity(false)}
        />
        <div className='locality-selector__wrapper'>
          <div className='locality-selector'>
            <div className='locality-selector__header'>
              <img className='logo-img' src={logo} alt='logo-img' />
              {city && (
                <div className='locality-selector__title'>
                  705 пиццерий в 13 странах
                </div>
              )}
            </div>
            <div className='locality-selector__actions'>
              <input
                className='locality-selector__input'
                placeholder='Поиск...'
                onInput={onInput}
              />
              <span className='locality-selector__search-icon' />
              <div className='locality-selector__megacities'>
                {loading ? (
                  <Loading />
                ) : megaCities ? (
                  megaCities.map(city => (
                    <Link
                      to={`/${city.link}`}
                      className='megacity'
                      key={city._id}
                      onClick={() => onClick(city._id)}
                    >
                      {city.name}
                    </Link>
                  ))
                ) : (
                  <h2>{citiesListError}</h2>
                )}
              </div>
            </div>
            <div className='locality-selector__content' onScroll={onScroll}>
              <div
                id='scroll__gradient-top'
                data-gradient-top={showGradientTop}
              />
              {columnsGroup?.map(column => (
                <div className='locality-selector__group' key={column[0]._id}>
                  {column.map(city => (
                    <div
                      style={{ position: 'relative', cursor: 'pointer' }}
                      key={city._id}
                    >
                      {citiesGroup[city.name[0]][0] === city && (
                        <span className='locality-selector__group-letter'>
                          {city.name[0]}
                        </span>
                      )}
                      <Link
                        to={`/${city.link}`}
                        className='locality-selector__link'
                        onClick={() => onClick(city._id)}
                      >
                        {city.name}
                      </Link>
                    </div>
                  ))}
                </div>
              ))}
              <div
                id='scroll__gradient-bottom'
                data-gradient-bottom={showGradientBottom}
              />
              {city && (
                <img
                  src={closeIcon}
                  alt='Close Icon'
                  className='close-icon'
                  onClick={() => props.setChangeCity(false)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ModalLocality
