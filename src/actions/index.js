import axios from 'axios';

export const getLocationData = (location) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `search?location=${location}&categories=parking`, 
        {responseType: 'json'}
      )
      console.log(res.data)
      dispatch({type: 'GET_LOCATION_DATA', payload: {location, data: res.data}})
    }
    catch(err) {
      console.log((err.response && err.response.data) || err)
    }
  }
}