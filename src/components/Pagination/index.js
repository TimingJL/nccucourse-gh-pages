import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PageSelect from './PageSelect';
import {
  StyledPagination,
} from './Styled';

const Pagination = (ListComponent) => class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1, // default current page number
    }
    this.handleOnPageSelect = this.handleOnPageSelect.bind(this);
  }
  handleOnPageSelect(clickedPageNumber) {
    this.setState({
      currentPage: Number(clickedPageNumber),
    });
  }

  render() {
    const {
      dataList,
      rowRange,
    } = this.props;
    const {
      currentPage,
    } = this.state;
    const pageRange = Math.ceil(dataList.size/rowRange);

    return(
      <StyledPagination>
        <div className="pagination__pageselect-container">
          <PageSelect pageRange={pageRange} currentPage={currentPage} handleOnPageSelect={this.handleOnPageSelect} />
        </div>
        <ListComponent
          {...this.props}
          currentPage={currentPage}
        />
      </StyledPagination>
    );
  }
}

Pagination.propTypes = {
  dataList: PropTypes.object,
  rowRange: PropTypes.number,
};

Pagination.defaultProps = {
  dataList: null,
  rowRange: 0,
};

export default Pagination;
