import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../cart/useCart";
import { useUpdateCart } from "../cart/useUpdateCart";
import { useProduct } from "./useProduct";
// import item from "../../detail";
import StarRating from "../../star";
import CartMath from "../../ui/CartMath";
import Spinner from "../../ui/Spinner";
import { capitalizeFirstLetter, formatCurrency } from "../../utils/helpers";

function FruitDetails() {
  const {
    product,
    // product,
    isLoading,
    error,
  } = useProduct();
  const { cart } = useCart();
  const navigate = useNavigate();
  //eslint-disable-next-line
  const { updateCart } = useUpdateCart();
  const [inCart, setInCart] = useState(false);

  // const {
  //   //eslint-disable-next-line
  //   id: productId,
  //   name,
  //   image,
  //   price,
  //   description,
  //   star,
  //   stockQuantity,
  // } = product;
  const productId = product?.id;
  const name = product?.name;
  const image = product?.image;
  const price = product?.price;
  const description = product?.description;
  const star = product?.star;
  const stockQuantity = product?.stockQuantity;

  //To

  function handleAddToCart(quantity) {
    const cartItem = {
      fruitId: productId,
      quantity,
      dateAdded: new Date().toISOString(),
    };
    updateCart({ obj: cartItem });
    setInCart(true);
  }

  // check if an item is in the cart already
  //eslint-disable-next-line
  useEffect(() => {
    const isInCart = cart?.some(
      (cartItem) => cartItem.id === productId || cartItem.fruitId === productId
    );
    setInCart(isInCart);
  }, [cart, productId]);

  if (isLoading) return <Spinner />;
  if (error) return <p>error happened</p>;
  return (
    <section className="section-product-details pt-[4.8rem] pb-[3.2rem]">
      <div className="container">
        <Link
          // to="/products"
          onClick={() => navigate(-1)}
          className="text-4xl text-[#1E1E1E] font-semibold flex flex-row gap-4 items-center"
        >
          <span className="text-[#CC5500]">&larr;</span>
          PRODUCT DETAILS
        </Link>
        {/* <div className="flex flex-col lg:flex-row items-center justify-center gap-[4.4rem]"> */}
        <div className="grid grid-rows-[1fr_2fr] lg:grid-cols-[1fr_2fr] lg:mt-6 lg:grid-rows-none items-center justify-center gap-[4.4rem]">
          <div>
            <img src={image} className="w-full" alt={`photo of ${name}`} />
          </div>
          <div>
            <span className="inline-block text-2xl py-[0.8rem] px-[1.2rem] rounded-full text-[#CC5500] bg-[#F7E6D9] my-3 lg:mb-5 font-medium ">
              Fruit
            </span>

            <span className="block font-medium text-5xl text-[#3D3D3D] mb-6">
              {capitalizeFirstLetter(name || "")}
            </span>
            <span className="block font-bold text-4xl text-[#1E1E1E]">{`${formatCurrency(
              price || 0
            )}`}</span>

            <p className="text-2xl text-[#616161] font-normal my-3">
              {description}
            </p>

            <div className="mb-8">
              <StarRating
                maxRating={"5"}
                size="24"
                defaultRating={star}
                // onSetRating={setMovieRated}
              />
            </div>
            {/* increase/decrease cart */}
            <CartMath
              stock={stockQuantity}
              onAddToCart={handleAddToCart}
              inCart={inCart}
            />
            <button
              onClick={() => navigate(`/cart`)}
              // to="/cartDetails"
              className="text-[#CC5500] text-2xl bg-[#FAEEE6] py-[1.4rem] px-[3.2rem] lg:py-5 lg:px-8 w-full mt-8 text-center"
            >
              View cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FruitDetails;
