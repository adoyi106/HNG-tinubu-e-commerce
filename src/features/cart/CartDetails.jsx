import { Link } from "react-router-dom";
import { HiOutlineTrash } from "react-icons/hi";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  capitalizeFirstLetter,
  formatCurrency,
  formatWeight,
} from "../../utils/helpers";
import { useCart } from "./useCart";
// import { useUpdateCart } from "./useUpdateCart";
import { useDeleteCartItem } from "./useDeleteCartItem";
import Spinner from "../../ui/Spinner";
// import { useUpdateCart } from "./useUpdateCart";
//
// import { Link } from "react-router-dom";

// function CartDetails() {
//   return (
//     <section className="pt-[4.8rem] pb-[3.2rem]">
//       <div className="container">
//         <Link
//           to="/products"
//           className="text-4xl uppercase text-[#1E1E1E] font-semibold flex flex-row gap-4 items-center"
//         >
//           <span className="text-[#CC5500]">&larr;</span>
//           My Cart
//         </Link>
//       </div>
//     </section>
//   );
// }

// export default CartDetails;

function Cart() {
  const navigate = useNavigate();
  const { cart, isLoading } = useCart();
  const { deleteCartItem } = useDeleteCartItem();
  // const { updateCart } = useUpdateCart();
  const [items, setItems] = useState(cart || []);
  const [deliveryMode, setDeliveryMode] = useState("home");
  useEffect(() => {
    setItems(cart || []);
  }, [cart]);

  if (isLoading) return <Spinner />;

  if (cart.length === 0)
    return (
      <div className="h-[100vh] flex justify-center items-center">
        <p className="text-2xl ">Your cart is empty, start by adding fruits!</p>
      </div>
    );

  //eslint-disable-next-line
  const handleRemove = (id) => {
    const updatedItems = cart.filter((item) => item.id !== id);
    // const updatedItems = items.filter((item) => item.id !== id);
    console.log(updatedItems);
    deleteCartItem(id);

    // setItems(updatedItems);
  };

  function handleReduceQuantity(id) {
    const updatedItem = items.map((item) => {
      if (item.id === id) {
        console.log(item);
        return { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 };
      }
      return item;
    });
    setItems(updatedItem);
  }
  function handleIncreaseQuantity(id) {
    const updatedItem = items.map((item) => {
      if (item.id === id) {
        console.log(item);
        return {
          ...item,
          quantity:
            item.quantity < item.fruits.stockQuantity
              ? item.quantity + 1
              : item.fruits.stockQuantity,
        };
      }
      return item;
    });
    setItems(updatedItem);
  }
  // const selectedItem = items.filter((item) => item.id === id);
  // console.log(selectedItem);

  // selectedItem.quantity =
  //   selectedItem.quantity > 1 ? selectedItem.quantity - 1 : 1;

  // console.log(selectedItem.quantity);
  // setItems();

  //handle quantity Increase
  // function handleQuantityChange(id) {
  // const selectedItem = cart.filter((item) => item.id === id);
  // const curValue = selectedItem[0].quantity;
  // curValue > 1 ? curValue - 1 : 1;
  // console.log(curValue);
  //   const updatedCart = cart.map((item) => {
  //     if (item.id === id) {
  //       return {
  //         ...item,
  //         quantity: item.quantity > 1 ? item.quantity - 1 : 1,
  //       };
  //     }
  //     console.log(item);
  //     return item;
  //   });
  //   updateCart(updatedCart);
  // }

  const deliveryFee = deliveryMode === "home" ? 1000 : 0;

  const subTotal = cart.reduce(
    (total, item) => total + item.fruits.price * item.quantity,
    0
  );

  const totalPrice = subTotal + deliveryFee;

  return (
    <section className="pt-[4.8rem] pb-[3.2rem]">
      <div className="container">
        <Link
          // to="/details"
          onClick={() => navigate(-1)}
          className="text-4xl uppercase text-[#1E1E1E] font-semibold flex flex-row gap-4 items-center"
        >
          <span className="text-[#CC5500]">&larr;</span>
          My Cart
        </Link>
        {/* <div className="grid grid-cols-1 lg:grid-cols-4 gap-8"> */}
        <div>
          {/* Cart Items */}
          {/* <div className="lg:col-span-2"> */}
          <div className="">
            {items.map((item) => (
              // {cart.map((item) => (
              //   <div key={item.id} className="flex items-center border-b py-4">
              <div
                key={item.id}
                // grid-rows-[2fr_1fr_1fr_1fr] lg:grid-rows-none
                // className="grid grid-cols-4 items-center justify-center border-b py-4"
                className="grid  gap-y-8 md:gap-y-0   lg:grid-cols-[2fr_1fr_1fr_1fr]  items-center justify-center border-b py-4"
              >
                {/* <div className="flex flex-row gap-3 items-center justify-center"> */}
                <div className="grid grid-cols-[1fr_2fr]  gap-3  items-center justify-center">
                  <img
                    src={item.fruits.image}
                    alt={item.fruits.name}
                    // className="w-20 h-20 object-cover"
                    className="w-full object-cover"
                  />
                  <div className="flex-1 ml-4 flex flex-col gap-4">
                    <h2 className="text-lg lg:text-2xl font-semibold">
                      {capitalizeFirstLetter(item.fruits.name)}
                    </h2>
                    <p className="lg:text-2xl">
                      {" "}
                      Seller: {item.fruits.sellerName}
                    </p>
                    <p className="lg:text-2xl">
                      {formatWeight(item.fruits.weight)}
                    </p>
                    <p
                      className={`${
                        item.fruits.available
                          ? "text-green-500"
                          : "text-red-500"
                      } text-xl`}
                    >
                      {item.fruits.available ? "Available" : "Out of Stock"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center col-start-2 justify-center space-x-4">
                  {/* <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="cursor-pointer text-[#CC5500] bg-[#F7E6D9] rounded-full flex items-center justify-center px-6 py-3 md:px-5 md:py-2.5 text-2xl md:text-xl"
                  >
                    -
                  </button>
                  {/* <span className="bg-[#CC5500] text-2xl p-5 rounded-full">-</span> */}
                  {/* <span className="text-3xl md:text-2xl font-normal text-[#1E1E1E]">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="cursor-pointer bg-[#CC5500] text-2xl md:text-xl text-[#F5F5F5] rounded-full flex items-center justify-center px-6 py-3 md:px-5 md:py-2.5"
                  >
                    +
                  </button> */}
                  <p className="text-lg font-semibold lg:text-3xl">
                    {" "}
                    {formatCurrency(item.fruits.price)}
                  </p>
                </div>
                {/* increase and decrease section */}
                <div className="flex flex-row gap-3 items-center justify-center">
                  <button
                    onClick={() => handleReduceQuantity(item.id)}
                    className="cursor-pointer text-[#CC5500] bg-[#F7E6D9] rounded-full flex items-center justify-center px-6 pt-3 pb-3 md:px-5 md:pt-[0.525rem] md:pb-[0.725rem] text-2xl md:text-xl"
                  >
                    -
                  </button>
                  {/* <span className="bg-[#CC5500] text-2xl p-5 rounded-full">-</span> */}
                  <span className="text-3xl md:text-2xl font-normal text-[#1E1E1E]">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => handleIncreaseQuantity(item.id)}
                    className="cursor-pointer bg-[#CC5500] text-2xl md:text-xl text-[#F5F5F5] rounded-full flex items-center justify-center px-6 pt-3 pb-3 md:px-5 md:pt-[0.525rem] md:pb-[0.725rem] "
                  >
                    +
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-600 ml-4 text-2xl lg:text-3xl flex flex-row gap-3"
                  >
                    <HiOutlineTrash size={24} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Mode */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Choose delivery mode:
            </h2>
            <div className="flex items-center mb-4  md:text-2xl">
              <input
                type="radio"
                id="store-pickup"
                name="deliveryMode"
                value="store"
                checked={deliveryMode === "store"}
                onChange={() => setDeliveryMode("store")}
                className="mr-2"
              />
              <label htmlFor="store-pickup">
                Store pickup (in 20 min) - Free
              </label>
            </div>
            <div className="flex items-center mb-4 md:text-2xl">
              <input
                type="radio"
                id="home-delivery"
                name="deliveryMode"
                value="home"
                checked={deliveryMode === "home"}
                onChange={() => setDeliveryMode("home")}
                className="mr-2"
              />
              <label htmlFor="home-delivery">
                Home Delivery (2 - 4 days) - ₦1,000
              </label>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4 md:text-2xl">
                Choose Location:
              </h2>
              <div className="mb-4">
                <label className="block mb-2 text-2xl">Select state:</label>
                <select className="w-full p-2 border rounded-lg md:text-2xl">
                  <option value="lagos">Lagos</option>
                  <option value="abuja">Abuja</option>
                  <option value="port harcourt">Port Harcourt</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-2xl">Enter Address:</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg md:text-2xl"
                  placeholder="Enter address"
                />
              </div>
            </div>
          </div>
          {/* Cart Summary */}
          <div className="bg-gray-100 p-4 rounded-lg flex flex-col">
            <h2 className="text-xl font-bold mb-4 md:text-2xl">Cart Summary</h2>
            <ul>
              {/* {cart.map((item) => ( */}
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between mb-2 md:text-xl"
                >
                  <span>{capitalizeFirstLetter(item.fruits.name)}</span>
                  <span>
                    {formatCurrency(item.fruits.price * item.quantity)}
                  </span>
                </li>
              ))}
            </ul>
            <div className="border-t pt-4 mt-4 md:text-xl">
              <p className="flex justify-between font-semibold">
                <span>Subtotal</span>
                <span>{formatCurrency(subTotal)}</span>
              </p>
              <p className="flex justify-between font-semibold">
                <span>Delivery</span>
                <span>
                  {formatCurrency(deliveryMode === "home" ? 1000 : 0)}
                </span>
              </p>
              <p className="flex justify-between font-semibold">
                <span>Total</span>
                <span>{formatCurrency(totalPrice)}</span>
              </p>
            </div>
            <button
              onClick={() => navigate(`/checkout`)}
              className="w-full  py-2 bg-orange-500 text-white font-semibold rounded-lg md:text-2xl mt-auto"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
