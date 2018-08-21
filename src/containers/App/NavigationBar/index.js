import React, { Component } from 'react';
import PropTypes from 'prop-types';
import history from 'src/utils/history';
import { StyledNavigationBar } from './Styled';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { fetchSearchParam } from 'containers/CourseListPage/actions';
import { findAttributeInEvent } from 'src/utils/event';

class NavigationBar extends Component {
  static propTypes = {
    handleOnSetSearchParam: PropTypes.func,
  }
  static defaultProps = {
    handleOnSetSearchParam: () => { },
  }
  constructor(props) {
    super(props);
    this.state = {
      isFocus: false,
    }
    this.handleOnSearchFocus = this.handleOnSearchFocus.bind(this);
    this.handleOnSearchBlur = this.handleOnSearchBlur.bind(this);
    this.handleOnSearchInput = this.handleOnSearchInput.bind(this);
    this.handleOnBrandingClick = this.handleOnBrandingClick.bind(this);
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

  handleOnSearchInput(event) {
    const {
      handleOnFetchSearchParam,
      location,
    } = this.props;
    const actionType = findAttributeInEvent(event, 'data-actiontype')
    const inputValue = event.currentTarget.value;
    const params = inputValue.split(" ").filter((item) => Boolean(item));
    const semester = location.state.semester;
    handleOnFetchSearchParam(params, semester, actionType);
  }

  handleOnBrandingClick() {
    history.push('/');
  }

  render() {
    const {
      isFocus,
    } = this.state;

    return (
      <StyledNavigationBar isFocus={isFocus} className={'app-wrapper__navbar'}>
        <div className="navigation-bar__navbar-wrapper">
          <div className="navigation-bar__navbar-grid">
            <div className="navigation-bar__branding" onClick={this.handleOnBrandingClick}>NCCU<span>course</span></div>
            <div className="navigation-bar__search-wrapper">
              <input
                onChange={this.handleOnSearchInput}
                onFocus={this.handleOnSearchFocus}
                onBlur={this.handleOnSearchBlur}
                className="navigation-bar__search-input-box"
                data-actiontype='search'
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

const mapStateToProps = createStructuredSelector({

});

const mapDispatchToProps = (dispatch) => ({
  handleOnFetchSearchParam: (params, semester, actionType) => dispatch(fetchSearchParam(params, semester, actionType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
