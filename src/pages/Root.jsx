import { Outlet } from "react-router-dom";
import MainHeaderNavigation from "../components/MainHeaderNavigation";
import Footer from "../components/Footer";
function RootLayout() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <MainHeaderNavigation />
        <main className="flex-grow">
          <Outlet /> {/* your page content */}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default RootLayout;
