import { useEffect } from "react";
import { useState } from "react";
import NumberFlow from "@number-flow/react";
import SpecificGoal from "./SpecificGoal";

export default function CountDown() {
  const currentYear = new Date().getFullYear() + 1;
  const initialCountDown = new Date(`1/1/${currentYear}`);
  const [lastDay, setLastDay] = useState(initialCountDown);

  const [time, setTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const fetchGoal = () => {
      const oneDay = 24 * 60 * 60 * 1000;
      let currentDate = new Date();
      // let currentYear = currentDate.getFullYear() + 1;
      // let lastDay = new Date(`1/1/${currentYear}`);
      let total = lastDay - currentDate;

      const daysWithoutZero = Math.round(
        Math.abs((currentDate - lastDay) / oneDay)
      );
      const hoursWithoutZero = Math.floor((total / (1000 * 60 * 60)) % 24);
      const minutesWithoutZero = Math.floor((total / 1000 / 60) % 60);
      const secondsWithoutZero = Math.floor((total / 1000) % 60);

      setTime({
        days: `${daysWithoutZero}`.padStart(2, "0"),
        hours: `${hoursWithoutZero}`.padStart(2, "0"),
        minutes: `${minutesWithoutZero}`.padStart(2, "0"),
        seconds: `${secondsWithoutZero}`.padStart(2, "0"),
      });
    };
    fetchGoal();

    const intervalId = setInterval(fetchGoal, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [lastDay]);
  return (
    <div className="bg-black h-screen flex flex-col items-center justify-center font-inter fixed inset-0">
      <div className="flex flex-col items-center justify-center space-y-8 text-white leading-relaxed">
        <div className="text-sm md:text-2xl border border-zinc-600 rounded-xl px-4 py-2">
          Days until your goal
        </div>
        <div className=" font-semibold text-[38px] md:text-[100px]">
          <NumberFlow value={time.days} /> days{" "}
          <NumberFlow value={time.hours} /> :{" "}
          <NumberFlow value={time.minutes} /> :{" "}
          <NumberFlow value={time.seconds} />
        </div>
        <div className="text-sm md:text-xl border border-zinc-600 rounded-xl px-4 py-2">
          <span className="text-zinc-400">Your current goal: </span>
          {lastDay.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
            formatMatcher: "basic",
          })}
        </div>
      </div>
      <SpecificGoal setLastDay={setLastDay} lastDay={lastDay} />
    </div>
  );
}
