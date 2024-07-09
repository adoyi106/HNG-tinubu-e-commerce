import { Link } from "react-router-dom";
import FeaturedItems from "./FeaturedItems";

function FeaturedFruits() {
  return (
    <section className="featured-section pt-[4.8rem] pb-[3.2rem]">
      <div className="container">
        <div className="mb-10">
          <span className="text-[#1E1E1E] font-medium text-2xl lg:text-3xl tracking-wider">
            Featured Fruits &gt;
          </span>
          <span className="text-[#3D3D3D] text-2xl tracking-wider font-normal">
            All fruits
          </span>
        </div>
        <FeaturedItems />
        <div className="flex items-center justify-center">
          <Link
            className="text-3xl font-medium text-[#CC5500] py-[1.2rem] px-[3.2rem] border-2 border-[#CC5500] hover:text-[#e8590c] "
            to="/products"
          >
            View more
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedFruits;
