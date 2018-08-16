import React from 'react';
import {
  AppWrapper,
} from './Styled';

import NavigationBar from './NavigationBar';
import {
  COURSE_DATA_DOMAIN,
} from 'src/config';

const App = () => {
  return (
    <AppWrapper>
      <NavigationBar />
      App
      <div>{COURSE_DATA_DOMAIN}</div>
    </AppWrapper>
  )
};

export default App
