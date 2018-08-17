import { createSelector } from 'reselect';

const courseListPageStore = (state) => state.get('courseList');

export const selectSemesterList = () => createSelector(
  courseListPageStore,
  (state) => state.get('semesterList')
);

export const selectCoursesList = () => createSelector(
  courseListPageStore,
  (state) => state.get('coursesList')
);
