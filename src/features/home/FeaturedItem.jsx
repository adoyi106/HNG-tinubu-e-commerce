// import StarRating from "../../star";
import { Link, useNavigate } from "react-router-dom";
import StarRating from "../../star";
import { HiOutlineHeart } from "react-icons/hi";

//eslint-disable-next-line
function FeaturedItem({ item, className }) {
  //eslint-disable-next-line
  const { name, picture, amount, highlight } = item;
  const navigate = useNavigate();
  return (
    <div
      className={`flex flex-col gap-3 px-4 border border-[#DEDEDE] rounded-lg relative ${className}`}
    >
      <HiOutlineHeart className="absolute text-2xl top-5 right-4 text-[#1E1E1E]" />
      {/* <div> */}
      <img
        className={`mb-6 mt-4 h-full `}
        src={picture}
        alt={`Picture of ${name}`}
      />
      {/* </div> */}
      <div className="flex flex-col gap-6 ">
        <div className="flex flex-row justify-between items-center">
          <span className="text-[#1E1E1E] font-semibold text-3xl">{name}</span>
          <span className="text-[#1E1E1E] font-semibold text-3xl">{`₦  ${amount}`}</span>
        </div>
        <div>
          <p className="text-[#3D3D3D] font-normal text-2xl w-4/5">
            {highlight}
          </p>
        </div>
        <div>
          <StarRating
            maxRating={"5"}
            size={"24"}
            defaultRating={4}
            // onSetRating={setMovieRated}
          />
        </div>
        <div className="flex items-center justify-between">
          <Link
            to="/cart"
            className="border-none inline-block text-2xlmd:text-xl text-[#FFFF] bg-[#CC5500] hover:bg-[#e8590c] py-[1.4rem] px-[3.2rem] lg:py-[1.2rem] lg:px-[1.8rem] rounded-lg"
          >
            Add to cart
          </Link>
          <div className="flex flex-row items-center justify-center gap-4">
            <span className="text-[#CC5500] bg-[#F7E6D9] rounded-full flex items-center justify-center px-6 py-3 md:px-5 md:py-2.5 text-2xl md:text-xl">
              -
            </span>
            {/* <span className="bg-[#CC5500] text-2xl p-5 rounded-full">-</span> */}
            <span className="text-3xl md:text-2xl font-normal text-[#1E1E1E]">
              1
            </span>
            <span className="bg-[#CC5500] text-2xl md:text-xl text-[#F5F5F5] rounded-full flex items-center justify-center px-6 py-3 md:px-5 md:py-2.5">
              +
            </span>
          </div>
        </div>
        {/* <div className="pt-3"> */}
        <button
          onClick={() => navigate(`/details`)}
          // to="/cartDetails"
          className="text-[#CC5500] text-2xl bg-[#FAEEE6] py-[1.4rem] px-[3.2rem] lg:py-3 lg:px-8 mb-4 text-center"
        >
          View details
        </button>
        {/* </div> */}
      </div>
    </div>
  );
}

export default FeaturedItem;
