import {
  filterImportantData,
  sortByScore
} from './utils.js';

const initialState = {
  locations: [],
};

const rootReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'GET_LOCATION_DATA':
      return {
        ...state, locations: [
          ...state.locations, {
            location: action.payload.location, 
            businesses: sortByScore(filterImportantData(action.payload.data), 'asc') 
          }
        ]
      }
    default:
      return state;
  }
}
  
export default rootReducer;