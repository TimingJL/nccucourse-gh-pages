import styled from 'styled-components';

export const StyledPageSelect = styled.div`
  position: relative;
  .page-select__dropdown {
    border: 1px solid black;
  }
`;

export const StyledDropdown = styled.div`
  position: absolute;
  width: 100%;
  background: white;

  .dropdown__option {
    cursor: pointer;
    &:hover {
      background: #eee;
    }
  }
`;
