import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import history from 'src/utils/history';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
// import Routes from './Routes';
import CourseList from './CourseList';
import {
  fetchCoursesDataList,
} from './actions';
import {
  selectSemesterList,
  selectCoursesList,
} from './selectors';

class CourseListPage extends Component {
  static propTypes = {
    handleFetchCourse: PropTypes.func,
  }
  static defaultProps = {
    handleFetchCoursesDataList: () => {},
  }

  componentDidMount() {
    const {
      handleFetchCoursesDataList,
    } = this.props;
    handleFetchCoursesDataList();
  }

  render() {
    const {
      semesterList,
      courseList,
    } = this.props;

    return (
      <div>
        ListPage
        {
          courseList.size &&
          <CourseList semester={semesterList.getIn([0, 'semester'])} courses={courseList.getIn([semesterList.getIn([0, 'semester']), 'courses'])} />
        }
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  semesterList: selectSemesterList(),
  courseList: selectCoursesList(),
});

const mapDispatchToProps = (dispatch) => ({
  handleFetchCoursesDataList: () => dispatch(fetchCoursesDataList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseListPage);
