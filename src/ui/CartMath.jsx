import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

//eslint-disable-next-line
function CartMath({ stock, onAddToCart, inCart }) {
  const [cartValue, setCartValue] = useState(1);
  const navigate = useNavigate();
  // const currentValue = 1;

  function reduceValue() {
    setCartValue((prevValue) => (prevValue > 1 ? prevValue - 1 : 1));
  }
  function increaseValue() {
    setCartValue((prevValue) => (prevValue < stock ? prevValue + 1 : stock));
  }
  return (
    <div className="flex flex-row items-center justify-center gap-4">
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
      {inCart ? (
        <button
          onClick={() => navigate("/cart")}
          // onClick={() => onAddToCart(cartValue)}
          // to="/cart
          className="border-none inline-block text-2xl md:text-xl text-[#FFFF] bg-[#CC5500] hover:bg-[#e8590c] py-[1.4rem] px-[3.2rem] lg:py-[1.2rem] lg:px-[1.8rem] rounded-lg"
        >
          Go to cart
        </button>
      ) : (
        <button
          onClick={() => onAddToCart(cartValue)}
          // to="/cart
          className="border-none inline-block text-2xl md:text-xl text-[#FFFF] bg-[#CC5500] hover:bg-[#e8590c] py-[1.4rem] px-[3.2rem] lg:py-[1.2rem] lg:px-[1.8rem] rounded-lg"
        >
          Add to cart
        </button>
      )}
      {/* <button
        onClick={() => onAddToCart(cartValue)}
        // to="/cart
        className="border-none inline-block text-2xl md:text-xl text-[#FFFF] bg-[#CC5500] hover:bg-[#e8590c] py-[1.4rem] px-[3.2rem] lg:py-[1.2rem] lg:px-[1.8rem] rounded-lg"
      >
        Add to cart
      </button> */}
    </div>
  );
}

export default CartMath;
