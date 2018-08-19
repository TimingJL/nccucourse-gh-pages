import React, { Component } from 'react';
import PropTypes from 'prop-types';
import message from 'antd/lib/message';
import history from 'src/utils/history';
import { findAttributeInEvent } from 'src/utils/event';
import { StyledCourseList } from './Styled';

class CourseList extends Component {
  constructor(props) {
    super(props);
    this.handleOnCourseIdCopy = this.handleOnCourseIdCopy.bind(this);
    this.handleOnCourseClicked = this.handleOnCourseClicked.bind(this);
  }
  static propTypes = {
    dataList: PropTypes.object,
    currentPage: PropTypes.number,
  }
  static defaultProps = {
    dataList: null,
    currentPage: 1,
  }

  handleOnCourseIdCopy(event) {
    const courseId = findAttributeInEvent(event, 'data-courseid');
    event.currentTarget.select();
    document.execCommand("copy");
    message.success(`${courseId} Copied!`);
  }

  handleOnCourseClicked(event) {
    const {
      semester,
    } = this.props;
    const dataType = findAttributeInEvent(event, 'data-type');
    if (dataType === 'row'){
      const courseId = findAttributeInEvent(event, 'data-courseid');
      history.push({
        pathname: `${window.location.pathname}/${courseId}`,
        state: {
          courseid: courseId,
          semester: semester,
        },
      });
    }
  }

  render() {
    const {
      dataList,
      rowRange,
      currentPage,
    } = this.props;
    const end = currentPage*rowRange;
    const start = end - rowRange;

    return (
      <StyledCourseList>
        {
          dataList.slice(start, end).map((course, index) => (
            <li key={`${course.get('id')}/${index}`} data-type="row" className="course-list__row" data-courseid={course.get('id')} onClick={this.handleOnCourseClicked}>
              <div className="course-list__info">
                <input readOnly data-type="courseid" className="course-list__id" data-courseid={course.get('id')} value={course.get('id')} onClick={this.handleOnCourseIdCopy} />
                <div className="course-list__name">{course.get('name')}</div>
                <div className="course-list__instructor">{course.get('instructor')}</div>
              </div>
            </li>
          ))
        }
      </StyledCourseList>
    );
  }
}

export default CourseList;
