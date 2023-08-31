// reducers.js
import { combineReducers } from 'redux';
import { SET_SELECTED_CITY,FETCH_WEATHER_REQUEST,FETCH_WEATHER_SUCCESS,FETCH_WEATHER_FAILURE } from './action';

const selectedCityReducer = (state = '', action) => {
  switch (action.type) {
    case SET_SELECTED_CITY:
      return action.payload;
    default:
      return state;
  }
};

const weatherDataReducer = (state = { loading: false, data: null, error: null }, action) => {
  switch (action.type) {
    case FETCH_WEATHER_REQUEST:
      return { ...state, loading: true, data: null, error: null };
    case FETCH_WEATHER_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null };
    case FETCH_WEATHER_FAILURE:
      return { ...state, loading: false, data: null, error: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  selectedCity: selectedCityReducer,
  weatherData: weatherDataReducer,
});

export default rootReducer;
