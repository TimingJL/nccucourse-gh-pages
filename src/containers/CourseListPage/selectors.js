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

export const selectEvaluationList = () => createSelector(
  courseListPageStore,
  (state) => state.get('evaluationList')
);

export const selectSearchParam = () => createSelector(
  courseListPageStore,
  (state) => state.get('searchParam')
);

export const selectSelectedSession = () => createSelector(
  courseListPageStore,
  (state) => state.get('selectedSession')
);
