import React from 'react';
import {
  AppWrapper,
} from './Styled';

import NavigationBar from './NavigationBar';

const App = () => {
  return (
    <AppWrapper>
      <NavigationBar />
      <div className={'app-wrapper__content'}>
        App
      </div>
    </AppWrapper>
  )
};

export default App
