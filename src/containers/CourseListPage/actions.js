import {
  FETCH_COURSES_DATA_LIST,
  FETCH_COURSES,
  SET_SEMESTER_LIST,
  SET_COURSES,
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

export const setCourses = ({semester, courses}) => ({
  type: SET_COURSES,
  payload: {
    semester,
    courses,
  }
});

export const setSemesterList = (semesterList) => ({
  type: SET_SEMESTER_LIST,
  payload: semesterList,
});
