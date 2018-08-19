import styled from 'styled-components';

export const StyledCourseDetailPage = styled.div`
  display: grid;
  grid-template-columns: minmax(min-content,1012px);
  justify-content: center;
  align-items: center;
  margin: 20px;
  @media only screen and (max-width: 600px) {
    margin: 0px;
  }

  .course-detail__row {
    display: grid;
    grid-template-columns: 130px auto;
    border-bottom: 1px solid #eee;
    padding: 10px 15px;
  }

  .course-detail__title {
    background: #4978cd;
    color: white;
    line-height: 50px;
    text-align: center;
    font-size: 1.5em;
  }

  .course-detail__label {

  }

  .course-detail__value {

  }
`;
