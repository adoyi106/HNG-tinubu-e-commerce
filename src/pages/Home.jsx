import Hero from "../features/fruits/Hero";
import Categories from "../features/fruits/Categories";
import FeaturedFruits from "../features/fruits/FeaturedFruits";
import Cta from "../ui/Cta";

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedFruits />
      <Cta />
    </>
  );
}

export default Home;
