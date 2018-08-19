import React, { Component } from 'react';
import history from 'src/utils/history';
import { routePathConfig } from 'containers/RoutePathConfig';

class SplashPage extends Component {
  componentDidMount() {
    history.push(`${routePathConfig.courseList}`);
  }

  render() {
    return (
      <div>
        {/* {courseList.size} */}
        loading
      </div>
    );
  }
}

export default SplashPage;
