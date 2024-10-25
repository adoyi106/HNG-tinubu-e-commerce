import { Link } from "react-router-dom";

function FooterLogo() {
  return (
    <Link to="/" className="flex flex-row gap-4">
      {/* <img className="h-[2.4rem]" src="/symbol.png" alt="logo symbol" /> */}
      <img
        className="h-[6.4rem]"
        // height="60"
        // width="60"
        src="/logo-ww.png"
        alt="brand logo"
      />
    </Link>
  );
}

export default FooterLogo;
