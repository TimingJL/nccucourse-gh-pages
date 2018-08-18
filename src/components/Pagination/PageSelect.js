import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledDropdown } from './Styled';
import { findAttributeInEvent } from 'src/utils/event';

class PageSelect extends Component {
  static propTypes = {
    pageRange: PropTypes.number,
    currentPage: PropTypes.number,
    handleOnPageSelect: PropTypes.func,
  };
  static defaultProps = {
    pageRange: 1,
    currentPage: 1,
    handleOnPageSelect: () => {},
  };
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpwn: false,
    }
    this.handleOnDropdownOpen = this.handleOnDropdownOpen.bind(this);
    this.handleOnDropdownClose = this.handleOnDropdownClose.bind(this);
    this.handleOnPageNumberClicked = this.handleOnPageNumberClicked.bind(this);
  }

  handleOnDropdownOpen() {
    this.setState({ isDropdownOpwn: true });
  }

  handleOnDropdownClose() {
    this.setState({ isDropdownOpwn: false });
  }

  handleOnPageNumberClicked(event) {
    const {
      handleOnPageSelect,
    } = this.props;
    const clickedPageNumber = findAttributeInEvent(event, 'data-pagenumber');
    this.setState({ isDropdownOpwn: false });
    handleOnPageSelect(clickedPageNumber);
  }

  render() {
    const {
      pageRange,
      currentPage,
    } = this.props;
    const {
      isDropdownOpwn,
    } = this.state;
    const pages = Array.from([...Array(pageRange).keys()], item => item + 1);

    return (
      <div
        className="pagination__pageselect"
        onMouseOver={this.handleOnDropdownOpen}
        onMouseLeave={this.handleOnDropdownClose}
      >
        <div className="pagination__dropdown">
          {currentPage}
          <i className="fas fa-caret-down pagination__dropdown-icon" />
        </div>
        {
          isDropdownOpwn &&
          <StyledDropdown>
            <div className="dropdown__container">
              {
                pages.map((number) => (
                  <div
                    key={number}
                    data-pagenumber={number}
                    className="dropdown__option"
                    onClick={this.handleOnPageNumberClicked}
                  >
                    {number}
                  </div>
                ))
              }
            </div>

          </StyledDropdown>
        }
      </div>
    );
  }
}

export default PageSelect;
