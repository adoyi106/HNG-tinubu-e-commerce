// import { HiOutlineShoppingCart } from "react-icons/hi";
import Cart from "./Cart";

function UserActivity() {
  return (
    <div className="flex justify-between gap-5">
      <Cart />
      <button className="text-3xl font-medium text-[#FFFF] p-[1.2rem] rounded-lg bg-[#CC5500]">
        Sign up
      </button>
    </div>
  );
}

export default UserActivity;
