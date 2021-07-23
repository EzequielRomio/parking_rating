const BusinessCard = ({ id, name, imageUrl, address, city, country, rating, reviewCount, score}) => {
  return (
      <ul key={id} className={'card d-flex-align-center d-flex-justify-evenly'}>
        <li>
          <div style={{backgroundImage: `url(${imageUrl || 'https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ba98799d47da0806a85703_ag-p-500.png'})`}} className={'card-img'}></div>
        </li>
        <div className={'d-flex-align-center d-flex-justify-evenly card-right-content'}>
          <li><h4>{name}</h4></li>
          <li>{address} {city} {country}</li>
          <li>Rating: {rating} - Reviews: {reviewCount}</li>
          <li><h5>&#11088; Score: {score}</h5></li>
        </div>
      </ul>
  )
}

export default BusinessCard;