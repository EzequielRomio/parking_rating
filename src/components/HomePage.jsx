import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from './Header.jsx';
import Loading from './Loading.jsx';
import Businesses from './Businesses.jsx';
import { getLocationData, resetRequestError } from '../actions/index.js';


const displayPaginationButtons = (handleClick, pageIndex, businesses) => {
  return (
    <div className={'paginate-buttons'}>
      {pageIndex >= 8 && 
        
        <button className={'button'} onClick={(e) => handleClick(e, -8)}>Prev</button>
        
      }
      {pageIndex <= businesses.length - 8 &&
        
        <button className={'button'} onClick={(e) => handleClick(e, 8)}>Next</button>
        
      }
    </div>
  )
}

const capitalize = (txt) => {
  const words = txt.split(' ')
  return (
    words
    .filter(word => word.length > 0)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ') 
  ) 
}

const HomePage = () => {
  const [location, setLocation] = useState('')
  const [pageIndex, setPageIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const businesses = useSelector(state => state.businesses)
  const requestError = useSelector(state => state.requestError)
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (requestError) {
      alert('Location not found!')
      setIsLoading(false)
      dispatch(resetRequestError())
    }

    if (isLoading && businesses && businesses.length > 0) {
      setIsLoading(false)
    }
  }, [businesses, requestError])

  const handleChange = (e) => {
    e.preventDefault();
    setLocation(capitalize(e.target.value));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    dispatch(getLocationData(location))
    setPageIndex(0)
  }

  const handleClick = (e, value) => {
    e.preventDefault();

    if (pageIndex + value < businesses.length) {
      setPageIndex(pageIndex + value <= 0 ? 0 : pageIndex + value)
    }
    window.scrollTo(0, 0)
  }

  return (
    <div className={'d-flex-align-center flex-column'}>
      
      <Header height={businesses && businesses.length > 0 ? 'small' : 'big'}/>

      <form onSubmit={handleSubmit} className={'d-flex-align-center flex-column form'}>
          <div  style={{position: 'relative'}}>
            <input type={'text'} className={'input'} placeholder={'Insert a location...'} onChange={handleChange}/>
            <div className={'m-glass'}>&#x1F50D;</div> 
          </div>
          <input type={'submit'} className={'button'} value={'Search'}/>
        </form>

      <h1>{requestError ? 'Location not found!' : location}</h1>

      {isLoading ? <Loading /> : businesses && businesses.length > 0 && 
        <> 
          
          <Businesses businesses={[...businesses].splice(pageIndex, 8)} />
          
          {displayPaginationButtons(handleClick, pageIndex, businesses)}
          
        </>
      }

    </div>
  )
}

export default HomePage;