import React, { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { NavbarMenu } from "./Navbar";
import { AuthContext } from "../context/AuthContext";
import { ShopContext } from "../context/ShopContext";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  const { user, logout } = useContext(AuthContext);
  const { getTotalCartItems } = useContext(ShopContext);
  const navigate = useNavigate();
  console.log("ResponsiveMenu user:", user);
  const handleLogout = () => {
    logout();
    setShowMenu(false);
    navigate("/login");
  };

  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed top-0 bottom-0 z-40 w-[75%] h-screen flex flex-col justify-between bg-white/90 backdrop:blur-lg px-6 pt-16 pb-6 text-black transition-all duration-300 md:hidden rounded-r-xl shadow-lg`}
    >
      {/* --- USER INFO --- */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <FaUserCircle size={50} />
          <div>
            {user ? (
              <>
                <h1 className="text-lg font-semibold">
                  Hi, {user.name.split(" ")[0]}
                </h1>
                <p className="text-sm text-slate-500">Welcome Back!</p>
              </>
            ) : (
              <>
                <h1 className="text-lg font-semibold">Hello Guest</h1>
                <p className="text-sm text-slate-500">Please Login</p>
              </>
            )}
          </div>
        </div>

        {/* --- NAV LINKS --- */}
        <nav className="mt-8">
          <ul className="space-y-3">
            {NavbarMenu.map((item) => (
              <li key={item.id} onClick={() => setShowMenu(false)}>
                <Link
                  to={item.link}
                  className="inline-block text-base font-semibold py-1 uppercase"
                >
                  {item.title}
                </Link>
              </li>
            ))}

            {/* --- CART LINK --- */}
            <li onClick={() => setShowMenu(false)}>
              <Link
                to="/cart"
                className="flex items-center gap-2 font-semibold"
              >
                <ShoppingCart />
                Cart
                <span className="bg-[#138695] text-white text-xs px-2 py-0.5 rounded-full">
                  {getTotalCartItems()}
                </span>
              </Link>
            </li>

            {/* --- AUTH & FOOTER SECTION --- */}
            <div className="mt-8 border-t pt-4 text-center">
              {user ? (
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white w-full py-2 rounded hover:bg-red-700 transition"
                >
                  Logout
                </button>
              ) : (
                <div className="space-y-2">
                  <Link
                    to="/login"
                    onClick={() => setShowMenu(false)}
                    className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-sm font-semibold shadow-sm transition-all duration-200"

                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setShowMenu(false)}
                    className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-sm font-semibold shadow-sm transition-all duration-200"

                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
            <p className="text-xs mb-2 text-gray-600 mt-4">
              Made with ❤️ by Pankaj Kushwaha
            </p>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
