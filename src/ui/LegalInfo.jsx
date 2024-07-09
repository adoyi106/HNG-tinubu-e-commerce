import { Link } from "react-router-dom";

function LegalInfo() {
  return (
    <div className="text-[#C9C9C9] text-2xl flex flex-row gap-6 items-center justify-center font-medium">
      <Link to="#">Terms</Link>
      <Link to="#">Privacy</Link>
      <Link to="#">Cookies</Link>
    </div>
  );
}

export default LegalInfo;
