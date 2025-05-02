import { Link } from "react-router-dom";
import appLogo from "/crochet.png";
import { CircleUserRound, House, ShoppingCart, Store } from "lucide-react";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

function MainHeaderNavigation() {
  const { isLoggedIn, login, logout } = useContext(AuthContext);
  return (
    <>
      <div className="flex flex-row justify-between  gap-lg-2 p-2 shadow-lg w-full items-center sticky top-0 bg-white z-10">
        <div className="flex justify-start gap-4">
          <div>
            <Link to="/">
              <img
                src={appLogo}
                alt="Loops and Knots Logo Image"
                className="hidden md:block w-20 h-20 rounded-full lg:w-30 lg:h-30 border-1 border-amber-600 "
              />
            </Link>
          </div>
          <div className="flex items-center">
            <p className=" md:text-[12px] sm:text-[10px] lg:text-3xl text-wrap text-rose-400">
              <Link to="/">Loops & Knots</Link>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-lg ">
          <ul className="flex gap-6 mr-8">
            <li>
              <Link to="/" className="flex items-center gap-2 md:inline">
                <House className="md:hidden" />
                <span className="hidden md:inline">Home</span>
              </Link>
            </li>

            <li>
              <Link to="/cart" className="flex items-center gap-2 md:inline">
                <ShoppingCart className=" md:hidden" />
                <span className="hidden md:inline">Cart</span>
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="flex items-center gap-2 md:inline">
                <Store className="md:hidden" />
                <span className="hidden md:inline">About Us</span>
              </Link>
            </li>
            <li>
              <Link
                to="/signin"
                className="flex items-center gap-2 text-nowrap md:inline"
              >
                
                {
                  isLoggedIn ? (
                    <span>
                      <CircleUserRound className="md:hidden hidden" />
                      <button onClick={logout} className="text-rose-400">Sign Out</button>
                    </span>
                  ) : (
                    <span>
                       <CircleUserRound className="md:hidden" />
                    <span className="hidden md:inline">Sign In</span>
                    </span>
                   
                  )
                }
                
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MainHeaderNavigation;
