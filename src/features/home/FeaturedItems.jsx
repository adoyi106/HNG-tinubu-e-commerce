import items from "../../data";
import FeaturedItem from "./FeaturedItem";

function FeaturedItems() {
  return (
    <div className="grid grid-rows-1 lg:grid-cols-4 gap-9 mb-8">
      {items.map((item, index) => (
        <FeaturedItem
          className={`featured-item ${index === 0 ? "first-item" : ""}`}
          item={item}
          key={item.id}
        />
      ))}
    </div>
  );
}

export default FeaturedItems;
