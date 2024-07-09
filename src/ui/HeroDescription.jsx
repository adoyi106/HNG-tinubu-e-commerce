import { Link } from "react-router-dom";

function HeroDescription() {
  return (
    <div>
      <span className="inline-block text-2xl py-[0.8rem] px-[1.2rem] rounded-full text-[#CC5500] bg-[#F7E6D9] mb-3 lg:mb-5 font-medium">
        Products
      </span>
      <h1 className="font-bold text-7xl text-[#000000] leading-[1.2] lg:leading-[1.5] mb-3">
        Unlock Your Potential: Find the Fruits to Level Up Your Health.
      </h1>
      <p className="text-3xl font-normal leading-[1.5] mb-6">
        Targeted wellness starts here. Discover exciting fruits to help keep a
        healthy living and address your needs.
      </p>
      <Link className="link-button" to="/products">
        Shop now
      </Link>
    </div>
  );
}

export default HeroDescription;
