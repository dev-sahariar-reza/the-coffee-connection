import { Outlet } from "react-router-dom";
import Header from "../pages/Header/Header";
import Footer from "../pages/Footer/Footer";

const Root = () => {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-586px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;
