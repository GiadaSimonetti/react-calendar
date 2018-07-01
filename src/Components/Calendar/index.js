import React, { Component } from 'react';
import moment from 'moment';
import './calendar.css';
import leftArrow from './left-arrow.png';
import rightArrow from './right-arrow.png';

export default class Calendar extends Component {

  state = {
    dateContext: moment(),
    today: moment(),
    showMonthPopup: false,
    showYearPopup: false,
  }

  // constructor(props){
  //   super(props);
  // }

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


    nextMonth = () => {
      let dateContext = Object.assign({}, this.state.dateContext);
      dateContext = moment(dateContext).add(1, "month");
      this.setState({
        dateContext: dateContext
      });
      this.props.onNextMonth && this.props.onNextMonth();
    }

    prevMonth = () => {
      let dateContext = Object.assign({}, this.state.dateContext);
      dateContext = moment(dateContext).subtract(1, "month");
      this.setState({
        dateContext: dateContext
      });
      this.props.onPrevMonth && this.props.onPrevMonth();
    }

    onDayClick = (e, day) => {
      this.props.onDayClick && this.props.onDayClick(e, day)
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
      // let className = (d == this.currentDay() ? "day current-day": "day");

      let className = (d === 1 || d === 4 || d === 5 || d === 8 || d === 11 || d === 12 ||
        d === 15 || d === 18 || d === 19 || d === 22 || d === 25 || d === 26 || d === 29 ?
        "not-available-day" : d == this.currentDay() ? "day current-day": "day")


      daysInMonth.push(
        <td key={d} className={className} >
          <span className="number-day"
          onClick={(e) => {this.onDayClick(e, d)}}
          >{d}</span>
        </td>
      );
      console.log("d", d);
      console.log("typeof d", typeof d);
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
              <td colSpan="1" className="prev-month">
              <img src={leftArrow} className="arrow left-arrow" alt="left-arrow"
                onClick={(e)=>{this.prevMonth()}}
              />
              </td>
              <td colSpan="5">
                <span className="label-month">{this.month()} </span>
                <span className="label-year"> {this.year()}</span>
              </td>
              <td colSpan="1" className="next-month">
                <img src={rightArrow} className="arrow right-arrow" alt="right-arrow"
                  onClick={(e)=>{this.nextMonth()}}
                />
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
        <div className="calendar-footer">
            <div className="delivery-message-box">
            <p className="delivery-message"> Delivery dates will change
            <br />for all upcoming boxes
            </p>
            <button className="btn btn-calendar btn-cancel"
            > {"cancel,"}
            <br />{"don't change"}
            </button>
            <button className="btn btn-calendar btn-change"
              onClick={(e)=>alert("Are you sure you want to chage the date?")}
            > change date
            </button>
          </div>

        </div>
      </div>
    );
  }
}
