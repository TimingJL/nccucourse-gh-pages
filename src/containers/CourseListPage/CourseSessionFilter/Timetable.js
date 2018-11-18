import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import { findAttributeInEvent } from 'src/utils/event';
import { StyledTimetable } from './Styled';
import { setSelectedSession } from 'containers/CourseListPage/actions';
import {
  selectSelectedSession,
} from 'containers/CourseListPage/selectors'

const styleTableItem = (selectedSession, weekday, session) => {
  const isSelected =  selectedSession
    .find((item) => item.get('weekday') === weekday)
    .get('session')
    .includes(session);
  if (isSelected) {
    return 'time-table__item item-table__item-selected';
  }
  return 'time-table__item';
};

class Timetable extends Component {
  static propTypes = {
    handleSetSelectedSession: PropTypes.func,
  }
  static defaultProps = {
    handleSetSelectedSession: () => { },
  }

  constructor(props) {
    super(props);
    this.state = {
      weekdays: fromJS(['一', '二', '三', '四', '五', '六', '日']),
      sessions: fromJS(['1', '2', '3', '4', 'C', 'D', '5', '6', '7', '8', '9', 'E', 'F', 'G', 'H']),
    };
  }

  handleOnSessionSelect = (event) => {
    const {
      handleSetSelectedSession,
    } = this.props;
    const weekday = findAttributeInEvent(event, 'data-weekday');
    const session = findAttributeInEvent(event, 'data-session');

    handleSetSelectedSession({
      weekday,
      session,
    });
  }

  render() {
    const {
      weekdays,
      sessions,
    } = this.state;
    const {
      selectedSession,
    } = this.props;

    return (
      <StyledTimetable>
        {
          weekdays.map((weekday) => (
            <div key={weekday} className="time-table__header-item">{weekday}</div>
          ))
        }
        {
          weekdays.map((weekday) => (
            <div key={weekday} className="time-table__column">
              {
                sessions.map((session) => (
                  <div
                    key={session}
                    data-weekday={weekday}
                    data-session={session}
                    className={styleTableItem(selectedSession, weekday, session)}
                    onClick={this.handleOnSessionSelect}
                  >
                    <span>{session}</span>
                  </div>
                ))
              }
            </div>
          ))
        }
      </StyledTimetable>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  selectedSession: selectSelectedSession(),
});

const mapDispatchToProps = (dispatch) => ({
  handleSetSelectedSession: (findSession) => dispatch(setSelectedSession(findSession)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Timetable);
