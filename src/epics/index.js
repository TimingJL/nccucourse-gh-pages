// import { combineEpics } from 'redux-observable';
import courseListPageEpics from 'containers/CourseListPage/epics';

export default [
  ...courseListPageEpics,
];
// export default combineEpics(
//   ...courseListPageEpics,
// );