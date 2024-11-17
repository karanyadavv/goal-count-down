import { useEffect } from "react";
import { useState } from "react";

export default function CountDown() {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  useEffect(() => {
    const fetchData = () => {
      const oneDay = 24 * 60 * 60 * 1000;
      let currentDate = new Date();
      let currentYear = currentDate.getFullYear();
      let lastDay = new Date(`12/31/${currentYear}`);
      let total = lastDay - currentDate;

      const daysWithoutZero = Math.round(
        Math.abs((currentDate - lastDay) / oneDay)
      );
      const daysRemain = `${daysWithoutZero}`.padStart(2, "0"); // "05"
      setDays(daysRemain);

      const hoursWithoutZero = Math.floor((total / (1000 * 60 * 60)) % 24);
      const hoursRemain = `${hoursWithoutZero}`.padStart(2, "0"); // "05"
      setHours(hoursRemain);

      const minutesWithoutZero = Math.floor((total / 1000 / 60) % 60);
      const minutesRemain = `${minutesWithoutZero}`.padStart(2, "0"); // "05"
      setMinutes(minutesRemain);

      const secondsWithoutZero = Math.floor((total / 1000) % 60);
      const secondsRemain = `${secondsWithoutZero}`.padStart(2, "0"); // "05"
      setSeconds(secondsRemain);
    };

    fetchData();
  }, [days, hours, minutes, seconds]);
  return (
    <div className="bg-black h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-8 text-white text-2xl leading-relaxed md:text-[100px]">
        <div className="font-inter">Days until your goal</div>
        <div className="font-inter font-semibold">
          {days} days {hours} : {minutes} : {seconds}
        </div>
      </div>
    </div>
  );
}
