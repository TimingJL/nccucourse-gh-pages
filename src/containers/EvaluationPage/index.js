import React, { Component } from 'react';
import history from 'src/utils/history';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectEvaluationList } from 'containers/CourseListPage/selectors';
import { StyledEvaluationPage } from './Styled';

class EvaluationPage extends Component {
  constructor(props) {
    super(props);
    const {
      evaluationList,
      match,
    } = this.props;
    this.state = {
      evaluation: evaluationList.filter((eva) => eva.get('instructor') === match.params.instructor).get(0),
    };
  }
  componentDidMount() {
    const {
      evaluationList,
    } = this.props;
    if(!evaluationList.size) {
      history.push('/');
    }
  }

  render() {
    const {
      evaluation,
    } = this.state;
    if(!evaluation) {
      return null;
    }

    return (
      <StyledEvaluationPage>
        <div className="evaluation__instructor-name">{evaluation.get('instructor')}</div>
        {
          evaluation.get('course').map((course) => (
            <div key={`${course.get('year')}-${course.get('semester')}-${course.get('id')}`}>
              <div className="evaluation__course-title">{course.get('name')}</div>
              <div className="evaluation__course-info">
                <div className="evaluation__course-info-item">
                  <div>學期: </div>
                  <div>{course.get('year')}/{course.get('semester')}</div>
                </div>

                <div className="evaluation__course-info-item">
                  <div>課程代碼: </div>
                  <div>{course.get('id')}</div>
                </div>


                <div className="evaluation__course-info-item">
                  <div>課程名稱: </div>
                  <div>{course.get('name')}</div>
                </div>

                <div className="evaluation__course-info-item">
                  <div>學生人數: </div>
                  <div>{course.get('student_num')}</div>
                </div>

                <div className="evaluation__course-info-item">
                  <div>評分: </div>
                  <div>{course.get('student_num')}</div>
                </div>
              </div>
              <ul className="evaluation__course-comment-wrapper">
                  {
                    course.get('comments').size &&
                    course.get('comments').map((comment, index) => (
                      <li key={`${index}`} className="evaluation__course-comment">{comment}</li>
                    ))
                  }
                </ul>
            </div>
          ))
        }
      </StyledEvaluationPage>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  evaluationList: selectEvaluationList(),
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(EvaluationPage);
