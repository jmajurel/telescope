import { LOAD_ASTEROIDS } from '../actionTypes';

export default (state=[], action) => {
  switch(action.type){
    case LOAD_ASTEROIDS:
      return [...action.asteroids];
    default:
      return state;
  }
}
