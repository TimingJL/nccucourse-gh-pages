import { fromJS } from 'immutable';
import {
  FETCH_COURSES_DATA_LIST,
  SET_SEMESTER_LIST,
  SET_COURSES,
  SET_EVALUATION,
  SET_SEARCH_PARAM,
} from './constants';

const initialState = fromJS({
  semesterList: [],
  coursesList: {},
  evaluationList: {},
  searchParam: [],
});

// coursesList: {
//   10701: [{...}, {...}, ...],
//   10702: [{...}, {...}, ...],
// }

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES_DATA_LIST:
      return initialState;

    case SET_SEMESTER_LIST:
      return state.set('semesterList', fromJS(action.payload));

    case SET_COURSES:
      return state.setIn(['coursesList', action.payload.semester, 'courses'], fromJS(action.payload.courses));

    case SET_EVALUATION:
      return state.set('evaluationList', fromJS(action.payload.evaluation));

    case SET_SEARCH_PARAM:
      return state.set('searchParam', fromJS(action.payload.params));

    default:
      return state;
  }
};