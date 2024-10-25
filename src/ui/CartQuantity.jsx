import { useState } from "react";
// import { Link } from "react-router-dom";

//eslint-disable-next-line
function CartMath({ stock }) {
  const [cartValue, setCartValue] = useState(1);
  // const currentValue = 1;

  function reduceValue() {
    setCartValue((prevValue) => (prevValue > 1 ? prevValue - 1 : 1));
  }
  function increaseValue() {
    setCartValue((prevValue) => (prevValue < stock ? prevValue + 1 : stock));
  }
  return (
    // <div className="flex flex-row items-center justify-center gap-4">
    <div className="flex flex-row items-center justify-center gap-4">
      <span
        onClick={reduceValue}
        className="cursor-pointer text-[#CC5500] bg-[#F7E6D9] rounded-full flex items-center justify-center px-6 pt-3 pb-3 md:px-5 md:pt-[0.525rem] md:pb-[0.725rem] text-2xl md:text-xl"
      >
        -
      </span>
      {/* <span className="bg-[#CC5500] text-2xl p-5 rounded-full">-</span> */}
      <span className="text-3xl md:text-2xl font-normal text-[#1E1E1E]">
        {cartValue}
      </span>
      <span
        onClick={increaseValue}
        className="cursor-pointer bg-[#CC5500] text-2xl md:text-xl text-[#F5F5F5] rounded-full flex items-center justify-center px-6 pt-3 pb-3 md:px-5 md:pt-[0.525rem] md:pb-[0.725rem]"
        // className="cursor-pointer bg-[#CC5500] text-2xl md:text-xl text-[#F5F5F5] rounded-full flex items-center justify-center px-6 py-3 md:px-5 md:py-2.5"
      >
        +
      </span>
    </div>
  );
}

export default CartMath;
