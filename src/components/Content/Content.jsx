import { useEffect, useState } from 'react';
import ListItem from '../ListItem/ListItem';
import Loader from '../../UI/Loader/Loader';
import Header from '../Header/Header';
import Wrap from '../../UI/Wrap/Wrap';
import useFetch from '../../utility/useFetch';
import { contentTypes } from '../../utility/data';
import { sortBy, searchBy } from '../../utility/sorting';
import Select from '../Select/Select';
import Search from '../Search/Search';

const Content = ({type}) => {

  const moviesUrl = "https://image.tmdb.org/t/p/original";
  const currentType = contentTypes.find(content => content.type === type);
  if (!currentType) return null;

  const { endpoint, nameKey, bgImageKey, releasedKey, platform, overview, wins, rating } = currentType;

  const { data, isLoading, visible, showMoreHandler } = useFetch(endpoint);

  console.log(data);

  const [sortingCriteria, setSortingCriteria] = useState('name');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortedData, setSortedData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const sorted = sortBy(data, sortingCriteria, nameKey);
    setSortedData(sorted);
  }, [data, sortingCriteria, nameKey]);
  
  useEffect(() => {
    if (searchQuery.trim() === '') {
      // If search query is empty, display all data
      setFilteredData(sortedData);
    } else {
      // Filter sorted data based on search query
      const filtered = sortedData.filter(item =>
        item[nameKey].toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [sortedData, searchQuery, nameKey]);

  const handleChangeSorting = event => {
    setSortingCriteria(event.target.value);
  };

  const handleSearch = e => {
    setSearchQuery(e.target.value);
  };
  

  return (
    <div>
      <Header heading={type} backButton="Back" buttonName="Sign Out"/>
     <div className="row__holder">
      <Wrap className='row'>
          <h1 className='row__heading'>Popular {type}</h1>
          <div className="row__utility">
            <Select onChange={handleChangeSorting}/>
           <Search className="search" onSearch={handleSearch} />
          </div>
          {isLoading && <Loader/>}
          {!isLoading && 
         <div>
          <ul className='row__list'>
          {filteredData?.slice(0, visible).map((g, index) => (
              <ListItem 
              type={type}
              key={index}
              name={g[nameKey]}
              bgImage={type === 'movies' ? `${moviesUrl}${g[bgImageKey]}` : g[bgImageKey]}
              released={g[releasedKey]}
              platform={g[platform]}
              overview={g[overview]}
              rating={g[rating]}
              wins={g[wins]}
              />
              ))}
          </ul>
        </div>}
            <button className='btn' onClick={showMoreHandler}><p className="text">Load more</p></button>
        </Wrap>
     </div>
    </div>
  )
}

export default Content
