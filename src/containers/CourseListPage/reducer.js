import { fromJS, Map } from 'immutable';
import {
  FETCH_COURSES_DATA_LIST,
  SET_SEMESTER_LIST,
  SET_COURSES,
  SET_EVALUATION,
  SET_SEARCH_PARAM,
  SET_SELECTED_SESSION,
} from './constants';

const initialState = fromJS({
  semesterList: [],
  coursesList: {},
  evaluationList: {},
  searchParam: [],
  selectedSession: [
    { weekday: '一', session: '' },
    { weekday: '二', session: '' },
    { weekday: '三', session: '' },
    { weekday: '四', session: '' },
    { weekday: '五', session: '' },
    { weekday: '六', session: '' },
    { weekday: '日', session: '' },
  ],
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

    case SET_SELECTED_SESSION: {
      const selectedSession = state.get('selectedSession');
      const findWeekday = selectedSession.find((session) => session.get('weekday') === action.payload.weekday);
      const findSession = findWeekday.get('session').includes(action.payload.session);
      let updatedSelectedSession;
      if (findSession) {
        updatedSelectedSession = selectedSession.map((session) => {
          if (session.get('weekday') === action.payload.weekday) {
            return Map({
              weekday: session.get('weekday'),
              session: session.get('session').replace(action.payload.session, '')
            });
          }
          return session;
        });
      } else {
        updatedSelectedSession = selectedSession.map((session) => {
          if (session.get('weekday') === action.payload.weekday) {
            const sessions = ['1', '2', '3', '4', 'C', 'D', '5', '6', '7', '8', '9', 'E', 'F', 'G', 'H'];
            const updatedSession = [...`${session.get('session')}${action.payload.session}`]
              .sort((a, b) => {
                if (sessions.indexOf(a) > sessions.indexOf(b)) {
                  return 1;
                }
                return -1;
              })
              .join()
              .replace(/,/g, '');
            return Map({
              weekday: action.payload.weekday,
              session: updatedSession,
            })
          }
          return session;
        })
      }
      return state.set('selectedSession', updatedSelectedSession);
    }

    default:
      return state;
  }
};