//eslint-disable-next-line
function CategoryItem({ fruit }) {
  //eslint-disable-next-line
  const { name, picture } = fruit;
  return (
    <div className="border border-[#DEDEDE] rounded-md p-8">
      <img
        className="h-[12.2rem] mb-4"
        src={picture}
        alt={`Photo of ${name}`}
      />
      <p className="text-center text-3xl font-medium text-[#3D3D3D]">{name}</p>
    </div>
  );
}

export default CategoryItem;
