import './Home.scss';
import { Link } from 'react-router-dom';
import Header from "../Header/Header"
import Card from '../../UI/Card/Card';

const Home = () => {
  return (
   <>
   <Header heading="Home" buttonName="Sign Out"/>
   <div className="wrap">
   
   <ul className='home__list'>
   <h2 className='home__title'>Choose your group</h2>
      <Card classname="home__item">
        <Link className='home__link' to="/games">Games</Link>
      </Card>
      <Card classname="home__item">
        <Link className='home__link' to="/movies">Movies</Link>
      </Card>
      <Card classname="home__item">
        <Link className='home__link' to="/songs">Songs</Link>
      </Card>
    </ul>
   </div>
    
   </>
  )
}

export default Home