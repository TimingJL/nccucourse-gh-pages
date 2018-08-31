import styled from 'styled-components';

export const StyledPagination = styled.div`
  position: relative;

  .pagination__dropdown {
    position: relative;
    border: 1px solid #dadada;
  }

  .pagination__dropdown-icon {
    position: absolute;
    right: 0;
    top: 15%;
    padding: 0 5px;
  }

  .pagination__pageselect-grid {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    margin: 20px 0px;
  }

  .pagination__pageselect-group {
    display: flex;
    vertical-align: middle;
  }

  .pagination__pageselect-btn {
    width: 40px;
    line-height: 26px;
    font-size: 1.5em;
    text-align: center;
    cursor: pointer;
  }

  .pagination__pageselect {
    width: 100px;
    position: relative;
    text-align: center;
  }
`;

export const StyledDropdown = styled.div`
  position: absolute;
  width: 100%;
  background: white;
  border: 1px solid #dadada;
  box-sizing: border-box;

  .dropdown__container {
    position: relative;
    overflow-y: scroll;
    max-height: 300px;
  }

  .dropdown__option {
    cursor: pointer;
    padding: 0px 10px;
    &:hover {
      background: #eee;
    }
  }
`;
