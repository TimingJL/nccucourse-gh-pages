import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pagination from 'components/Pagination';
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
import {
  StyledCourseListPage,
} from './Styled';

const PaginatedCourseList = Pagination(CourseList);

class CourseListPage extends Component {
  static propTypes = {
    handleFetchCourse: PropTypes.func,
  }
  static defaultProps = {
    handleFetchCoursesDataList: () => { },
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
    const semester = semesterList.getIn([0, 'semester']);
    const courses = courseList.getIn([semester, 'courses']);

    return (
      <StyledCourseListPage>
        {
          courseList.size && courses &&
          <PaginatedCourseList
            dataList={courses}
            rowRange={25}
          />
        }
      </StyledCourseListPage>
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
