import { useState } from "react";
import { Link } from "react-router-dom";

import { userDetails } from "../../checkout";
import { useCart } from "../../context/CartContext";
import {
  capitalizeFirstLetter,
  formatCurrency,
  formatWeight,
} from "../../utils/helpers";

function CheckOut() {
  const [user, setUser] = useState(userDetails);
  const { selectedItems } = useCart();
  //eslint-disable-next-line
  const [paymentMethod, setPaymentMethod] = useState("debitCard");

  console.log(selectedItems);
  const { deliveryMode, items } = selectedItems;

  console.log(deliveryMode);
  console.log(items);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  console.log(user);
  const deliveryFee = deliveryMode === "home" ? 1000 : 0;
  const subPrice = items
    .filter((item) => item.id)
    .reduce((total, item) => (total + item.fruits.price) * item.quantity, 0);

  const totalPrice = subPrice + deliveryFee;

  return (
    <section className="pt-[4.8rem] pb-[3.2rem]">
      <div className="container">
        <Link
          to="/cart"
          className="text-4xl uppercase text-[#1E1E1E] font-semibold flex flex-row gap-4 items-center"
        >
          <span className="text-[#CC5500]">&larr;</span>
          Checkout
        </Link>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Billing Details */}
          {/* <div className="lg:col-span-2"> */}
          <div className="">
            <h2 className="text-2xl font-bold my-4">Billing Details</h2>
            <div className="grid grid-rows-[1fr_2fr] gap-6">
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    value={user.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className="p-2 border rounded-lg w-full text-2xl"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={user.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className="p-2 border rounded-lg w-full text-2xl"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <input
                    type="text"
                    name="phoneNumber"
                    value={user.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="p-2 border rounded-lg w-full text-2xl"
                  />
                  <input
                    type="email"
                    name="emailAddress"
                    value={user.emailAddress}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="p-2 border rounded-lg w-full text-2xl"
                  />
                </div>
              </div>
              {/* Payment Method */}
              <div>
                <div>
                  <h2 className="text-xl font-bold mt-8 mb-4">
                    Payment Method
                  </h2>
                  <div className="mb-4">
                    <select
                      name="paymentMethod"
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="p-2 border rounded-lg w-full text-2xl"
                    >
                      {/* <option value="bankTransfer">Bank Transfer</option> */}
                      <option value="debitCard">Debit card</option>
                    </select>
                  </div>
                  {paymentMethod === "debitCard" && (
                    <div className="space-y-4">
                      <div>
                        <label className="block mb-2">Card Number</label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={user.cardNumber}
                          onChange={handleInputChange}
                          placeholder="Card Number"
                          className="p-2 border rounded-lg w-full text-2xl"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block mb-2">Expiry Date</label>
                          <input
                            type="text"
                            name="expiryDate"
                            value={user.expiryDate}
                            onChange={handleInputChange}
                            placeholder="MM/YY"
                            className="p-2 border rounded-lg w-full text-2xl"
                          />
                        </div>
                        <div>
                          <label className="block mb-2">CVV</label>
                          <input
                            type="text"
                            name="cvv"
                            value={user.cvv}
                            onChange={handleInputChange}
                            placeholder="CVV"
                            className="p-2 border rounded-lg w-full text-2xl"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  {/* {paymentMethod === "bankTransfer" && (
                    <div className="space-y-4">
                      <div>
                        <label className="block mb-2">Card Number</label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={user.cardNumber}
                          onChange={handleInputChange}
                          placeholder="Card Number"
                          className="p-2 border rounded-lg w-full"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block mb-2">Expiry Date</label>
                          <input
                            type="text"
                            name="expiryDate"
                            value={user.expiryDate}
                            onChange={handleInputChange}
                            placeholder="MM/YY"
                            className="p-2 border rounded-lg w-full"
                          />
                        </div>
                        
                      </div>
                    </div>
                  )} */}
                </div>
              </div>
            </div>
          </div>

          {/* order detail and order summary section */}
          {/* <div className="details "> */}

          {/* Order Summary */}
          <div className="bg-gray-100 p-4 rounded-lg flex flex-col h-full">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className=" flex flex-col gap-6 h-full">
              <div>
                <ul>
                  {items?.map((item) => (
                    <li key={item.id} className="flex justify-between mb-4">
                      <div className="grid grid-cols-3 lg:grid-cols-3 gap-3">
                        {/* <div className="flex flex-col lg:flex-row gap-3"> */}
                        <img src={item.fruits.image} className="w-1/3" />
                        <div className="flex flex-col gap-4 justify-center lg:items-center">
                          <span className="text-xl">
                            {capitalizeFirstLetter(item.fruits.name)}
                          </span>
                          <span className="text-xl">
                            {formatWeight(item.fruits.weight)}
                          </span>
                        </div>
                        <div className="text-lg lg:text-xl font-bold flex justify-center items-center">
                          {formatCurrency(item.fruits.price * item.quantity)}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">Order Details</h2>
                <ul>
                  {items?.map((item) => (
                    <li key={item.id} className="flex justify-between mb-2">
                      <span className="text-xl">
                        {capitalizeFirstLetter(item.fruits.name)}
                      </span>
                      <span className="text-xl">
                        {" "}
                        {formatCurrency(item.fruits.price)}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="border-t pt-4 mt-4 flex flex-col">
                  <p className="flex justify-between font-semibold">
                    <span className="text-xl">Subtotal</span>
                    <span className="text-xl">{formatCurrency(subPrice)}</span>
                  </p>
                  <p className="flex justify-between font-semibold">
                    <span>Delivery</span>
                    <span>
                      {" "}
                      {deliveryMode === "home"
                        ? formatCurrency(1000)
                        : formatCurrency(0)}
                    </span>
                  </p>
                  <p className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>{formatCurrency(totalPrice)}</span>
                  </p>
                </div>
              </div>
              <button className="w-full py-2 bg-orange-500 text-white font-semibold rounded-lg mt-auto">
                {`Pay ${formatCurrency(totalPrice)}`}
              </button>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}

export default CheckOut;
