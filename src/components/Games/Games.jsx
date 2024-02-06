import React, { useEffect, useState, useContext } from 'react';
import ListItem from '../ListItem/ListItem';
import Loader from '../../UI/Loader/Loader';
import Movies from '../Movies/Movies';
import { LoginContext } from '../../context/LoginContext';
import { useNavigate } from 'react-router-dom';

const Games = () => {
    const [isLoading, setIsLoading] = useState(true);
    const context = useContext(LoginContext)
    const {signOutHandler} = context;
    const [games, setGames] = useState([]);
    const history = useNavigate();
    const apiKey = "ad55befefa4449658e9cf82bc88f1c0f";

    const goBack = () => {
        history("/home");
    }
    
    useEffect(() => {
      // Define the endpoint URL
    const url = `https://api.rawg.io/api/games?token&key=${apiKey}&dates=2023-01-01,2023-06-30&ordering=-added`;
      // Fetch data from the API
      fetch(url)
        .then(response => response.json())
        .then(data => {
          // Set the retrieved data to the state
          setIsLoading(true);
          setTimeout(() => {
            setGames(data.results);
          console.log(data.results[0].ratings);
          console.log(data.results);
          setIsLoading(false);
          }, 1555);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);

  return (
    <>
    <div className='home'>
        <h1 className='home__heading'>Home</h1>
        <button onClick={signOutHandler} type='button'>Sign out</button>
        <button onClick={goBack} type='button'>Back</button>
    </div>
     <div className='row'>
     <h1 className='row__heading'>Popular Games</h1>
     {isLoading && <Loader/>}
    {!isLoading && 
     <ul className='row__list'>
     {games.map(g => (
        <ListItem 
        key={g.id}
        rating={g.rating}
        name={g.name}
        bgImage={g.background_image}
        released={g.released}
        platform={g.parent_platforms}
        />
       ))}
      
     </ul>}
   </div>
    </>
  )
}

export default Games
