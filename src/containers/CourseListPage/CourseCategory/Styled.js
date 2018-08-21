import styled from 'styled-components';

export const StyledCourseCategory = styled.div`
  margin: 10px 10px;

  .course-category__container {
    list-style: none;
    margin: 0px;
    padding: 0px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px 20px;
  }

  .course-category__item {
    display: inline-block;
    width: 100%;
    height: 50px;
    background: #ffd138;
    position: relative;
    outline: none;
    border: none;
    cursor: pointer;

    span{
      font-size: 1.1em;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-weight: bold;
      z-index: 11;
      letter-spacing: 1px;
    }
    &:before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      transition: width 300ms ease-out;
      background: #ffe082;
    }
    &:hover{
      &:before{
        content: '';
        width: 100%;
      }
      span {
        /* color: #595959; */
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .course-category__container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
