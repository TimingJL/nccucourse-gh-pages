import React, { Component } from 'react';
import PropTypes from 'prop-types';
import message from 'antd/lib/message';
import history from 'src/utils/history';
import { findAttributeInEvent } from 'src/utils/event';
import { StyledCourseList } from './Styled';
import gtag from 'src/utils/tracking';

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
    const name = findAttributeInEvent(event, 'data-name');
    event.currentTarget.select();
    document.execCommand("copy");
    message.success(`${courseId} Copied!`);

    gtag('event', 'onCourseIdCopy', {
      'event_category' : name,
      'event_label': courseId,
    });
  }

  handleOnCourseClicked(event) {
    const {
      semester,
    } = this.props;
    const dataType = findAttributeInEvent(event, 'data-type');
    if (dataType === 'row') {
      const courseId = findAttributeInEvent(event, 'data-courseid');
      const name = findAttributeInEvent(event, 'data-name');
      const instructor = findAttributeInEvent(event, 'data-instructor');
      const searchParam = `?course=${name}&instructor=${instructor}`;
      gtag('event', 'view_course_detail', {
        'event_category' : name,
        'event_label': courseId,
      });
      history.push({
        pathname: `${window.location.pathname}/${courseId}`,
        state: {
          courseid: courseId,
          semester: semester,
        },
        search: searchParam,
      });
    }
  }

  render() {
    const {
      dataList,
      rowRange,
      currentPage,
    } = this.props;
    const end = currentPage * rowRange;
    const start = end - rowRange;

    return (
      <StyledCourseList>
        {
          dataList.slice(start, end).map((course, index) => (
            <li key={`${course.get('id')}/${index}`} data-type="row" className="course-list__row" data-courseid={course.get('id')} data-name={course.get('name')} data-instructor={course.get('instructor')} onClick={this.handleOnCourseClicked}>
              <div className="course-list__info">
                <input readOnly data-type="courseid" className="course-list__id" data-courseid={course.get('id')} data-name={course.get('name')} value={course.get('id')} onClick={this.handleOnCourseIdCopy} />
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
