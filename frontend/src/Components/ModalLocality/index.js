import './index.css'
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchCitiesAction } from '../../redux/actions/citiesActions'
import Loading from '../Loading'
import { Fragment } from 'react'

const ModalLocality = props => {
  const dispatch = useDispatch()

  const { cities, citiesGroup, columnsGroup, loading, error } = useSelector(
    state => state.citiesList
  )

  useEffect(() => {
    dispatch(fetchCitiesAction())

    const locality = localStorage.getItem('locality')
    if (locality) props.history.push(locality)
  }, [dispatch, props.history])

  const onScroll = e => {
    if (e.target.scrollTop > 10) {
      document.querySelector('#scroll__gradient-top').style.display = 'block'
    } else
      document.querySelector('#scroll__gradient-top').style.display = 'none'

    if (e.target.scrollHeight > e.target.scrollTop + e.target.offsetHeight) {
      document.querySelector('#scroll__gradient-bottom').style.display = 'block'
    } else
      document.querySelector('#scroll__gradient-bottom').style.display = 'none'
  }

  const onClick = cityLink => localStorage.setItem('locality', cityLink)

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
        <div className='locality-selector__content' onScroll={onScroll}>
          <div id='scroll__gradient-top' />
          {columnsGroup &&
            columnsGroup.map((group, i) => (
              <div className='locality-selector__group' key={i}>
                {citiesGroup &&
                  Object.keys(citiesGroup).map(letter => {
                    return (
                      <div
                        className='locality-selector__table__group'
                        key={letter}
                      >
                        {group.map(
                          city =>
                            citiesGroup[letter].includes(city) && (
                              <Fragment key={city._id}>
                                <span className='locality-selector__group-letter'>
                                  {letter}
                                </span>
                                <Link
                                  to={`/${city.link}`}
                                  className='locality-selector__link'
                                  onClick={() => onClick(city.link)}
                                >
                                  {city.name}
                                </Link>
                              </Fragment>
                            )
                        )}
                      </div>
                    )
                  })}
              </div>
            ))}
          <div id='scroll__gradient-bottom' />
        </div>
      </div>
    </div>
  )
}
export default ModalLocality
