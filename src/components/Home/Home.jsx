import './Home.scss';
import { Link } from 'react-router-dom';
import Header from "../Header/Header"

const Home = () => {
  
  return (
   <>
   <Header heading="Home" buttonName="Sign Out"/>
   <ul className='home__list'>
   <h2 className='home__title'>Choose your category</h2>
        <Link className='home__link btn' to="/games">Games</Link>
        <Link className='home__link btn' to="/movies">Movies</Link>
        <Link className='home__link btn' to="/dota2">Dota2</Link>
    </ul>
    
   </>
  )
}

export default Home