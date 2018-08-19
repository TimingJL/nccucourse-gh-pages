import styled from 'styled-components';

export const StyledCourseList = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
  max-width: 1012px;

  .course-list__row {
    border-bottom: 1px solid #f1f1f1;
    padding: 0px 15px;
    cursor: pointer;
    &:hover {
      background: #1890ff14;
    }

    .course-list__info {
      display: grid;
      grid-template-columns: minmax(100px, 1fr) 1.3fr 1fr;
      align-items: center;
      height: 50px;

      .course-list__id {
        line-height: 50px;
        width: 100px;
        border: none;
        font-size: 1em;
        cursor: pointer;
        background: rgba(0,0,0,0);
      }

      .course-list__name {
        overflow : hidden;
        text-overflow : ellipsis;
        white-space : nowrap;
      }

      .course-list__instructor {
        overflow : hidden;
        text-overflow : ellipsis;
        white-space : nowrap;
      }
    }
  }
`;
