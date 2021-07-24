import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import Slider from 'react-slick';

import Loading from './Loading';
import Header from './Header';

const getScore = (reviewCount, rating) => {
  return (reviewCount * rating) / (reviewCount + 1)
}

const getStars = (score) => {
  const floor = Math.floor(score)
  return [...Array(floor)].map((_, ix )=> <span key={ix}>&#11088;</span>)
}

const displayScore = (reviewCount, rating) => {
  const score = getScore(reviewCount, rating)
  const stars = getStars(score)

  return (
    <>
      <h1 style={{color: 'var(--orange'}}>Score: {score} {stars.map(star => star)}</h1>
    </>
  )
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
      <Header height={'small'} />
      <div className={'text-align'}>
        <h1>Business Details</h1>
        
        {business && Object.keys(business).length > 0 &&
          <> 
            <div style={{margin: '60px 25% 60px 25%', boxShadow: '0px 0px 48px 10px gray'}}>
              
              <Slider {...{dots: true, infinite: true, speed: 2000, autoplay: false}}>
                {!business.photos.length > 0 ? 
                  <div>
                    <img style={{position: 'relative', display: 'inline'}} src={'https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ba98799d47da0806a85703_ag-p-500.png'}></img> 
                      <h1 className={'no-photo'}>No Photo Available</h1>
                  </div>
                  :
                  business.photos.map((photo, ix) =>
                    <div> 
                      <div style={{backgroundImage: `url(${photo || business.image_url})`, marginBottom: '-4px'}} className={'carousel-slide'}>
                        <div style={{width: '720px', height: '520px'}}></div>  
                      </div>  
                    </div>
                )}
              </Slider>
            </div>

            <div>
              <div>
                <h1>{business.name}</h1>
                <h5>{business.display_phone || 'no phone number available'} &#128222;</h5>
              </div>
            </div>
            
            <h3>Rating: {business.rating} Reviews: {business.review_count}</h3>
            {displayScore(business.review_count, business.rating)}
            <a href={business.url} target={'_blank'} rel={'noreferrer'}>Check this business at yelp.com</a>
        </>
      }
      </div>
    </div>
    
  )
}

export default DetailsPage;