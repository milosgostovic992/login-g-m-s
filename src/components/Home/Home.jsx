import './Home.scss';
import Games from '../Games/Games';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <ul>
      <li>
        <Link to="/games">Games</Link>
      </li>
      <li>
        <Link to="/movies">Movies</Link>
      </li>
      <li>
        <Link to="/songs">Songs</Link>
      </li>
    </ul>
  
  )
}

export default Home