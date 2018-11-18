import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pagination from 'components/Pagination';
import CourseCategory from 'containers/CourseListPage/CourseCategory';
import CourseSessionFilter from 'containers/CourseListPage/CourseSessionFilter';
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
  selectSelectedSession,
} from './selectors';
import {
  coursesFilter,
  sessionFilter,
} from './utils';
import {
  StyledCourseListPage,
} from './Styled';

const PaginatedCourseList = Pagination(CourseList);

class CourseListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSemester: props.match.params.semester,
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
      selectedSession,
    } = this.props;
    const {
      currentSemester,
    } = this.state;
    const semester = currentSemester ? currentSemester : match.params.semester;
    let courses;
    if (courseList.size) {
      courses = sessionFilter(
        coursesFilter(courseList, semester, searchParams),
        selectedSession
      );
    }

    return (
      <StyledCourseListPage isLoading={!Boolean(courseList.size && courses)}>
        {/* <div style={{display: 'flex'}}>
          <button data-semester="10701" onClick={this.handleOnSemesterSelect}>10701</button>
          <button data-semester="10702" onClick={this.handleOnSemesterSelect}>10702</button>
        </div> */}
        <CourseCategory {...this.props} />
        <CourseSessionFilter selectedSession={selectedSession} />
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
  selectedSession: selectSelectedSession(),
});

const mapDispatchToProps = (dispatch) => ({
  fetchCoursesDataList: () => dispatch(fetchCoursesDataList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseListPage);
