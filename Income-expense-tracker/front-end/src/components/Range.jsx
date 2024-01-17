import React, { useState } from 'react';

const Range = () => {
  const [input1Value, setInput1Value] = useState('');
  const [input2Value, setInput2Value] = useState('');

  const handleInputChange = (event, setInputValue) => {
    setInputValue(event.target.value);
  };
  const handleRangeChange = (event) => {
    setRangeValue(parseInt(event.target.value, 10));
  };

  return (
    <div className='flex flex-col gap-[10px]'>
      <p className="text-black text-[16px] font-bold">Amount Range</p>
        <div className='flex flex-col gap-[20px]'>
            <div className="flex justify-between gap-[5px]">
                <input type="number" value={input1Value} onChange={(e) => handleInputChange(e, setInput1Value)} className="w-[114px] border text-black h-[48px] bg-gray-100 border-solid py-[5px] px-[5px] rounded-[8px]"/>
                <input type="number" value={input2Value} onChange={(e) => handleInputChange(e, setInput2Value)} className="w-[114px] border text-black h-[48px] bg-gray-100 border-solid py-[5px] px-[5px] rounded-[8px]"/>
            </div>
            <input type="range" min={0} max={1000} value={input1Value} onChange={handleRangeChange} className="bg-white w-[100%]"/>
        </div>
    </div>
  );
};

export default Range;
