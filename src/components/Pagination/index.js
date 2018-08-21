import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PageSelect from './PageSelect';
import { findAttributeInEvent } from 'src/utils/event';
import {
  StyledPagination,
} from './Styled';

const Pagination = (ListComponent) => class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultCurrentPage: 1, // default current page number
    }
    this.handleOnPageSelect = this.handleOnPageSelect.bind(this);
    this.handleOnAngleIconClick = this.handleOnAngleIconClick.bind(this);
  }

  handleOnPageSelect(clickedPageNumber) {
    this.setState({
      defaultCurrentPage: Number(clickedPageNumber),
    });
  }

  handleOnAngleIconClick(event) {
    const {
      dataList,
      rowRange,
    } = this.props;
    const {
      defaultCurrentPage,
    } = this.state;
    const pageRange = Math.ceil(dataList.size / rowRange);
    const angleType = findAttributeInEvent(event, 'data-angle');
    let delta = 0;
    if (angleType === 'right' && defaultCurrentPage < pageRange) {
      delta = 1;
    } else if (angleType === 'left' && defaultCurrentPage > 1) {
      delta = -1;
    }
    this.setState({
      defaultCurrentPage: defaultCurrentPage + delta,
    });
  }

  render() {
    const {
      dataList,
      rowRange,
    } = this.props;
    const {
      defaultCurrentPage,
    } = this.state;
    const pageRange = Math.ceil(dataList.size / rowRange);
    const currentPage = (defaultCurrentPage > pageRange ? 1 : defaultCurrentPage);

    return (
      <StyledPagination>
        <div className="pagination__pageselect-grid">
          <div className="pagination__pageselect-group">
            <i className="fas fa-angle-left pagination__pageselect-btn" data-angle='left' onClick={this.handleOnAngleIconClick} />
            <PageSelect pageRange={pageRange} currentPage={currentPage} handleOnPageSelect={this.handleOnPageSelect} />
            <i className="fas fa-angle-right pagination__pageselect-btn" data-angle='right' onClick={this.handleOnAngleIconClick} />
          </div>
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
