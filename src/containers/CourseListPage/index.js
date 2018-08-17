import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {
  fetchCourses,
} from './actions';

class CourseListPage extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    props.handleFetchCourse();
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
  handleFetchCourse: () => dispatch(fetchCourses()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseListPage);
