import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {
  fetchCoursesDataList,
} from 'containers/CourseListPage/actions';

class SplashPage extends Component {
  componentDidMount() {
    const {
      fetchCoursesDataList,
    } = this.props;
    fetchCoursesDataList();
  }

  render() {
    const spinnerWrapper = {
      position: 'absolute',
      left: '50%',
      top: '20%',
      transform: 'translateY(-50%) translateX(-50%)',
    };
    return (
      <div style={spinnerWrapper}>
        <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({

});

const mapDispatchToProps = (dispatch) => ({
  fetchCoursesDataList: () => dispatch(fetchCoursesDataList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashPage);
