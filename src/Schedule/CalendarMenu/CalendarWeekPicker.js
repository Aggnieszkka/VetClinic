import React from 'react';
import moment from 'moment';
import MomentLocaleUtils from 'react-day-picker/moment';
import 'moment/locale/pl';
import DayPicker from 'react-day-picker';
import { ReactComponent as ArrowSvg } from './img/arrow.svg';
import './style.css';
import 'react-day-picker/lib/style.css';

function getWeekDays(weekStart) {
  const days = [weekStart];
  for (let i = 1; i < 7; i += 1) {
    days.push(
      moment(weekStart)
        .add(i, 'days')
        .toDate()
    );
  }
  return days;
}

function getWeekRange(date) {
  return {
    from: moment(date)
      .startOf('week')
      .toDate(),
    to: moment(date)
      .endOf('week')
      .toDate(),
  };
}

class CalendarWeekPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hoverRange: undefined,
      selectedDays: getWeekDays(getWeekRange(Date()).from),
      showWeekPicker: false,
    };

    this.dayPickerRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.showWeekPicker = this.showWeekPicker.bind(this);
    this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
    this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.dayPickerRef
      && this.dayPickerRef.current
      && !this.dayPickerRef.current.contains(event.target)
      && this.state.showWeekPicker) {
      this.showWeekPicker();
    }
  }

  showWeekPicker() {
    this.setState({ showWeekPicker: !this.state.showWeekPicker });
  }

  handleDayChange = date => {
    this.showWeekPicker();
    this.setState({
      selectedDays: getWeekDays(getWeekRange(date).from),
    });
  };

  handleDayEnter = date => {
    this.setState({
      hoverRange: getWeekRange(date),
    });
  };

  handleDayLeave = () => {
    this.setState({
      hoverRange: undefined,
    });
  };

  handleWeekClick = (weekNumber, days, e) => {
    this.setState({
      selectedDays: days,
    });
  };

  handleLeftArrowClick () {
    const dayBefore = moment(this.state.selectedDays[0]).subtract(1, 'days').toDate();
    this.setState({
      selectedDays: getWeekDays(getWeekRange(dayBefore).from),
    });
  }

  handleRightArrowClick () {
    const dayAfter = moment(this.state.selectedDays[6]).add(1, 'days').toDate();
    this.setState({
      selectedDays: getWeekDays(getWeekRange(dayAfter).from),
    });
  }

  render() {
    const { hoverRange, selectedDays, showWeekPicker } = this.state;

    const daysAreSelected = selectedDays.length > 0;

    const modifiers = {
      hoverRange,
      selectedRange: daysAreSelected && {
        from: selectedDays[0],
        to: selectedDays[6],
      },
      hoverRangeStart: hoverRange && hoverRange.from,
      hoverRangeEnd: hoverRange && hoverRange.to,
      selectedRangeStart: daysAreSelected && selectedDays[0],
      selectedRangeEnd: daysAreSelected && selectedDays[6],
    };

    return (
      <div className="selectedWeekContainer" ref={this.dayPickerRef}>

        <ArrowSvg className="leftCalendarArrow" onClick={this.handleLeftArrowClick}/>
        {selectedDays.length === 7 && (
          <div className="selectedWeek" onClick={this.showWeekPicker}>
            {moment(selectedDays[0]).format("DD.MM")} –{' '}
            {moment(selectedDays[6]).format("DD.MM.YYYY")}
          </div>
        )}
        <ArrowSvg className="rightCalendarArrow" onClick={this.handleRightArrowClick}/>

        {showWeekPicker && (
          <div class="dayPickerContainer">
            <DayPicker
              selectedDays={selectedDays}
              showWeekNumbers
              showOutsideDays
              modifiers={modifiers}
              onDayClick={this.handleDayChange}
              onDayMouseEnter={this.handleDayEnter}
              onDayMouseLeave={this.handleDayLeave}
              onWeekClick={this.handleWeekClick}
              localeUtils={MomentLocaleUtils}
              locale={'pl'}
            />
          </div>
        )}

      </div>
    );
  }
}

export default CalendarWeekPicker;