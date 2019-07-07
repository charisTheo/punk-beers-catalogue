import { SAVE_REQUESTED_BEER, SAVE_BEERS } from "./actionTypes";
import { startUiLoadingAction, stopUiLoadingAction } from "./ui";

export const getBeerAction = beerId => (
  dispatch => {
    dispatch(fetchBeerAction(beerId))
    .then(beer => {
      dispatch(saveRequestedBeerAction(beer))
    });
  }
);

export const saveRequestedBeerAction = beer => ({
  type: SAVE_REQUESTED_BEER,
  beer
});

/**
 * 
 * @param {Number} beerId 
 * @returns {Promise<Object>} beer
 */
export const fetchBeerAction = (beerId) => (
  dispatch => {
    dispatch(startUiLoadingAction());
    return fetch(`https://api.punkapi.com/v2/beers/${beerId}`)
    .then(response => response.json())
    .then(results => {
      dispatch(stopUiLoadingAction());
      return results[0];
    })
    .catch(error => {
      dispatch(stopUiLoadingAction());
      console.log(`fetchBeerAction: Error while fetching beer with id = ${beerId}`, error);
    });
  }
);

export const getBeersAction = () => (
  dispatch => {
    dispatch(fetchBeersAction())
    .then(beers => {
      dispatch(saveBeersAction(beers))
    });
  }
);

export const saveBeersAction = beers => ({
  type: SAVE_BEERS,
  beers
});

/**
 * @returns {Promise<Array>} beers
 */
export const fetchBeersAction = () => (
  dispatch => {
    dispatch(startUiLoadingAction());
    return fetch(`https://api.punkapi.com/v2/beers/`)
    .then(response => response.json())
    .then(beers => {
      console.log("TCL: Got beers!", beers);
      dispatch(stopUiLoadingAction());
      return beers;
    })
    .catch(error => {
      dispatch(stopUiLoadingAction());
      console.log(`fetchBeerAction: Error while fetching beers`, error);
    });
  }
);
