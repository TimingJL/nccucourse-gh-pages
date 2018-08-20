import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
import {
  AppWrapper,
} from './Styled';
import Routes from './Routes';
import NavigationBar from './NavigationBar';

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <NavigationBar {...this.props} />
        <div className={'app-wrapper__content'}>
          <Routes {...this.props} />
        </div>
      </AppWrapper>
    )
  }
}

export default withRouter(App);
