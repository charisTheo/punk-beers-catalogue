import { START_UI_LOADING, STOP_UI_LOADING } from "./actionTypes";

export const startUiLoadingAction = () => ({
  type: START_UI_LOADING
});

export const stopUiLoadingAction = () => ({
  type: STOP_UI_LOADING
});
