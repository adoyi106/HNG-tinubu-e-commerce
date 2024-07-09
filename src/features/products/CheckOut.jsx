import { Link } from "react-router-dom";

function CheckOut() {
  return (
    <section className="pt-[4.8rem] pb-[3.2rem]">
      <div className="container">
        <Link
          to="/products"
          className="text-4xl uppercase text-[#1E1E1E] font-semibold flex flex-row gap-4 items-center"
        >
          <span className="text-[#CC5500]">&larr;</span>
          Checkout
        </Link>
      </div>
    </section>
  );
}

export default CheckOut;
