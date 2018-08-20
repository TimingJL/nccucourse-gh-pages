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

  .course-detail__button-container {
    display: grid;
    /* grid-gap: { grid-row-gap } { grid-column-gap }; */
    grid-gap: 10px 10px;

    ${(props) => {
      if (props.numOfBtn < 3) {
        return `
          grid-template-columns: repeat(${props.numOfBtn}, 1fr);
        `;
      } else {
        return `
          grid-template-columns: repeat(2, 1fr);
        `;
      }
    }}

    margin: 20px 0px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  width: 100%;
  height: 50px;
  background: #d4eaf6;
  position: relative;
  outline: none;
  border: none;
  cursor: pointer;
  span{
    font-size: 1.2em;
    color: #2c6fae;
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
    background: #67cdff;
  }
  &:hover{
    &:before{
      content: '';
      width: 100%;
    }
    span {
      color: white;
    }
  }
`
