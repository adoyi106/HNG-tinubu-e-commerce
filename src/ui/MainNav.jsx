import { Link } from "react-router-dom";

//eslint-disable-next-line
function MainNav({ toggle }) {
  return (
    <ul className="list-none flex flex-col gap-14 lg:flex-row lg:gap-32">
      <li>
        <Link className="main-nav-links" to="/" onClick={() => toggle()}>
          Home
        </Link>
      </li>
      <li>
        <Link
          className="main-nav-links"
          to="/products"
          onClick={() => toggle()}
        >
          Products
        </Link>
      </li>
    </ul>
  );
}

export default MainNav;
