import React from "react";

let newData = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let months = [
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
  "December"
];

function Footer() {
  return (
    <footer className="Footer">
      <div>
        &copy;{" "}
        {days[newData.getDay()] +
          "-" +
          months[newData.getMonth()] +
          "-" +
          newData.getFullYear()}{" "}
        Michael
      </div>
    </footer>
  );
}

export default Footer;
