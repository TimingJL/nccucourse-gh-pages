import React from 'react';

import { Switch, Route } from 'react-router-dom';
import CourseListPage from 'containers/CourseListPage';
// import SplashPage from 'containers/SplashPage';
import { routePathConfig } from 'containers/RoutePathConfig';

export default () => (
  <Switch>
    <Route path={routePathConfig.courseListBySemester} component={CourseListPage} />
    {/* <Route path={routePathConfig.courseList} component={CourseListPage} /> */}
  </Switch>
);
