export const filterImportantData = (data) => {
  /*
    important data:
      address, image, star rating, review count, link to yelp page
  */
  return data.businesses.map(business => {
    return {
      id: business.id,
      name: business.name,
      address: business.location.address1 || business.location.address2 || business.location.address3,
      city: business.location.city,
      country: business.location.country,
      imageUrl: business.image_url,
      rating: business.rating,
      reviewCount: business.review_count,
      yelpLink: business.url 
    }
  })
}