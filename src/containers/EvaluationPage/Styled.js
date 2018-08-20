import styled from 'styled-components';

export const StyledEvaluationPage = styled.div`
  display: grid;
  grid-template-columns: minmax(min-content,1012px);
  justify-content: center;
  align-items: center;
  margin: 20px;

  .evaluation__instructor-name {
    background: #d6e5ff;
    border-bottom: 3px solid #4978cd;
    color: #4978cd;
    line-height: 50px;
    text-align: center;
    font-size: 1.5em;
  }

  .evaluation__course-title {
    background: #49bfcd;
    color: white;
    line-height: 50px;
    text-align: center;
    font-size: 1.5em;
  }

  .evaluation__course-info {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    padding: 10px 15px;
  }

  .evaluation__course-info-item {
    display: grid;
    grid-template-columns: 100px 1fr;
  }

  .evaluation__course-comment-wrapper {
    margin: 0px;
    padding: 0px;
  }

  .evaluation__course-comment {
    list-style-type: none;
    border-bottom: 1px solid #eee;
    padding: 10px 15px;
  }

  @media only screen and (max-width: 600px) {
    margin: 0px;
    .evaluation__course-info {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
