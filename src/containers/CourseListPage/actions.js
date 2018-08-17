import {
  FETCH_COURSES_DATA_LIST,
  FETCH_COURSES,
  FETCH_EVALUATION,
  SET_SEMESTER_LIST,
  SET_COURSES,
  SET_EVALUATION,
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

export const setEvaluation = ({semester, evaluation}) => ({
  type: SET_EVALUATION,
  payload: {
    semester,
    evaluation,
  }
});

export const setSemesterList = (semesterList) => ({
  type: SET_SEMESTER_LIST,
  payload: semesterList,
});
