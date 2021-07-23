import axios from 'axios';

export const getLocationData = (location) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `search?location=${location}&categories=parking`, 
        {responseType: 'json'}
      )
      dispatch({type: 'GET_LOCATION_DATA', payload: {location, data: res.data}})
    }
    catch(err) {
      console.log((err.response && err.response.data) || err)
      dispatch({type: 'HANDLE_ERROR'})
    }
  }
}

export const sortBusinesses = (order) => {
  return {type: 'SORT_BUSINESSES', payload: order}
}

export const resetRequestError = () => {
  return {type: 'RESET_ERROR'}
}