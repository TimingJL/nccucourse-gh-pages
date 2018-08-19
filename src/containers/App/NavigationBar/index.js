import React, { Component } from 'react';
import { StyledNavigationBar } from './Styled';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocus: false,
    }
    this.handleOnSearchFocus = this.handleOnSearchFocus.bind(this);
    this.handleOnSearchBlur = this.handleOnSearchBlur.bind(this);
  }

  handleOnSearchFocus() {
    this.setState({
      isFocus: true,
    });
  }

  handleOnSearchBlur() {
    this.setState({
      isFocus: false,
    });
  }

  render() {
    const {
      isFocus,
    } = this.state;

    return (
      <StyledNavigationBar isFocus={isFocus} className={'app-wrapper__navbar'}>
        <div className="navigation-bar__navbar-wrapper">
          <div className="navigation-bar__navbar-grid">
            <div className="navigation-bar__branding">NCCU<span>course</span></div>
            <div className="navigation-bar__search-wrapper">
              <input
                onFocus={this.handleOnSearchFocus}
                onBlur={this.handleOnSearchBlur}
                className="navigation-bar__search-input-box"
                type="text"
                placeholder="Search.."
                name="search"
              />
              <i className="fas fa-search navigation-bar__search-icon"></i>
            </div>
          </div>
        </div>
      </StyledNavigationBar>
    )
  }
}

export default NavigationBar;
