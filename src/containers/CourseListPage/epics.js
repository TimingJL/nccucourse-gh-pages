import { Observable } from 'rxjs/Rx';
import { COURSE_DATA_DOMAIN } from 'src/config';
import { request, fetchErrorEpic } from 'src/utils/request';
import history from 'src/utils/history';
import { routePathConfig } from 'containers/RoutePathConfig';

import {
  FETCH_COURSES_DATA_LIST,
  FETCH_COURSES,
  FETCH_EVALUATION,
  FETCH_SEARCH_PARAM,
} from './constants';

import {
  fetchCourses,
  fetchEvaluation,
  setSemesterList,
  setCourses,
  setEvaluation,
  setSearchParam,
} from './actions';

const fetchCoursesDataListEpic = (action$) => (
  action$.ofType(FETCH_COURSES_DATA_LIST)
    .switchMap(({ payload }) => {
      return request({
        method: 'get',
        url: `${COURSE_DATA_DOMAIN}/index.json`,
      })
        .flatMap((semesterList) => { // semesterList = [{semester: "10701"}, {...},...]
          const defaultSemester = Math.max(...semesterList.map((item) => item.semester));
          history.push({
            pathname: `${routePathConfig.semester}/${defaultSemester}`,
            state: {
              semester: defaultSemester.toString(),
            },
          });
          const fetchCoursesActions = semesterList.map((item) => fetchCourses(item.semester));
          const fetchEvaluationActions = semesterList.map((item) => fetchEvaluation(item.semester));
          return Observable.of(
            setSemesterList(semesterList),
            ...fetchCoursesActions,
            ...fetchEvaluationActions,
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

const fetchEvaluationDataEpic = (action$) => (
  action$.ofType(FETCH_EVALUATION)
    .switchMap(({ payload }) => {
      const {
        semester,
      } = payload;
      return request({
        method: 'get',
        url: `${COURSE_DATA_DOMAIN}/${semester}/evaluation.json`,
      })
        .flatMap((evaluation) => {
          return Observable.of(setEvaluation({
            semester,
            evaluation,
          }));
        })
        .catch(fetchErrorEpic)
    })
);

const fetchSearchParamEpic = (action$) => (
  action$.ofType(FETCH_SEARCH_PARAM)
    .debounceTime(500 /* ms */)
    .switchMap(({ payload }) => {
      const {
        params,
        semester,
      } = payload;
      let searchParam = '?';
      params.map((param) => `search=${param}`)
        .forEach((param, index) => {
          if (index === 0) {
            searchParam = searchParam.concat(param);
          } else {
            searchParam = searchParam.concat(`&${param}`);
          }
        });

      history.push({
        pathname: `${routePathConfig.semester}/${semester}`,
        state: {
          semester,
        },
        search: searchParam,
      });
      return Observable.of(setSearchParam(params));
    })
);

export default [
  fetchCoursesDataListEpic,
  fetchCoursesDataEpic,
  fetchEvaluationDataEpic,
  fetchSearchParamEpic,
];

