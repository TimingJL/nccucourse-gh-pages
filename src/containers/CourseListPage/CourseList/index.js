import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import history from 'src/utils/history';
// import { routePathConfig } from 'containers/RoutePathConfig';
import { StyledCourseList } from './Styled';

class CourseList extends Component {
  static propTypes = {
    dataList: PropTypes.object,
  }
  static defaultProps = {
    dataList: null,
  }
  // componentDidMount() {
  //   const {
  //     semester,
  //   } = this.props;
  //   history.push(`${routePathConfig.courseList}/${semester}`);
  // }

  render() {
    const {
      dataList,
      rowRange,
    } = this.props;
    if (dataList || dataList.size) {
      console.log(dataList.slice(0,5).toJS());
    }
    return (
      <StyledCourseList>
        {
          dataList.slice(0, rowRange).map((course) => (
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
