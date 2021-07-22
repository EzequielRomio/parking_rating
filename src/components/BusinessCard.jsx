const BusinessCard = ({ id, name, imageUrl, address, city, country, rating, reviewCount, score}) => {
  return (
      <ul key={id}>
        <li><h4>{name}</h4></li>
        <li><img src={imageUrl} width={'10%'} height={'10%'} alt={'Business'}></img></li>
        <li>{address} {city} {country}</li>
        <li>Rating: {rating} - Reviews: {reviewCount} Score: {score}</li>
      </ul>
  )
}

export default BusinessCard;