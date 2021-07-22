import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import Slider from 'react-slick';

const getScore = (reviewCount, rating) => {
  return (reviewCount * rating) / (reviewCount + 1)
}

const DetailsPage = ({ match }) => {
  const businessId = match.params.id;
  const [business, setBusiness] = useState({})
  const history = useHistory();

  useEffect(() => {
    if (Object.keys(business).length === 0) {
      axios.get(`${businessId}`, {responseType: 'json'})
        .then(res => setBusiness(res.data))
        .catch(err => {
          alert('Business not found')
          history.push('/')
        })
    }
  });
  
  return (
    <div>
      <h3>Business Details</h3>
      { business && Object.keys(business).length > 0 &&
        <> 
          <div>
            <div>
              <h5>{business.name}</h5>
              <p>{business.display_phone}</p>
            </div>
            <img src={business.image_url} alt={'busines avatar'}></img>
          </div>
          
          <Slider {...{dots: true, infinite: true, speed: 500, autoplay: true}}>
            {business.photos.map((photo, ix) => 
              <div key={ix}>
                <img src={photo} alt={'users reviews'}></img>
              </div>
            )}
          </Slider>
          

          <p>Rating: {business.rating}</p>
          <p>Reviews: {business.review_count}</p>
          <p>Score: {getScore(business.review_count, business.rating)}</p>

          <a href={business.url} target={'_blank'} rel={'noreferrer'}>Check this business at yelp.com</a>
      </>
    }
    </div>
    
  )
}

export default DetailsPage;