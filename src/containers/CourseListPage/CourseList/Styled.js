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
      display: flex;
      align-items: center;
      height: 50px;

      .course-list__id {
        flex: 1 0 100px;
      }

      .course-list__name {
        flex: 1 0 100px;
      }

      .course-list__instructor {
        flex: 2 0 100px;

        overflow : hidden;
        text-overflow : ellipsis;
        white-space : nowrap;
      }
    }
  }
`;
