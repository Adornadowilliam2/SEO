import React from "react";

export default function MyCalendar() {
  const today = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ].map((day, index) => <p key={index}>{day}</p>);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ].map((month, index) => <p key={index}>{month}</p>);
  return (
    <div className="container">
      <h1>Calendar</h1>
      <div>
        <div className="calendar">
          <div className="left">
            <p>
              {today.getDate() < 10 ? `0${today.getDate()}` : today.getDate()}
            </p>
            {days[today.getDay()]}
          </div>
          <div className="right">
            {months[today.getMonth()]}
            <p>{today.getFullYear()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
