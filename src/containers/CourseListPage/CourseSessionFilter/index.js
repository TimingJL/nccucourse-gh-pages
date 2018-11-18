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
    return (
      <StyledCourseSessionFilter>
        <div className="course-session-filter__input-container">
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
