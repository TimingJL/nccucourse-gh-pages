import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  AppWrapper,
} from './Styled';
import Routes from './Routes';

import NavigationBar from './NavigationBar';

const App = () => {
  return (
    <AppWrapper>
      <NavigationBar />
      <div className={'app-wrapper__content'}>
        <Routes />
      </div>
    </AppWrapper>
  )
};

// export default App
export default withRouter(App);
