import React, { useContext } from 'react';
import ListItem from '../ListItem/ListItem';
import Loader from '../../UI/Loader/Loader';
import { ListContext } from '../../context/ListContext';
import Header from '../Header/Header';
import Wrap from '../../UI/Wrap/Wrap';

const Games = () => {

  const contextAPI = useContext(ListContext)
  const {isLoading, games} = contextAPI;

  return (
    <Wrap>
    <Header heading="Games" backButton="Back" buttonName="Sign Out"/>
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
    </Wrap>
  )
}

export default Games
