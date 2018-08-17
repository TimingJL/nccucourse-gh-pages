import { fromJS } from 'immutable';
import {
  FETCH_COURSES_DATA_LIST,
  SET_SEMESTER_LIST,
  SET_COURSES,
  SET_EVALUATION,
} from './constants';

const initialState = fromJS({
  semesterList: [],
  coursesList: {},
  evaluationList: {},
});

// courses: {
//   10701: [{...}, {...}, ...],
//   10702: [{...}, {...}, ...],
// }

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES_DATA_LIST:
      return initialState;

    case SET_SEMESTER_LIST:
      return state.set('semesterList', action.payload);

    case SET_COURSES:
      return state.setIn(['coursesList', action.payload.semester, 'courses'], action.payload.courses);

    case SET_EVALUATION:
      return state.setIn(['evaluationList', action.payload.semester, 'evaluation'], action.payload.evaluation);

    default:
      return state;
  }
};