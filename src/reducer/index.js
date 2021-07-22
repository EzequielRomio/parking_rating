import {
  filterImportantData,
  sortByScore
} from './utils.js';

const initialState = {
  businesses: [],
};

const rootReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'GET_LOCATION_DATA':
      return {
        ...state,
        businesses: sortByScore(filterImportantData(action.payload.data), 'asc')
      }
    case 'SORT_BUSINESSES': 
      return {
        ...state, 
        businesses: sortByScore(state.businesses, action.payload)
      }
    default:
      return state;
  }
}
  
export default rootReducer;