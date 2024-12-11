import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function SpecificGoal({ setLastDay, lastDay }) {
  const months = [1, 2, 3];
  const [datePicker, setDatePicker] = useState(null);
  const [month, setMonth] = useState("");

  useEffect(() => {
    document.addEventListener("click", (event) => {
      if (event.target.className === "react-datepicker__close-icon") {
        setDatePicker(null);
      }
    });

    return () => {
      document.removeEventListener("click", () => {});
    };
  }, []);

  const handleDatePicker = (date) => {
    // setDatePicker(date);
    // if (datePicker === null) return;
    setLastDay(date);
  };

  const handleMonth = (e) => {
    setMonth(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    const date = new Date();
    switch (month) {
      case "1":
        date.setDate(date.getDate() + 30);
        console.log(date, "hey");
        setLastDay(date);
        break;
      case "2":
        date.setDate(date.getDate() + 60);
        console.log(date, "hey");
        setLastDay(date);
        break;
      case "3":
        date.setDate(date.getDate() + 90);
        console.log(date, "hey");
        setLastDay(date);
        break;
      default:
        console.log("hey from default");
        break;
    }
  }, [month]);

  const handleGoal = () => {
    if (datePicker === null) return;
    setLastDay(datePicker);
  };
  return (
    <div className="text-white flex-col justify-center items-center space-y-6 p-4 border border-zinc-600 rounded-md absolute bottom-16 md:bottom-12 md:right-12">
      <div className="text-white flex space-x-8 p-4 border border-zinc-800 rounded-md bottom-0">
        <div className="transition-all duration-300 ease-out">
          <select
            name=""
            id=""
            className="bg-black border border-zinc-600 rounded-md mr-2 transition-all duration-300 ease-in-out 
               transform hover:scale-105 focus:outline-none 
               focus:ring-2 focus:ring-zinc-500"
            onChange={handleMonth}
            value={month}
          >
            {months.map((item, index) => {
              return (
                <option className="" value={item} key={index}>
                  {item}
                </option>
              );
            })}
          </select>
          month from now
        </div>
        <div className="border-r border-zinc-500"></div>
        <div className="bg-black">
          <DatePicker
            wrapperClassName="datePicker"
            dateFormat={"dd/MM/yyyy"}
            className="bg-black w-28 md:w-36"
            selected={datePicker}
            onSelect={(date) => handleDatePicker(date)}
            isClearable
            minDate={new Date()}
            placeholderText="Add your date"
          />
        </div>
      </div>
      {/* <div className="flex justify-center items-center">
        <button
          onClick={handleGoal}
          className="bg-white text-black p-2 whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50"
        >
          Set your goal
        </button>
      </div> */}
    </div>
  );
}
