import React from 'react';

import { Switch, Route } from 'react-router-dom';
import CourseListPage from 'containers/CourseListPage';

export const routePathConfig = {
  splash: '/',
  courseList: '/courseList',
};

export default () => (
  <Switch>
    <Route exact path={routePathConfig.splash} component={CourseListPage} />
  </Switch>
);
