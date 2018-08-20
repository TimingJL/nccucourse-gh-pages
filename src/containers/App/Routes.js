import React from 'react';

import { Switch, Route } from 'react-router-dom';
import CourseListPage from 'containers/CourseListPage';
import SplashPage from 'containers/SplashPage';
import CourseDetailPage from 'containers/CourseListPage/CourseDetailPage';
import EvaluationPage from 'containers/EvaluationPage';
import { routePathConfig } from 'containers/RoutePathConfig';

export default () => (
  <Switch>
    <Route exact path={routePathConfig.splash} component={SplashPage} />
    <Route path={routePathConfig.courseDetail} component={CourseDetailPage} />
    <Route path={routePathConfig.courseList} component={CourseListPage} />
    <Route path={routePathConfig.evaluationDetail} component={EvaluationPage} />
  </Switch>
);
