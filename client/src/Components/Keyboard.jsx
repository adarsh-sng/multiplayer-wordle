import { Delete } from 'lucide-react';

const Keyboard = ({ onKeyClick }) => {
  const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const row3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const handleKeyClick = (key) => {
    onKeyClick(key);
  };

  const renderRow = (row) => {
    return (
      <div className="flex justify-center gap-1 w-full">
      {row.map((key) => (
        <button
        key={key}
        className="flex-1 flex items-center justify-center h-12 text-lg md:text-lg lg:text-2xl border-2 rounded-md px-auto"
        onClick={() => handleKeyClick(key)}
        >
        {key}
        </button>
      ))}
      </div>
    );
  };

  return (
    <div className="max-w-2xl w-full flex flex-col justify-center items-center gap-2">
      {renderRow(row1)}
       <div className='w-[90%]'>{renderRow(row2)}</div>
        <div className='flex w-[100%] gap-1'>
          <button 
            className='flex-1 flex items-center justify-center h-12 text:sm  border-2 rounded-md px-auto'
            onClick={() => handleKeyClick("Enter")}
          >
            Enter
          </button>
          <div className='w-[70%]'>{renderRow(row3)}</div>
          <button 
            className='flex-1 flex items-center justify-center h-12 text-md md:text-lg lg:text-lg border-2 rounded-md px-auto'
            onClick={() => handleKeyClick("Backspace")}
          >
            <Delete/>
          </button>
          </div>
    </div>
  );
};
export { Keyboard };
