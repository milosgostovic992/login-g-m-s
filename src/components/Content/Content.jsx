import React from 'react';
import ListItem from '../ListItem/ListItem';
import Loader from '../../UI/Loader/Loader';
import Header from '../Header/Header';
import Wrap from '../../UI/Wrap/Wrap';
import useFetch from '../../utility/useFetch';
import { contentTypes } from '../../utility/data';

const Content = ({type}) => {

  const moviesUrl = "https://image.tmdb.org/t/p/original"

  const currentType = contentTypes.find(content => content.type === type);
  if (!currentType) return null;

  const { endpoint, nameKey, bgImageKey, releasedKey, platform, overview, wins } = currentType;

  console.log(overview);
  
  const { data, isLoading, visible, showMoreHandler } = useFetch(endpoint);

  return (
    <Wrap>
    <Header heading={type} backButton="Back" buttonName="Sign Out"/>
     <div className='row'>
     <h1 className='row__heading'>Popular {type}</h1>
     {isLoading && <Loader/>}
    {!isLoading && 
     <ul className='row__list'>
     {data?.slice(0, visible).map((g, index) => (
         <ListItem 
         type={type}
        key={index}
        name={g[nameKey]}
        bgImage={type === 'movies' ? `${moviesUrl}${g[bgImageKey]}` : g[bgImageKey]}
        released={g[releasedKey]}
        platform={g[platform]}
        overview={g[overview]}
        wins={g[wins]}
         />
        ))}
     </ul>}
      <button onClick={showMoreHandler}>Load more</button>
   </div>
    </Wrap>
  )
}

export default Content
