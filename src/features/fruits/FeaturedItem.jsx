import { useNavigate } from "react-router-dom";
import StarRating from "../../star";
import { HiOutlineHeart } from "react-icons/hi";

import { capitalizeFirstLetter, formatCurrency } from "../../utils/helpers";
import CartMath from "../../ui/CartMath";
import { useUpdateCart } from "../cart/useUpdateCart";
import { useCart } from "../cart/useCart";
import { useEffect, useState } from "react";

//eslint-disable-next-line
function FeaturedItem({ item }) {
  const { updateCart } = useUpdateCart();
  const { cart } = useCart();
  const [inCart, setInCart] = useState(false);

  //eslint-disable-next-line
  const {
    //eslint-disable-next-line
    id: productId,

    //eslint-disable-next-line
    name,

    //eslint-disable-next-line
    image,

    //eslint-disable-next-line
    description,

    //eslint-disable-next-line
    price,

    //eslint-disable-next-line
    star,

    //eslint-disable-next-line
    stockQuantity,
  } = item;

  //eslint-disable-next-line
  const describe = description.split(/[.,;!?]/).map((de) => de.trim())[0];

  //To check if an item is in the cart already
  //eslint-disable-next-line
  useEffect(() => {
    const isInCart = cart?.some(
      (cartItem) => cartItem.id === productId || cartItem.fruitId === productId
    );
    setInCart(isInCart);
  }, [cart, productId]);

  function handleAddToCart(quantity) {
    const cartItem = {
      fruitId: productId,
      quantity,
      dateAdded: new Date().toISOString(),
    };
    updateCart({ obj: cartItem });
    setInCart(true);
  }
  //eslint-disable-next-line
  // const currentPrice = current_price[0]?.NGN?.[0];

  // const {
  //   //eslint-disable-next-line
  //   name,
  //   // photos: [url],
  //   //eslint-disable-next-line
  //   photos,
  //   //eslint-disable-next-line
  //   current_price,
  //   //eslint-disable-next-line
  //   description,
  // } = item;
  // console.log(description);
  // console.log(photos);
  // console.log(current_price);
  const navigate = useNavigate();

  // return <div>Yap</div>;
  return (
    <div
      className={`flex flex-col gap-3 px-4 border border-[#DEDEDE] rounded-lg relative `}
    >
      <HiOutlineHeart className="absolute text-2xl top-5 right-4 text-[#1E1E1E]" />

      <img
        className={`mb-6 mt-4 h-full `}
        src={image}
        alt={`Picture of ${name}`}
      />
      {/* </div> */}
      <div className="flex flex-col gap-6 ">
        <div className="flex flex-row justify-between items-center">
          <span className="text-[#1E1E1E] font-semibold text-3xl">
            {capitalizeFirstLetter(name)}
          </span>

          <span className="text-[#1E1E1E] font-semibold text-3xl">
            {formatCurrency(price)}
          </span>
        </div>
        <div>
          <p className="text-[#3D3D3D] font-normal text-2xl w-4/5">
            {
              //eslint-disable-next-line
              // highlight
              describe
            }
          </p>
        </div>
        <div>
          <StarRating
            maxRating={"5"}
            size={"24"}
            defaultRating={star}
            // onSetRating={setMovieRated}
          />
        </div>
        {/* <div className="flex items-center justify-between">
          <Link
            to="/cart"
            className="border-none inline-block text-2xl md:text-xl text-[#FFFF] bg-[#CC5500] hover:bg-[#e8590c] py-[1.4rem] px-[3.2rem] lg:py-[1.2rem] lg:px-[1.8rem] rounded-lg"
          >
            Add to cart
          </Link>
          <div className="flex flex-row items-center justify-center gap-4">
            <span className="cursor-pointer text-[#CC5500] bg-[#F7E6D9] rounded-full flex items-center justify-center px-6 py-3 md:px-5 md:py-2.5 text-2xl md:text-xl">
              -
            </span>
            {/* <span className="bg-[#CC5500] text-2xl p-5 rounded-full">-</span> */}
        {/* <span className="text-3xl md:text-2xl font-normal text-[#1E1E1E]">
              1
            </span>
            <span className="cursor-pointer bg-[#CC5500] text-2xl  md:text-xl text-[#F5F5F5] rounded-full flex items-center justify-center px-6 py-3 md:px-5 md:py-2.5">
              +
            </span>
          </div>
        </div> */}
      </div>
      <CartMath
        stock={stockQuantity}
        onAddToCart={handleAddToCart}
        inCart={inCart}
      />
      {/* <div className="pt-3"> */}
      <button
        onClick={() => navigate(`/products/${productId}`)}
        // to="/cartDetails"
        className="text-[#CC5500] text-2xl bg-[#FAEEE6] py-[1.4rem] px-[3.2rem] lg:py-3 lg:px-8 mb-4 text-center"
      >
        View details
      </button>
      {/* </div> */}
    </div>
  );
}

export default FeaturedItem;
