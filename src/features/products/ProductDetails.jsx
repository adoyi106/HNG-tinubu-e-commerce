import { Link, useNavigate } from "react-router-dom";
import item from "../../detail";
import StarRating from "../../star";
import CartMath from "../../ui/CartMath";

function ProductDetails() {
  //eslint-disable-next-line
  const { picture, name, amount, description } = item[0];
  const [detail, reason, one, second, third] = description;
  const [high1, para1] = one;
  const [high2, para2] = second;
  const [high3, para3] = third;
  const navigate = useNavigate();
  return (
    <section className="section-product-details pt-[4.8rem] pb-[3.2rem]">
      <div className="container">
        <Link
          to="/products"
          className="text-4xl text-[#1E1E1E] font-semibold flex flex-row gap-4 items-center"
        >
          <span className="text-[#CC5500]">&larr;</span>
          PRODUCT DETAILS
        </Link>
        {/* <div className="flex flex-col lg:flex-row items-center justify-center gap-[4.4rem]"> */}
        <div className="grid grid-rows-[1fr_2fr] lg:grid-cols-[1fr_2fr] lg:grid-rows-none items-center justify-center gap-[4.4rem]">
          <div>
            <img src={picture} className="w-full" alt={`photo of ${name}`} />
          </div>
          <div>
            <span className="inline-block text-2xl py-[0.8rem] px-[1.2rem] rounded-full text-[#CC5500] bg-[#F7E6D9] my-3 lg:mb-5 font-medium ">
              Fruit
            </span>

            <span className="block font-medium text-5xl text-[#3D3D3D] mb-6">
              {name}
            </span>
            <span className="block font-bold text-4xl text-[#1E1E1E]">{`₦ ${amount}`}</span>

            <p className="text-2xl text-[#616161] font-normal my-3">{detail}</p>
            <p className="text-2xl text-[#616161] my-3">{reason} </p>
            {/* section divided */}
            <div className="flex flex-col gap-4 mt-4 mb-5 lg:gap-2">
              <p className="text-2xl md:flex flex-row gap-4">
                &#x2022;{" "}
                <span className="text-[#1E1E1E] font-semibold">{high1}</span>{" "}
                <span className="text-[#616161] text-2xl">{para1}</span>
              </p>
              <p className="text-2xl md:flex flex-row gap-4">
                &#x2022;{" "}
                <span className="text-[#1E1E1E] font-semibold">{high2}</span>
                <span className="text-[#616161]">{para2}</span>
              </p>
              <p className="text-2xl md:flex flex-row gap-4">
                &#x2022;{" "}
                <span className="text-[#1E1E1E] font-semibold">{high3}</span>{" "}
                <span className="text-[#616161]">{para3}</span>
              </p>
            </div>
            <div className="mb-8">
              <StarRating
                maxRating={"5"}
                size={"24"}
                defaultRating={4}
                // onSetRating={setMovieRated}
              />
            </div>
            {/* increase/decrease cart */}
            <CartMath />
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

export default ProductDetails;
