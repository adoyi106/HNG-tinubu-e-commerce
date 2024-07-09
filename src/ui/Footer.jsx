import FooterLogo from "./FooterLogo";
import FooterNav from "./FooterNav";
import LegalInfo from "./LegalInfo";
import Reserve from "./Reserve";
import SignUp from "./SignUp";

function Footer() {
  return (
    <footer className="footer">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-none gap-10">
        <FooterLogo />
        <FooterNav />
        <SignUp />
        <LegalInfo />
        <Reserve />
      </div>
    </footer>
  );
}

export default Footer;
