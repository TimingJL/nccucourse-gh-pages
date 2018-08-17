import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
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
        <div>size: {courseList.size}</div>
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
