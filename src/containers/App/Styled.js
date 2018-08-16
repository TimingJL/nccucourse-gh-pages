import styled from 'styled-components';
import {
  NAVIGATION_BAR_HEIGHT,
} from 'src/global-style-constants';

export const AppWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-areas:
    'navbar'
    'content';
  grid-template-rows: ${NAVIGATION_BAR_HEIGHT}px 1fr;

  .app-wrapper__navbar {
    grid-area: navbar;
  }

  .app-wrapper__content {
    grid-area: content;
  }
`;
