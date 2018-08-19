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
  selectSearchParam,
} from './selectors';
import {
  StyledCourseListPage,
} from './Styled';

const PaginatedCourseList = Pagination(CourseList);

const coursesFilter = (courseList, semester, searchParams) => {
  if (searchParams.size) {
    const result = courseList.getIn([semester, 'courses'])
      .filter((course) => {
        const matchArr = searchParams.map((param) => (
          (course.get('id').indexOf(param) > -1) ||
          (course.get('instructor').indexOf(param) > -1) ||
          (course.get('instructor_eng').indexOf(param.toUpperCase()) > -1) ||
          (course.get('name').indexOf(param) > -1) ||
          (course.get('asgeneral').indexOf(param) > -1) ||
          (course.get('change').indexOf(param) > -1) ||
          (course.get('choose').indexOf(param) > -1) ||
          (course.get('choose_eng').indexOf(param.toUpperCase()) > -1) ||
          (course.get('name_eng').indexOf(param.toUpperCase()) > -1) ||
          (course.get('coregeneral').indexOf(param) > -1) ||
          (course.get('department').indexOf(param) > -1) ||
          (course.get('generalclass').indexOf(param) > -1) ||
          (course.get('language').indexOf(param) > -1) ||
          (course.get('note').indexOf(param) > -1) ||
          (course.get('place').indexOf(param) > -1) ||
          (course.get('session_class').indexOf(param) > -1) ||
          (course.get('session_weekday').indexOf(param) > -1)
        ));
        return !matchArr.toJS().includes(false);
      })
    return result;
  }
  return courseList.getIn([semester, 'courses']);
}

class CourseListPage extends Component {
  static propTypes = {
    semesterList: PropTypes.object,
    courseList: PropTypes.object,
    searchParams: PropTypes.object,   // List
    handleFetchCourse: PropTypes.func,
  }
  static defaultProps = {
    semesterList: null,
    courseList: null,
    searchParams: null,
    handleFetchCoursesDataList: () => { },
  }

  componentDidMount() {
    const {
      handleFetchCoursesDataList,
      courseList,
    } = this.props;
    if (!courseList.size) {
      handleFetchCoursesDataList();
    }
  }

  render() {
    const {
      semesterList,
      courseList,
      searchParams,
    } = this.props;
    const semester = semesterList.getIn([0, 'semester']);
    const courses = coursesFilter(courseList, semester, searchParams);

    return (
      <StyledCourseListPage>
        {
          courseList.size && courses &&
          <PaginatedCourseList
            dataList={courses}
            rowRange={25}
            semester={semester}
          />
        }
      </StyledCourseListPage>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  semesterList: selectSemesterList(),
  courseList: selectCoursesList(),
  searchParams: selectSearchParam(),
});

const mapDispatchToProps = (dispatch) => ({
  handleFetchCoursesDataList: () => dispatch(fetchCoursesDataList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseListPage);
