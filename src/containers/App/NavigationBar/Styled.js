import styled from 'styled-components';
import {
    NAVIGATION_BAR_HEIGHT,
    NAVIGATION_BAR_BACKGROUND_COLOR,
} from 'src/global-style-constants';

export const StyledNavigationBar = styled.div`
    background: ${NAVIGATION_BAR_BACKGROUND_COLOR};
    height: ${NAVIGATION_BAR_HEIGHT};
    display: flex;
    justify-content: center;
    align-items: center;

    .navigation-bar__navbar-wrapper {
        display: grid;
        grid-template-columns: minmax(min-content,1012px);
        justify-content: center;
        align-items: center;
    }

    .navigation-bar__navbar-grid {
        display: grid;
        grid-template-columns: 1fr 2fr;
        justify-content: center;
        align-items: center;
    }

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

    .navigation-bar__search-wrapper {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .navigation-bar__search-input-box {
        width: 100px;
        transition: all 0.5s ease-out;
        &:focus {
            width: 100%;
            background: #f7f7f729;
            border-bottom: 2px solid white;
        }

        background: ${NAVIGATION_BAR_BACKGROUND_COLOR};
        border: none;
        outline: none;
        border-bottom: 2px solid #9a9a9a;
        padding: 5px 10px;
        color: white;
    }

    .navigation-bar__search-icon {
        color: white;
        font-size: 1.7em;
        margin: 0px 15px 0px 5px;
        text-align: right;
    }

    @media only screen and (max-width: 600px) {
        .navigation-bar__navbar-grid {
            ${(props) => {
                if (props.isFocus) {
                    return `
                        grid-template-columns: 1fr;
                        padding-left: 15px;
                    `;
                }
            }}
        }

        .navigation-bar__branding {
            ${(props) => {
                if (props.isFocus) {
                    return 'display: none;';
                } else {
                    return 'display: true;';
                }
            }}
        }
    }
`;
