import React, { Component } from 'react';
import Modal from 'antd/lib/modal';
import Timetable from './Timetable';
import { StyledCourseSessionFilter } from './Styled';

class CourseSessionFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
    this.handleOnShowModal = this.handleOnShowModal.bind(this);
    this.handleOnHideModal = this.handleOnHideModal.bind(this);
  }

  handleOnShowModal() {
    this.setState({
      isVisible: true,
    });
  }

  handleOnHideModal() {
    this.setState({
      isVisible: false,
    });
  }

  render() {
    const {
      selectedSession,
    } = this.props;
    return (
      <StyledCourseSessionFilter>
        <div className="course-session-filter__input-container">
          {
            selectedSession.map((session) => {
              if (session.get('session').length) {
                return (
                  <div key={session} className="course-session-filter__condition-container">
                    <span>{session.get('weekday')}</span>
                    <span>{session.get('session')}</span>
                  </div>
                )
              }
            })
          }
          <input
            type="text"
            className="course-session-filter__input-box"
            placeholder="上課時間篩選..."
            onClick={this.handleOnShowModal}
          />
        </div>
        <Modal
          title="上課時間篩選"
          visible={this.state.isVisible}
          onOk={this.handleOnHideModal}
          onCancel={this.handleOnHideModal}
          okText="確定"
          cancelText="取消"
        >
          <Timetable />
        </Modal>
      </StyledCourseSessionFilter>
    );
  }
}

export default CourseSessionFilter;
