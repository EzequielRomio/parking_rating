import { Link } from 'react-router-dom';
import BusinessCard from './BusinessCard.jsx';

const Businesses = ({businesses}) => {
  return (
    <div>
      {businesses.map(business => {
        return (
          <span className={'d-flex-align-center margins'} key={business.id}>
            <Link to={`/details/${business.id}`}>
              <BusinessCard 
                id={business.id}
                name={business.name}
                imageUrl={business.imageUrl}
                address={business.address}
                city={business.city}
                country={business.country}
                rating={business.rating}
                reviewCount={business.reviewCount}
                score={business.score}
                yelpLink={business.yelpLink}
              />
          </Link>
        </span>
        )
      })}
    </div>
  )
}

export default Businesses;