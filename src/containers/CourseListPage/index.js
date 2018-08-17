import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {
  fetchCoursesDataList,
} from './actions';

class CourseListPage extends Component {
  static propTypes = {
    handleFetchCourse: PropTypes.func,
  }
  static defaultProps = {
    handleFetchCoursesDataList: () => {},
  }

  componentDidMount() {
    const {
      handleFetchCoursesDataList,
    } = this.props;
    console.log('did mount');
    handleFetchCoursesDataList();
  }

  render() {
    return (
      <div>ListPage</div>
    );
  }
}

const mapStateToProps = createStructuredSelector({

});

const mapDispatchToProps = (dispatch) => ({
  handleFetchCoursesDataList: () => dispatch(fetchCoursesDataList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseListPage);
