import { Outlet } from "react-router-dom";
import MainHeaderNavigation from "../components/MainHeaderNavigation";
import Footer from "../components/Footer";
function RootLayout() {
  return (
    <>
      <MainHeaderNavigation />

      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;
