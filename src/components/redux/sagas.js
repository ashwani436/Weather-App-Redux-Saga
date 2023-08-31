// sagas.js
import { put, takeEvery, all, call } from 'redux-saga/effects';
import axios from 'axios';
import {fetchWeatherSuccess,fetchWeatherFailure,FETCH_WEATHER_REQUEST } from './action';


const API_KEY = '18d6d64ca62a4b8da1260436233108';

function* fetchWeather(action) {
    debugger;
  try {
    const response = yield call(axios.get, `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${action.payload}`);
    const weatherData = response.data.current;
    yield put(fetchWeatherSuccess(weatherData));
  } catch (error) {
    yield put(fetchWeatherFailure(error.message));
  }
}

function* watchFetchWeather() {
  yield takeEvery(FETCH_WEATHER_REQUEST, fetchWeather);
}

export default function* rootSaga() {
  yield all([watchFetchWeather()]);
}
