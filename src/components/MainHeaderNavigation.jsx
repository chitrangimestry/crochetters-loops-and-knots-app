import { Link } from "react-router-dom";
import appLogo from "/crochet.png";
import { CircleUserRound, House, ShoppingCart, Store } from "lucide-react";

function MainHeaderNavigation() {
  return (
    <>
      <div className="flex flex-row justify-between  gap-lg-2 p-2 shadow-lg w-full rounded-b-2xl">
        <div className="flex justify-start ml-10 gap-4">
          <div>
            <Link to="/">
              <img
                src={appLogo}
                alt="Loops and Knots Logo Image"
                className="w-20 h-20 rounded-full lg:w-30 lg:h-30 sm:hidden md:block lg:block "
              />
            </Link>
          </div>
          <div className="flex items-center">
            <p className="text- md:text-[12px] sm:text-[10px] lg:text-3xl text-wrap">
              <Link to="/">Loops & Knots</Link>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-lg ">
          <ul className="flex gap-6 mr-12">
            <li>
              <Link to="/" className="flex items-center gap-2 md:inline">
                <House className="md:hidden" />
                <span className="hidden md:inline">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/shop" className="flex items-center gap-2 md:inline">
                <Store className="md:hidden" />
                <span className="hidden md:inline">Shop</span>
              </Link>
            </li>
            <li>
              <Link to="/cart" className="flex items-center gap-2 md:inline">
                <ShoppingCart className=" md:hidden" />
                <span className="hidden md:inline">Cart</span>
              </Link>
            </li>
            <li>
              <Link
                to="/signin"
                className="flex items-center gap-2 text-nowrap md:inline"
              >
                <CircleUserRound className="md:hidden" />
                <span className="hidden md:inline">Sign In</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MainHeaderNavigation;
