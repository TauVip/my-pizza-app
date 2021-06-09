import { useEffect } from 'react'

const Home = props => {
  useEffect(() => {
    if (!localStorage.getItem('locality')) props.history.push('/')
  }, [props.history])

  return <div>Home</div>
}
export default Home
