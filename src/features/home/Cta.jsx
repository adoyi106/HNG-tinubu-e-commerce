import { Link } from "react-router-dom";

function Cta() {
  return (
    <section className="section-cta pt-[9.6rem] pb-[12rem]">
      <div className="container">
        <div className="cta grid-rows-2 lg:grid-cols-2fr-1fr lg:grid-rows-none">
          <div className="cta-box">
            <h2 className="text-5xl lg:text-7xl font-semibold text-[#1E1E1E] tracking-[-0.5px] mb-[4.8rem] mlg:b-[9.6rem]">
              Free delivery !!
            </h2>
            <p className="cta-text text-3xl mb-[3.2rem] font-normal text-[#3D3D3D]">
              Order a basket of fruits and have us deliver them to you anywhere
              in Lagos.
            </p>
            <Link
              to=""
              className="border-none inline-block uppercase font-medium text-3xl no-underline text-[#FFFFFF] text-center py-[1.6rem] px-[3.2rem] rounded-md bg-[#d9480f] hover:bg-[#e8590c]  w-full lg:w-1/2 cursor-pointer transition-all"
            >
              ORDER NOW
            </Link>
          </div>
          <div
            role="img"
            aria-label="A picture of fruit basket"
            className="cta-img bg-cta"
          ></div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
