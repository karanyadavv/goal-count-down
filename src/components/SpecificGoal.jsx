export default function SpecificGoal() {
  const months = [1, 2, 3];
  return (
    <div className="text-white flex-col justify-center items-center space-y-6 p-4 border border-zinc-600 rounded-md absolute bottom-16 md:bottom-12 md:right-12">
      <div className="text-white flex space-x-8 p-4 border border-zinc-800 rounded-md bottom-0">
        <div>
          <select
            name=""
            id=""
            className="bg-black border border-zinc-600 rounded-md mr-2"
          >
            {months.map((item, index) => {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              );
            })}
          </select>
          month from now
        </div>
        <div>Add your date</div>
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-white text-black p-2 whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50">
          Set your goal
        </button>
      </div>
    </div>
  );
}
