import { useEffect } from "react";
import { useState } from "react";

export default function CountDown() {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  let intervalId = "";
  useEffect(() => {
    intervalId = setInterval(() => {
      const fetchGoal = () => {
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
      fetchGoal();
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [days, hours, minutes, seconds]);
  return (
    <div className="bg-black h-screen flex flex-col items-center justify-center font-inter">
      <div className="flex flex-col items-center justify-center space-y-8 text-white leading-relaxed">
        <div className="text-sm md:text-2xl border border-zinc-600 rounded-xl px-4 py-2">
          Days until your goal
        </div>
        <div className=" font-semibold text-[38px] md:text-[100px]">
          {days} days {hours} : {minutes} : {seconds}
        </div>
        <button className="border border-zinc-600 rounded-xl px-4 py-2 text-xs flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          Add to your homescreen
        </button>
      </div>
    </div>
  );
}
