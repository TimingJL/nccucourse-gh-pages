import React from 'react';

import { Switch, Route } from 'react-router-dom';
// import CourseListPage from 'containers/CourseListPage';
import CourseDetailPage from 'containers/CourseListPage/CourseDetailPage';
// import SplashPage from 'containers/SplashPage';
import { routePathConfig } from 'containers/RoutePathConfig';

export default () => (
  <Switch>
    <Route path={routePathConfig.courseListBySemester} component={CourseDetailPage} />
    {/* <Route path={routePathConfig.courseList} component={CourseListPage} /> */}
  </Switch>
);
