import { Observable } from 'rxjs/Rx';
// import { COURSE_DATA_DOMAIN } from 'src/config';

import {
  FETCH_COURSES,
} from './constants';

const fetchCoursesEpic = (action$) => (
  action$.ofType(FETCH_COURSES)
    .switchMap(({ payload }) => {
      console.log('fetchCoursesEpic');
      return Observable.empty();
    })
);

export default [
  fetchCoursesEpic,
];

