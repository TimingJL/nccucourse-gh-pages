import styled from 'styled-components';

export const StyledCourseList = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
  max-width: 1012px;

  .course-list__row {
    border-bottom: 1px solid #f1f1f1;
    padding: 0px 15px;

    .course-list__info {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      align-items: center;
      height: 50px;

      .course-list__id {

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
