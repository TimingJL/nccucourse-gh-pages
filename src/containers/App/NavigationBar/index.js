import React, { Component } from 'react';
import PropTypes from 'prop-types';
import history from 'src/utils/history';
import { StyledNavigationBar } from './Styled';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { fetchSearchParam } from 'containers/CourseListPage/actions';

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
    } = this.props;
    const inputValue = event.currentTarget.value;
    const params = inputValue.split(" ").filter((item) => Boolean(item));
    handleOnFetchSearchParam(params);

    let searchParam = '?';
    params.map((param) => `search=${param}`)
      .forEach((param, index) => {
        if (index === 0) {
          searchParam = searchParam.concat(param);
        } else {
          searchParam = searchParam.concat(`&${param}`);
        }
      });

    history.push({
      search: searchParam,
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
                onChange={this.handleOnSearchInput}
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

// export default NavigationBar;

const mapStateToProps = createStructuredSelector({

});

const mapDispatchToProps = (dispatch) => ({
  handleOnFetchSearchParam: (param) => dispatch(fetchSearchParam(param)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
