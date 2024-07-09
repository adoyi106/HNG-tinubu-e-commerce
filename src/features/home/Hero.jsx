import HeroDescription from "../../ui/HeroDescription";
import HeroImg from "../../ui/HeroImg";

function Hero() {
  return (
    <section className="pt-[1.8rem] pb-[9.6rem] bg-gradient-to-r from-[#EFCAB0] to-[#CC5500]">
      <div className="hero">
        <HeroDescription />
        <HeroImg />
      </div>
    </section>
  );
}

export default Hero;
