
import { useContext } from 'react';
import { ListContext } from '../../context/ListContext';
import Card from '../../UI/Card/Card';
import Loader from '../../UI/Loader/Loader';
import Header from '../Header/Header';
import ListItem from '../ListItem/ListItem';

const Movies = () => {
 
  const contextAPI = useContext(ListContext)
  const {isLoading, movies} = contextAPI;

  console.log(movies);

  return (
    <>
     <Header heading="Movies" backButton="Back" buttonName="Sign Out"/>
    <div className="row">
      <h1 className="row__heading">Popular Movies</h1>
      {isLoading && <Loader/>}
    {!isLoading && 
      <ul className='row__list'>
        {movies.map((m, index)=> (
          <ListItem 
          key={index}
          bgImage={`https://image.tmdb.org/t/p/original/${m.backdrop_path}`}
          name={m.original_title}
          released={m.release_date}
          overview={m.overview}
          />
        ))}
     </ul>}
    </div>
   
    </>
  )
}

export default Movies
