import styled from 'styled-components';

export const StyledCourseSessionFilter = styled.div`
  padding: 0px 10px;
  .course-session-filter__input-container {
    display: flex;
    align-items: center;
    width: 100%;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

  .course-session-filter__input-box {
    outline: none;
    border: none;
    width: 100%;
    padding: 5px 10px;
  }

  .course-session-filter__condition-container {
    margin-left: 5px;
    padding: 0px 10px;
    border-radius: 50px;
    background: #1890ff;
    color: white;
    letter-spacing: 0px;
  }
`;

export const StyledTimetable = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;

  .time-table__header-item {
    line-height: 30px;
    font-size: 1.2em;
  }

  .time-table__column {
    display: grid;
    grid-template-rows: repeat(7, 1fr);
    align-items: center;
    text-align: center;
  }

  .time-table__item {
    border: 1px solid #eee;
    box-sizing: border-box;
    height: 35px;
    cursor: pointer;
    span {
      line-height: 35px;
    }
  }

  .item-table__item-selected {
    background: #1890ff;
    color: white;
  }
`;
