import { SAVE_REQUESTED_BEER, SAVE_BEERS } from "../actions/actionTypes";

const initialState = {
  beersArr: [],
  requestedBeer: null
};

const beerReducer = (state = initialState, action) => {
  switch(action.type) {
    case SAVE_REQUESTED_BEER:
      return {
        ...state,
        requestedBeer: action.beer
      };

    case SAVE_BEERS:
      return {
        ...state,
        beersArr: action.beers
      };

    default: 
      return state
  }
};

export default beerReducer;
