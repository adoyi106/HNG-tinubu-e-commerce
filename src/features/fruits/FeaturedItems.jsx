// import items from "../../data";

import { useProducts } from "./useProducts";
import FeaturedItem from "./FeaturedItem";
import Spinner from "../../ui/Spinner";

function FeaturedItems() {
  //eslint-disable-next-line
  const { products, isLoading, error } = useProducts();

  //eslint-disable-next-line
  // const { items: fruits } = data;
  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div className="text-2xl">Error loading products</div>;
  }

  // const fruits = data ?? {};

  // const fruits = items.slice(0, 8);

  // const fruits = data ? data.items : [];

  return (
    <div className="grid grid-rows-1 lg:grid-cols-4 gap-9 mb-8">
      {products.map((item) => (
        // {fruits.map((item) => (
        <FeaturedItem
          // className={`featured-item ${index === 0 ? "first-item" : ""}`}
          item={item}
          key={item.id}
        />
      ))}
      {/* {items.map((item) => (
        <FeaturedItem
          // className={`featured-item ${index === 0 ? "first-item" : ""}`}
          item={item}
          key={item.id}
        />
      ))} */}
    </div>
  );
}

export default FeaturedItems;
