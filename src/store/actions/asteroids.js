import { apiCall } from '../../services/api';
import { LOAD_ASTEROIDS } from '../actionTypes';
import { postProcess } from '../../helpers/asteroids'

const NASA_BASEURL = 'https://api.nasa.gov';

export const loadAsteroids = asteroids => ({
  type: LOAD_ASTEROIDS,
  asteroids 
});

export const fetchAsteroids = date => {
  return dispatch => {
    return apiCall(`${NASA_BASEURL}/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=${process.env.REACT_APP_NASAKEY}`)
      .then(res => postProcess(res, date))
      .then(asteroids =>  dispatch(loadAsteroids(asteroids)))
      .catch(err => console.log(err.message))
  };
}
