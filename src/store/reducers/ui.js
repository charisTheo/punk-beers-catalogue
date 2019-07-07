import { START_UI_LOADING, STOP_UI_LOADING } from "../actions/actionTypes";

const initialState = {
  isLoading: false
};

const uiReducer = (state = initialState, action) => {
  switch(action.type) {
    case START_UI_LOADING:
      return {
        ...state,
        isLoading: true
      }
      
    case STOP_UI_LOADING:
      return {
        ...state,
        isLoading: false
      }
      
    default: 
      return state;
  }
};

export default uiReducer;
