import React, { Component } from 'react';
import moment from 'moment';

export default class Calendar extends Component {
  constructor(props){
    super(props);
    this.width = props.width || "350px";
    this.style = props.style || {};
  }

  weekdays = moment.weekdays();
  weekdays = moment.weekdaysShort();
  month = moment.month();

  // moment().format('dddd');

  year = () => {
        return this.state.dateContext.format("Y");
    }
    month = () => {
        return this.state.dateContext.format("MMMM");
    }
    daysInMonth = () => {
        return this.state.dateContext.daysInMonth();
    }
    currentDate = () => {
        console.log("currentDate: ", this.state.dateContext.get("date"));
        return this.state.dateContext.get("date");
    }
    currentDay = () => {
        return this.state.dateContext.format("D");
    }

    firstDayOfMonth = () => {
        let dateContext = this.state.dateContext;
        let firstDay = moment(dateContext).startOf('month').format('d'); // Day of week 0...1..5...6
        return firstDay;
    }


  state = {
    momentContext: moment(),
    today: moment(),
    showMonthPopup: false,
    showYearPopup: false
  }

  render() {
    return (
      <div className="calendar-container">
        <h2>Calendar</h2>
      </div>
    );
  }
}
