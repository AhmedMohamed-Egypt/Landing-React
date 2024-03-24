import React from "react";
import Countdown from "react-countdown";
const destinationDate = new Date("2024/4/7").getTime();
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Countdown has completed
    return <div style={countdownStyle}>Countdown has ended!</div>;
  } else {
    // Display the countdown in days, hours, minutes, and seconds
    return (
      <div className="timer d-flex justify-content-center">
        <ul
          className="d-flex align-items-center countdown"
          data-date="2-4-2024"
          data-time="12:00"
        >
          <li className=" text-center">
            <p className="nunito-bold size-20 white pdtop-5 pdb-5">Days</p>
            <p className="nunito-bold-ex white size-40 pdtop-20 pdb-20 day">
              {days}
            </p>
          </li>
          <li className=" text-center">
            <p className="nunito-bold size-20 white pdtop-5 pdb-5">Hours</p>
            <p className="nunito-bold-ex white size-40 pdtop-20 pdb-20 hour">
              {hours}
            </p>
          </li>
          <li className=" text-center">
            <p className="nunito-bold size-20 white pdtop-5 pdb-5">Minutes</p>
            <p className="nunito-bold-ex white size-40 pdtop-20 pdb-20 min">
              {minutes}
            </p>
          </li>
        </ul>
      </div>
    );
  }
};
function CountDown() {
  return (
    <>
      <Countdown date={destinationDate} renderer={renderer} />
    </>
  );
}

export default CountDown;
