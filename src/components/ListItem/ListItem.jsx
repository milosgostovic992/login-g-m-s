import React from 'react'
import './ListItem.scss';
import Card from '../../UI/Card/Card';

const ListItem = ({ released, name, id, rating, bgImage, platform, overview, type, wins }) => {

const platformTypeGames = type === 'games';
const platformTypeMovies = type === 'movies';
const platformTypeDota2= type === 'Dota2';

  return (
    <>
      {!platformTypeDota2 && (
        <Card className='row__item' key={id}>
          <div className="row__img-holder">
            <img className='row__img' src={bgImage} alt="" />
          </div>
          <div className="row__par-holder">
            <p className='row__par row__par--name'>{name}</p>
            <p className='row__par'>Rating: {rating}</p>
            <p className='row__par'>Released: {released}</p>
            {platformTypeGames && (
              <h3 className='row__heading row__heading--games'>Available on platform::</h3>
            )}
            {platformTypeMovies && (
              <h3 className='row__heading'>{overview}</h3>
            )}
            <ul className="row__platform-holder">
              {platformTypeGames && platform.map(p => (
                <li key={p.platform.id} className='row__platform'>{p.platform.name}</li>
              ))}
            </ul>
          </div>
        </Card>
      )}
      {platformTypeDota2 && <Card className='row__item' key={id}>
        <div className="row__img-holder">
          <img className='row__img' src={bgImage} alt="" />
        </div>
        <div className="row__par-holder">
          <p className='row__par row__par--name'>{name}</p>
          <p className='row__par'>Wins: {wins}</p>
          <p className='row__par'>Rating: {rating}</p>
          <ul className="row__platform-holder">
          </ul>
        </div>
      </Card>}
    </>
  )
}

export default ListItem