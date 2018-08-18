import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import history from 'src/utils/history';
// import { routePathConfig } from 'containers/RoutePathConfig';
import { StyledCourseList } from './Styled';

class CourseList extends Component {
  static propTypes = {
    semester: PropTypes.string,
    courses: PropTypes.object,
  }
  static defaultProps = {
    semester: "",
    courses: null,
  }
  // componentDidMount() {
  //   const {
  //     semester,
  //   } = this.props;
  //   history.push(`${routePathConfig.courseList}/${semester}`);
  // }

  render() {
    const {
      semester,
      courses,
    } = this.props;
    if (courses.size) {
      console.log('semester: ', semester);
      console.log(courses.slice(0,5).toJS());
    }
    return (
      <StyledCourseList>
        {semester}
        {
          courses.slice(0, 10).map((course) => (
            <li key={course.get('id')} className="course-list__row">
              <div className="course-list__info">
                <div className="course-list__id">{course.get('id')}</div>
                <div className="course-list__name">{course.get('name')}</div>
                <div className="course-list__instructor">{course.get('instructor')}</div>
              </div>
              <div></div>
            </li>
          ))
        }
      </StyledCourseList>
    );
  }
}

export default CourseList;
