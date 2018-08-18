import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledDropdown } from './Styled';
import { findAttributeInEvent } from 'src/utils/event';

class PageSelect extends Component {
  static propTypes = {
    pageRange: PropTypes.number,
  };
  static defaultProps = {
    pageRange: 1,
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
    this.setState({isDropdownOpwn: true});
  }

  handleOnDropdownClose() {
    this.setState({isDropdownOpwn: false});
  }

  handleOnPageNumberClicked(event) {
    const clickedPageNumber = findAttributeInEvent(event, 'data-pagenumber');
    console.log('page: ', clickedPageNumber);
    this.setState({isDropdownOpwn: false});
  }

  render() {
    const {
      pageRange,
    } = this.props;
    const {
      isDropdownOpwn,
    } = this.state;
    const pages = Array.from([...Array(pageRange).keys()], item => item + 1);

    return (
      <div
        onMouseOver={this.handleOnDropdownOpen}
        onMouseLeave={this.handleOnDropdownClose}
      >
        <div className="page-select__dropdown">{pageRange}</div>
        {
          isDropdownOpwn &&
          <StyledDropdown>
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
          </StyledDropdown>
        }
      </div>
    );
  }
}

export default PageSelect;
