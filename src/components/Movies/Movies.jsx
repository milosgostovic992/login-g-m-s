
import React, { useEffect, useState } from 'react';
import Card from '../../UI/Card/Card';

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const apiKey = 'e01dd6b7442cd6f6d80eb2340f9db82c';
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
        
        fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            setMovies(data.results);
            console.log(data.results);
          })
          .catch(error => {
            console.error('Error fetching token:', error);
          });
    }, []);

  return (
    <>
    <ul>
        {
            movies.map((m, index)=> (
                <Card classname="test" key={index}>{m.id}
                <p>{m.original_title}</p></Card>
            ))
        }
    </ul>
    </>
  )
}

export default Movies
