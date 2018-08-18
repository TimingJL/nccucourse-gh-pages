import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PageSelect from './PageSelect';
import {
  StyledPageSelect,
} from './Styled';

const Pagination = (ListComponent) => class extends Component {
  render() {
    const {
      dataList,
      rowRange,
    } = this.props;
    const pageRange = Math.ceil(dataList.size/rowRange);

    return(
      <StyledPageSelect>
        <div>List Size: {dataList.size}</div>
        <div>Row Range: {rowRange}</div>
        <PageSelect pageRange={pageRange} />
        <ListComponent dataList={dataList} rowRange={rowRange} />
      </StyledPageSelect>
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
