import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pagination from 'components/Pagination';
import CourseCategory from 'containers/CourseListPage/CourseCategory';
import { routePathConfig } from 'containers/RoutePathConfig';
import { findAttributeInEvent } from 'src/utils/event';
import history from 'src/utils/history';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
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
  constructor(props) {
    super(props);
    this.state = {
      currentSemester: 0,
    };
    this.handleOnSemesterSelect = this.handleOnSemesterSelect.bind(this);
  }
  static propTypes = {
    semesterList: PropTypes.object,
    courseList: PropTypes.object,
    searchParams: PropTypes.object,   // List
    fetchCoursesDataList: PropTypes.func,
  }
  static defaultProps = {
    semesterList: null,
    courseList: null,
    searchParams: null,
    fetchCoursesDataList: () => { },
  }

  componentDidMount() {
    const {
      fetchCoursesDataList,
      courseList,
    } = this.props;
    if (!courseList.size) {
      fetchCoursesDataList();
    }
  }

  handleOnSemesterSelect(event) {
    const semester = findAttributeInEvent(event, 'data-semester');
    this.setState({
      currentSemester: semester,
    });
    history.push({
      pathname: `${routePathConfig.semester}/${semester}`,
    });
  }

  render() {
    const {
      courseList,
      searchParams,
      match,
    } = this.props;
    const {
      currentSemester,
    } = this.state;
    const semester = currentSemester ? currentSemester : match.params.semester;
    const courses = coursesFilter(courseList, semester, searchParams);
    if (courses && courses.size) {
      const session = courses.map((course) => course.get('session_class')).toJS();
      const session_set = new Set(session);
      debugger;
    }
    return (
      <StyledCourseListPage isLoading={!Boolean(courseList.size && courses)}>
        {/* <div style={{display: 'flex'}}>
          <button data-semester="10701" onClick={this.handleOnSemesterSelect}>10701</button>
          <button data-semester="10702" onClick={this.handleOnSemesterSelect}>10702</button>
        </div> */}
        <CourseCategory {...this.props} />
        {
          Boolean(courseList.size && courses) ?
          <PaginatedCourseList
            dataList={courses}
            rowRange={25}
            semester={semester}
          /> :
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
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
  fetchCoursesDataList: () => dispatch(fetchCoursesDataList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseListPage);
