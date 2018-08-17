import { Observable } from 'rxjs/Rx';
import { COURSE_DATA_DOMAIN } from 'src/config';
import { request, fetchErrorEpic } from 'src/utils/request';

import {
  FETCH_COURSES_DATA_LIST,
  FETCH_COURSES,
} from './constants';

import {
  setSemesterList,
  fetchCourses,
  setCourses,
} from './actions';

const fetchCoursesDataListEpic = (action$) => (
  action$.ofType(FETCH_COURSES_DATA_LIST)
    .switchMap(({ payload }) => {
      return request({
        method: 'get',
        url: `${COURSE_DATA_DOMAIN}/index.json`,
      })
      .flatMap((semesterList) => { // semesterList = [{semester: "10701"}, {...},...]
        const fetchCoursesActions = semesterList.map((item) => fetchCourses(item.semester));
        return Observable.of(
          setSemesterList(semesterList),
          ...fetchCoursesActions,
        );
      })
      .catch(fetchErrorEpic);
    })
);

const fetchCoursesDataEpic = (action$) => (
  action$.ofType(FETCH_COURSES)
    .switchMap(({ payload }) => {
      const {
        semester,
      } = payload;
      return request({
        method: 'get',
        url: `${COURSE_DATA_DOMAIN}/${semester}/courses.json`,
      })
      .flatMap((courses) => {
        return Observable.of(setCourses({
          semester,
          courses,
        }));
      })
      .catch(fetchErrorEpic)
    })
);

export default [
  fetchCoursesDataListEpic,
  fetchCoursesDataEpic,
];

