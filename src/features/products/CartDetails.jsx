import { Link } from "react-router-dom";
import { HiOutlineTrash } from "react-icons/hi";
import cartItems from "../../cart";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
  const [items, setItems] = useState(cartItems);
  const [deliveryMode, setDeliveryMode] = useState("home");

  const navigate = useNavigate();
  const handleQuantityChange = (id, delta) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };
  //eslint-disable-next-line
  const handleRemove = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="pt-[4.8rem] pb-[3.2rem]">
      <div className="container">
        <Link
          to="/products"
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
              //   <div key={item.id} className="flex items-center border-b py-4">
              <div
                key={item.id}
                // className="grid grid-cols-4 items-center justify-center border-b py-4"
                className="grid grid-cols-[2fr_1fr_1fr_1fr] items-center justify-center border-b py-4"
              >
                {/* <div className="flex flex-row gap-3 items-center justify-center"> */}
                <div className="grid grid-cols-[1fr_2fr] gap-3 items-center justify-center">
                  <img
                    src={item.picture}
                    alt={item.name}
                    // className="w-20 h-20 object-cover"
                    className="w-full object-cover"
                  />
                  <div className="flex-1 ml-4">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p>Seller: {item.seller}</p>
                    <p>{item.weight}</p>
                    <p
                      className={
                        item.available ? "text-green-500" : "text-red-500"
                      }
                    >
                      {item.available ? "Available" : "Out of Stock"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-4">
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
                  <p className="text-lg font-semibold">₦ {item.price}</p>
                </div>
                {/* increase and decrease section */}
                <div className="flex flex-row gap-3 items-center justify-center">
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="cursor-pointer text-[#CC5500] bg-[#F7E6D9] rounded-full flex items-center justify-center px-6 py-3 md:px-5 md:py-2.5 text-2xl md:text-xl"
                  >
                    -
                  </button>
                  {/* <span className="bg-[#CC5500] text-2xl p-5 rounded-full">-</span> */}
                  <span className="text-3xl md:text-2xl font-normal text-[#1E1E1E]">
                    {item.quantity}
                  </span>
                  <button
                    //   onClick={() => handleQuantityChange(item.id, 1)}
                    className="cursor-pointer bg-[#CC5500] text-2xl md:text-xl text-[#F5F5F5] rounded-full flex items-center justify-center px-6 py-3 md:px-5 "
                  >
                    +
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-600 ml-4 text-3xl flex flex-row gap-3"
                  >
                    <HiOutlineTrash size={24} /> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Mode */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Choose delivery mode:</h2>
            <div className="flex items-center mb-4">
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
            <div className="flex items-center mb-4">
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
              <h2 className="text-xl font-bold mb-4">Choose Location:</h2>
              <div className="mb-4">
                <label className="block mb-2">Select state:</label>
                <select className="w-full p-2 border rounded-lg">
                  <option value="lagos">Lagos</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-2">Enter Address:</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg"
                  placeholder="Enter address"
                />
              </div>
            </div>
          </div>
          {/* Cart Summary */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
            <ul>
              {items.map((item) => (
                <li key={item.id} className="flex justify-between mb-2">
                  <span>{item.name}</span>
                  <span>₦ {item.price * item.quantity}</span>
                </li>
              ))}
            </ul>
            <div className="border-t pt-4 mt-4">
              <p className="flex justify-between font-semibold">
                <span>Subtotal</span>
                <span>₦ {totalPrice}</span>
              </p>
              <p className="flex justify-between font-semibold">
                <span>Delivery</span>
                <span>₦ {deliveryMode === "home" ? 1000 : 0}</span>
              </p>
              <p className="flex justify-between font-semibold">
                <span>Total</span>
                <span>
                  ₦ {totalPrice + (deliveryMode === "home" ? 1000 : 0)}
                </span>
              </p>
            </div>
            <button
              onClick={() => navigate(`/checkout`)}
              className="w-full mt-4 py-2 bg-orange-500 text-white font-semibold rounded-lg"
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
