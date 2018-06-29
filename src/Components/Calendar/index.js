import React, { Component } from 'react';
import moment from 'moment';
import './calendar.css'

export default class Calendar extends Component {

  state = {
    dateContext: moment(),
    today: moment(),
    showMonthPopup: false,
    showYearPopup: false,
  }

  constructor(props){
    super(props);
  }

    weekdays = moment.weekdays(); //["Sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday"]
    weekdaysShort = moment.weekdaysShort(); // ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    months = moment.months();

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

    SelectList = (props) => {
      let popup = props.data.map((data) => {
        return (
          <div key={data}>
            <a href="#">
              {data}
            </a>
          </div>
        );
      });
      return (
        <div className="month-popup">
          {popup}
        </div>
      );
    }

    onChangeMonth = (e, month) => {
      this.setState({
          showMonthPopup: !this.state.showMonthPopup
      });
    }

    MonthNav = () => {
      return (
        <span className="label-month"
        onClick={(e) => {this.onChangeMonth(e, this.month())}}>
          {this.month()}
          {this.state.showMonthPopup &&
            <this.SelectList data ={this.months} />
          }
        </span>
      );
    }

  render() {

    let weekdays = this.weekdaysShort.map((day) => {
        return (
            <td key={day} className="week-day">{day[0]}</td>
        )
    });

    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(<td key={i * 80} className="emptySlot">
          {""}
        </td>
    );
    }

    console.log("blanks: ", blanks);

    let daysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      let className = (d == this.currentDay() ? "day current-day": "day");
      daysInMonth.push(
        <td key={d} className={className} >
          <span className="number-day">{d}</span>
        </td>
      );
    }
    console.log("days: ", daysInMonth);

    var totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
        if ((i % 7) !== 0) {
            cells.push(row);
        } else {
            let insertRow = cells.slice();
            rows.push(insertRow);
            cells = [];
            cells.push(row);
        }
        if (i === totalSlots.length - 1) {
            let insertRow = cells.slice();
            rows.push(insertRow);
        }
    });

    let trElems = rows.map((d, i) => {
      return (
        <tr key={i*100}>
          {d}
        </tr>
      )
    })

    return (
      <div className="calendar-container">
        <table className="calendar">
          <thead>
            <tr className="calendar-header">
              <td colSpan="5">
                <this.MonthNav />
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              {weekdays}
            </tr>
            {trElems}
          </tbody>
        </table>
      </div>
    );
  }
}
