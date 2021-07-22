import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Businesses from './Businesses.jsx';
import { getLocationData } from '../actions/index.js';


const HomePage = () => {
  const [location, setLocation] = useState('')
  const dispatch = useDispatch();
  const businesses = useSelector(state => state.businesses)
  const handleChange = (e) => {
    e.preventDefault();
    setLocation(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getLocationData(location))
  }

  return (
    <div>
       <form onSubmit={handleSubmit}>
        <input type={'text'} placeholder={'insert a location'} onChange={handleChange}/>
        <input type={'submit'} />
      </form>

      <h3>{location}</h3>

      {businesses && businesses.length > 0 && <Businesses businesses={businesses} />}

    </div>
  )
}

export default HomePage;