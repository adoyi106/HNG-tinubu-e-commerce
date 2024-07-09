import fruits from "../../categories";
import CategoryItem from "./CategoryItem";

function Category() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
      {fruits.map((fruit) => (
        <CategoryItem fruit={fruit} key={fruit.id} />
      ))}
    </div>
  );
}

export default Category;
