import {
  FETCH_COURSES_DATA_LIST,
  FETCH_COURSES,
  FETCH_EVALUATION,
  FETCH_SEARCH_PARAM,
  SET_SEMESTER_LIST,
  SET_COURSES,
  SET_EVALUATION,
  SET_SEARCH_PARAM,
} from './constants';

export const fetchCoursesDataList = () => ({
  type: FETCH_COURSES_DATA_LIST,
});

export const fetchCourses = (semester) => ({
  type: FETCH_COURSES,
  payload: {
    semester,
  },
});

export const fetchEvaluation = (semester) => ({
  type: FETCH_EVALUATION,
  payload: {
    semester,
  },
});

export const setCourses = ({semester, courses}) => ({
  type: SET_COURSES,
  payload: {
    semester,
    courses,
  }
});

export const setEvaluation = ({evaluation}) => ({
  type: SET_EVALUATION,
  payload: {
    evaluation,
  }
});

export const setSemesterList = (semesterList) => ({
  type: SET_SEMESTER_LIST,
  payload: semesterList,
});

export const fetchSearchParam = (params, semester) => ({
  type: FETCH_SEARCH_PARAM,
  payload: {
    params,
    semester,
  },
});

export const setSearchParam = (params) => ({
  type: SET_SEARCH_PARAM,
  payload: {
    params,
  },
});
