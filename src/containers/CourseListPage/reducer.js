import { fromJS } from 'immutable';
import {
  FETCH_COURSES,
} from './constants';

const initialState = fromJS({
  courses: null,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES:
      console.log('action');
      return initialState;

    default:
      return state;
  }
};