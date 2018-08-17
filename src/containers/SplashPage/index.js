import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import history from 'src/utils/history';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import {
//   fetchCoursesDataList,
// } from 'containers/CourseListPage/actions';
import { routePathConfig } from 'containers/RoutePathConfig';

class SplashPage extends Component {
  // static propTypes = {
  //   handleFetchCourse: PropTypes.func,
  // }
  // static defaultProps = {
  //   handleFetchCoursesDataList: () => {},
  // }
  componentDidMount() {
    // const {
    //   handleFetchCoursesDataList,
    // } = this.props;
    // console.log('splash did mount');
    // handleFetchCoursesDataList();
    history.push(routePathConfig.courseList);
  }

  render() {
    return (
      <div>
        loading
      </div>
    );
  }
}

export default SplashPage;
// const mapStateToProps = createStructuredSelector({
//   semesterList: selectSemesterList(),
//   courseList: selectCoursesList(),
// });

// const mapDispatchToProps = (dispatch) => ({
//   handleFetchCoursesDataList: () => dispatch(fetchCoursesDataList()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(SplashPage);
