import Category from "./Category";

function Categories() {
  return (
    <section className="categories-section pt-[8.8rem] pb-[3.2rem]">
      <div className="container">
        <div className="mb-10">
          <span className="text-[#1E1E1E] font-medium text-2xl lg:text-3xl tracking-wider">
            Browse by category &gt;
          </span>
          <span className="text-[#3D3D3D] text-2xl tracking-wider font-normal">
            All categories
          </span>
        </div>
        <Category />
      </div>
    </section>
  );
}

export default Categories;
