import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="bg-[#fff] font-Jakarta">
      <Header />
      <main>
        <div className="max-w-[120rem] m-[auto 0] p-[0 3.3rem]">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
