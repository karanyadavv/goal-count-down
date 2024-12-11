import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function SpecificGoal({ setLastDay }) {
  const months = [0, 1, 2, 3];
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
    setLastDay(date);
  };

  const handleMonth = (e) => {
    setMonth(e.target.value);
  };

  useEffect(() => {
    const date = new Date();
    switch (month) {
      case "0":
        break;
      case "1":
        date.setDate(date.getDate() + 30);
        setLastDay(date);
        break;
      case "2":
        date.setDate(date.getDate() + 60);
        setLastDay(date);
        break;
      case "3":
        date.setDate(date.getDate() + 90);
        setLastDay(date);
        break;
      default:
        break;
    }
  }, [month]);

  return (
    <div className="text-white flex-col text-xs md:text-sm justify-center items-center space-y-4 p-4 border border-zinc-600 rounded-md absolute bottom-16 md:bottom-12 md:right-12">
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
            {months.map((item) => {
              return (
                <option className="" value={item} key={item}>
                  {item}
                </option>
              );
            })}
          </select>
          month{month == "2" || month == "3" ? "s" : ""} from now
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
    </div>
  );
}
