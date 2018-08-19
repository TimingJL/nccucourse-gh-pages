import React from 'react';
import { StyledNavigationBar } from './Styled';

const NavigationBar = () => (
  <StyledNavigationBar className={'app-wrapper__navbar'}>
    <div className="navigation-bar__navbar-wrapper">
      <div className='navigation-bar__branding'>NCCU<span>course</span></div>
    </div>
  </StyledNavigationBar>
);

export default NavigationBar;
