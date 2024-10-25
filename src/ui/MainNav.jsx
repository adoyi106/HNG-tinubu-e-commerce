import { NavLink } from "react-router-dom";

//eslint-disable-next-line
function MainNav({ toggle }) {
  return (
    <ul className="list-none flex flex-col gap-14 lg:flex-row lg:gap-32">
      <li>
        <NavLink className="main-nav-links" to="/" onClick={() => toggle()}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="main-nav-links"
          to="/products"
          onClick={() => toggle()}
        >
          Products
        </NavLink>
      </li>
    </ul>
  );
}

export default MainNav;
