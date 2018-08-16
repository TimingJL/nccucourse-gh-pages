import styled from 'styled-components';

const NAVIGATIONBAR_HEIGHT = '50px';

export const StyledNavigationBar = styled.div`
    background: #212325;
    height: ${NAVIGATIONBAR_HEIGHT};
    display: flex;
    align-items: center;

    .navigation-bar__branding {
        color: white;
        padding: 0 15px;
        font-size: 32px;
        font-weight: 900;
        line-height: ${NAVIGATIONBAR_HEIGHT};
        font-family: 'Archivo Black', sans-serif;
        span {
            font-family: 'Francois One', sans-serif;
            color: #5383d3;
            font-size: 25px;
        }
    }
`;
