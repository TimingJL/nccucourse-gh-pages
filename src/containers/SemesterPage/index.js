import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import history from 'src/utils/history';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import {
//   fetchCoursesDataList,
// } from 'containers/CourseListPage/actions';
import { routePathConfig } from 'containers/RoutePathConfig';

class SemesterPage extends Component {
  // static propTypes = {
  //   handleFetchCourse: PropTypes.func,
  // }
  // static defaultProps = {
  //   handleFetchCoursesDataList: () => {},
  // }
  // componentDidMount() {
  //   history.push(`${routePathConfig.courseList}/10701/`);
  // }

  render() {
    return (
      <div>
        SemesterPage
        <button>10701</button>
        <button>10702</button>
        <button>10801</button>
      </div>
    );
  }
}

export default SemesterPage;
