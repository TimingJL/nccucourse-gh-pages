import { fromJS } from 'immutable';
import {
  INIT,
} from './constants';

const initialState = fromJS({
  courses: null,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case INIT:
      return initialState;

    default:
      return state;
  }
};