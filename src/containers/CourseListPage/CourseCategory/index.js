import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledCourseCategory } from './Styled';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { fetchSearchParam } from 'containers/CourseListPage/actions';
import { findAttributeInEvent } from 'src/utils/event';

const categories = [
  '社會通識',
  '自然通識',
  '中文通識',
  '外文通識',
  '人文通識',
  '跨領域',
];

class CourseCategory extends Component {
  static propTypes = {
    handleOnSetSearchParam: PropTypes.func,
  }
  static defaultProps = {
    handleOnSetSearchParam: () => { },
  }
  constructor(props) {
    super(props);
    this.handleOnCategoryClick = this.handleOnCategoryClick.bind(this);
  }

  handleOnCategoryClick(event) {
    const {
      handleOnFetchSearchParam,
      location,
    } = this.props;
    const category = [findAttributeInEvent(event, 'data-category')];
    const actionType = findAttributeInEvent(event, 'data-actiontype');
    const semester = location.state.semester;
    handleOnFetchSearchParam(category, semester, actionType);
  }

  render() {
    return(
      <StyledCourseCategory>
        <ul className="course-category__container">
          {
            categories.map((category) => (
              <li key={category} data-category={category} data-actiontype="category" className="course-category__item" onClick={this.handleOnCategoryClick}><span>{category}</span></li>
            ))
          }
        </ul>
      </StyledCourseCategory>
    );
  }
}

// export default CourseCategory;

const mapStateToProps = createStructuredSelector({

});

const mapDispatchToProps = (dispatch) => ({
  handleOnFetchSearchParam: (params, semester, actionType) => dispatch(fetchSearchParam(params, semester, actionType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseCategory);
