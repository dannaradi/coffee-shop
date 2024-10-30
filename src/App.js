import './App.css';
import { useEffect, useState } from 'react';
import { Menus } from './components/Menus';

function App() {
  const [menus, setMenus] = useState([])
  const [defaultData, setDefaultData] = useState([])
  const [filter, setFilter] = useState('all products')

  const getMenus = () => {
    fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
    .then(response => response.json())
    .then(data => {
      setMenus(data)
      setDefaultData(data)
      console.log('menu data', data);
    })
    .catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    getMenus()
  }, []);

  const onClickFilter = (val) => {
    setFilter(val)
    if(val === 'available now'){
      let filteredMenus = menus.filter((data) => data.available === true)
      setMenus(filteredMenus)
    } else{
      setMenus(defaultData)
    }
  }

  return (
    <div className="main">

      <div className='card'>
        <div className='card-content'>
          <div className='title'>
            <p>Our Collection</p>
          </div>
          <div className='description'>
            Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, 
            expertly roasted in small batches and shipped fresh weekly.
          </div>
          <div className='filter-section'>
            <div 
              className={`filter-component ${(filter === 'all products') ? 'active' : ''}`} 
              onClick={() => onClickFilter('all products')}
              >
                <span>All Products</span>
            </div>
            <div 
              className={`filter-component ${(filter === 'available now') ? 'active' : ''}`} 
              onClick={() => onClickFilter('available now')}
            >
              <span>Available Now</span>
            </div>
          </div>
          <div className='food-list'>
            {
              menus && menus.map((el) => {
                return(
                  <Menus menuData={el} />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
