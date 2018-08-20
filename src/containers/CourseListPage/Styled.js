import styled from 'styled-components';

export const StyledCourseListPage = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: minmax(min-content, 1012px);

  ${(props) => {
    if (props.isLoading) {
      return `
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
        display: inline;
      `;
    }
  }}
`;
