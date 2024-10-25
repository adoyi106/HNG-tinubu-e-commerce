import { useState } from "react";
import { Link } from "react-router-dom";
import cartItems from "../../cart";
import { userDetails } from "../../checkout";

function CheckOut() {
  const [user, setUser] = useState(userDetails);
  //eslint-disable-next-line
  const [paymentMethod, setPaymentMethod] = useState("debitCard");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
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
                    className="p-2 border rounded-lg w-full"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={user.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className="p-2 border rounded-lg w-full"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <input
                    type="text"
                    name="phoneNumber"
                    value={user.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="p-2 border rounded-lg w-full"
                  />
                  <input
                    type="email"
                    name="emailAddress"
                    value={user.emailAddress}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="p-2 border rounded-lg w-full"
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
                      className="p-2 border rounded-lg w-full"
                    >
                      <option value="ussd">USSD</option>
                      <option value="bankTransfer">Bank Transfer</option>
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
                        <div>
                          <label className="block mb-2">CVV</label>
                          <input
                            type="text"
                            name="cvv"
                            value={user.cvv}
                            onChange={handleInputChange}
                            placeholder="CVV"
                            className="p-2 border rounded-lg w-full"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* order detail and order summary section */}
          {/* <div className="details "> */}

          {/* Order Summary */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className=" flex flex-col gap-6">
              <div>
                <ul>
                  {cartItems.map((item) => (
                    <li key={item.id} className="flex justify-between mb-4">
                      <div className="flex flex-col lg:flex-row gap-3">
                        <img src={item.picture} className="w-1/3" />
                        <div className="flex flex-col gap-4 justify-center lg:items-center">
                          <span className="text-xl">{item.name}</span>
                          <span className="text-xl">{item.weight}</span>
                        </div>
                      </div>
                      <div className="text-lg lg:text-xl font-bold">
                        ₦ {item.price}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">Order Details</h2>
                <ul>
                  {cartItems.map((item) => (
                    <li key={item.id} className="flex justify-between mb-2">
                      <span className="text-xl">{item.name}</span>
                      <span className="text-xl">₦ {item.price}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t pt-4 mt-4">
                  <p className="flex justify-between font-semibold">
                    <span className="text-xl">Subtotal</span>
                    <span className="text-xl">₦ {totalPrice}</span>
                  </p>
                  <p className="flex justify-between font-semibold">
                    <span>Delivery</span>
                    <span>₦ {1000}</span>
                  </p>
                  <p className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>₦ {totalPrice + 1000}</span>
                  </p>
                </div>
                <button className="w-full mt-4 py-2 bg-orange-500 text-white font-semibold rounded-lg">
                  Pay (₦ {totalPrice + 1000})
                </button>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}

export default CheckOut;
