import { Link } from "react-router-dom";

function CartMath() {
  return (
    <div className="flex flex-row items-center justify-center gap-4">
      <div className="flex flex-row items-center justify-center gap-4">
        <span className="cursor-pointer text-[#CC5500] bg-[#F7E6D9] rounded-full flex items-center justify-center px-6 py-3 md:px-5 md:py-2.5 text-2xl md:text-xl">
          -
        </span>
        {/* <span className="bg-[#CC5500] text-2xl p-5 rounded-full">-</span> */}
        <span className="text-3xl md:text-2xl font-normal text-[#1E1E1E]">
          1
        </span>
        <span className="cursor-pointer bg-[#CC5500] text-2xl md:text-xl text-[#F5F5F5] rounded-full flex items-center justify-center px-6 py-3 md:px-5 md:py-2.5">
          +
        </span>
      </div>
      <Link
        to="/cart"
        className="border-none inline-block text-2xl md:text-xl text-[#FFFF] bg-[#CC5500] hover:bg-[#e8590c] py-[1.4rem] px-[3.2rem] lg:py-[1.2rem] lg:px-[1.8rem] rounded-lg"
      >
        Add to cart
      </Link>
    </div>
  );
}

export default CartMath;
