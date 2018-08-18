import styled from 'styled-components';
import {
    NAVIGATION_BAR_HEIGHT,
    NAVIGATION_BAR_BACKGROUND_COLOR,
} from 'src/global-style-constants';

export const StyledNavigationBar = styled.div`
    background: ${NAVIGATION_BAR_BACKGROUND_COLOR};
    height: ${NAVIGATION_BAR_HEIGHT};
    display: flex;
    align-items: center;

    .navigation-bar__branding {
        color: white;
        padding: 0 15px;
        font-size: 32px;
        font-weight: 900;
        line-height: ${NAVIGATION_BAR_HEIGHT}px;
        font-family: 'Archivo Black', sans-serif;
        span {
            font-family: 'Francois One', sans-serif;
            color: #5383d3;
            font-size: 25px;
        }
    }
`;
