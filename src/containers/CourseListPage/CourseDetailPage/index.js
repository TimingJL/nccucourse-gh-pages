import React, { Component } from 'react';
import history from 'src/utils/history';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {
  selectSemesterList,
  selectCoursesList,
} from 'containers/CourseListPage/selectors';
import { routePathConfig } from 'containers/RoutePathConfig';
import { StyledCourseDetailPage, Button } from './Styled';
import { findAttributeInEvent } from 'src/utils/event';

class CourseDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      semester: props.match.params.semester,
      courseId: props.match.params.courseid,
      course: null,
    };
    this.handleOnPageOpen = this.handleOnPageOpen.bind(this);
    this.handleOnEvaluationClick = this.handleOnEvaluationClick.bind(this);
  }

  componentDidMount() {
    const {
      courseList,
    } = this.props;
    const {
      courseId,
      semester,
    } = this.state;
    if (!courseList.size) {
      history.push(`${routePathConfig.courseList}`);
      return;
    }

    this.setState({
      course: courseList.getIn([semester, 'courses']).filter((course) => course.get('id') === courseId).get(0),
    });
  }

  handleOnPageOpen() {
    const {
      course,
    } = this.state;
    window.open(course.get('agenda'));
  }

  handleOnEvaluationClick(event) {
    const {
      semester,
    } = this.state;
    const instrName = findAttributeInEvent(event, 'data-instructor');
    history.push({
      pathname: `${routePathConfig.evaluation}/${instrName}`,
      state: {
        instructor: instrName,
        semester,
      }
    });
  }

  render() {
    const {
      course,
    } = this.state;
    if (!course) {
      return null;
    }
    const instrArr = course.get('instructor').split('、');

    return (
      <StyledCourseDetailPage numOfBtn={instrArr.length + 1}>
        <div className="course-detail__title">{course.get('name')}</div>

        <div className="course-detail__row">
          <div className="course-detail__label">課程代碼</div>
          <div className="course-detail__value">{course.get('id')}</div>
        </div>

        {
          course.get('generalclass') &&
          <div className="course-detail__row">
            <div className="course-detail__label">通識領域</div>
            <div className="course-detail__value">{course.get('generalclass')}</div>
          </div>
        }

        <div className="course-detail__row">
          <div className="course-detail__label">開課系所</div>
          <div className="course-detail__value">{course.get('department')}</div>
        </div>

        <div className="course-detail__row">
          <div className="course-detail__label">授課教師</div>
          <div className="course-detail__value">{course.get('instructor')}</div>
        </div>

        <div className="course-detail__row">
          <div className="course-detail__label">修課類別</div>
          <div className="course-detail__value">{course.get('choose')}</div>
        </div>

        <div className="course-detail__row">
          <div className="course-detail__label">學分</div>
          <div className="course-detail__value">{course.get('point')}</div>
        </div>

        <div className="course-detail__row">
          <div className="course-detail__label">上課地點</div>
          <div className="course-detail__value">{course.get('place')}</div>
        </div>

        <div className="course-detail__row">
          <div className="course-detail__label">上課時間</div>
          <div className="course-detail__value">星期{course.get('session_weekday')}, {course.get('session_class')}節</div>
        </div>

        <div className="course-detail__row">
          <div className="course-detail__label">核心通識</div>
          <div className="course-detail__value">{course.get('coregeneral')}</div>
        </div>

        <div className="course-detail__row">
          <div className="course-detail__label">得充抵通識</div>
          <div className="course-detail__value">{course.get('asgeneral')}</div>
        </div>

        <div className="course-detail__row">
          <div className="course-detail__label">授課語言</div>
          <div className="course-detail__value">{course.get('language')}</div>
        </div>

        <div className="course-detail__row">
          <div className="course-detail__label">備註</div>
          <div className="course-detail__value">{course.get('note')}</div>
        </div>

        <div className="course-detail__row">
          <div className="course-detail__label">異動資訊</div>
          <div className="course-detail__value">{course.get('change')}</div>
        </div>

        <div className="course-detail__button-container">
          <Button onClick={this.handleOnPageOpen}><span>教學大綱</span></Button>
          {
            instrArr.map((instr) => {
              return (
                <Button
                  key={instr}
                  data-instructor={instr}
                  onClick={this.handleOnEvaluationClick}
                >
                  <span>{instr}</span>
                </Button>
              );
            })
          }
        </div>
      </StyledCourseDetailPage>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  semesterList: selectSemesterList(),
  courseList: selectCoursesList(),
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetailPage);