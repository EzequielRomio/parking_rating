export const filterImportantData = (data) => {
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
      yelpLink: business.url,
      score: (business.review_count * business.rating) / (business.review_count + 1) 
    }
  })
}

export const sortByScore = (businesses, order) => {
  if (order === 'asc') return businesses.sort((a, b) => a.score - b.score);
  if (order === 'desc') return businesses.sort((a, b) => b.score - a.score);
}