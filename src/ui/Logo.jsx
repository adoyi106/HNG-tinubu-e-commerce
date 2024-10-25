import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img
        className="h-[13.4rem]"
        // height="60"
        // width="60"
        src="/logo-light.png"
        alt="brand logo"
      />
    </Link>
  );
}

export default Logo;
