import { Link } from "react-router-dom";

function MainNav() {
  return (
    <ul className="list-none flex lg:flex-row gap-32">
      <li>
        <Link className="main-nav-links" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="main-nav-links" to="/products">
          Products
        </Link>
      </li>
    </ul>
  );
}

export default MainNav;
