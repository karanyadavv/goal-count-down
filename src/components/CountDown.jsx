import { useEffect } from "react";
import { useState } from "react";

const oneDay = 24 * 60 * 60 * 1000;

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let lastDay = new Date(`12/31/${currentYear}`);
let total = lastDay - currentDate;
const daysRemain = Math.round(Math.abs((currentDate - lastDay) / oneDay));
const hoursRemain = Math.floor((total / (1000 * 60 * 60)) % 24);
const minutesRemain = Math.floor((total / 1000 / 60) % 60);
const secondsRemain = Math.floor((total / 1000) % 60);

export default function CountDown() {
  const [days, setDays] = useState(daysRemain);
  const [hours, setHours] = useState(hoursRemain);
  const [minutes, setMinutes] = useState(minutesRemain);
  const [seconds, setSeconds] = useState(secondsRemain);

  useEffect(() => {
    let intervalId = "";
    const CountDownTimer = () => {
      intervalId = setInterval(() => {
        if (seconds === 0) {
          return 0;
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    };

    // CountDownTimer();
    return () => {
      clearInterval(intervalId);
    };
  }, [seconds]);
  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <div className="text-white">Hello from CountDown</div>
      <div className="flex text-white text-2xl">
        <div>Days until your goal</div>
        <div>
          {days}:{hours}:{minutes}:{seconds}
        </div>
      </div>
    </div>
  );
}
