import { createContext, useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ListContext = createContext();

const ListContextProvider = ({children})=> {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [games, setGames] = useState([]);
    const history = useNavigate()

  const moviesAPI = useEffect(() => {
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
            setIsLoading(true)
            setMovies(data.results);
            setIsLoading(false)
          })
          .catch(error => {
            console.error('Error fetching token:', error);
          });
    }, []);

    const goBack = () => {
        history("/home");
    }

   const gamesAPI = useEffect(() => {

        const apiKey = "ad55befefa4449658e9cf82bc88f1c0f";
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

    const value = useMemo(() => ({
        movies,
        isLoading,
        games,
        goBack,
        movies
    }))


return (
    <ListContext.Provider value={{...value}}>
        {children}
    </ListContext.Provider>
)

};

export default ListContextProvider