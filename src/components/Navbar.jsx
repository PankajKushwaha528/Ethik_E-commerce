

import { ShoppingCart } from "lucide-react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import ResponsiveMenu from "./ResponsiveMenu";
import { UpdateFollower } from "react-mouse-follower";

export const NavbarMenu = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Footwear", link: "/footwear" },
  { id: 3, title: "Wallet", link: "/wallet" },
  { id: 4, title: "Belts", link: "/belts" },
  { id: 5, title: "Contact", link: "/contact" },
  { id: 6, title: "About Us", link: "/about" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="text-white py-3">
      <div className="container flex justify-between items-center">
        {/* logo */}
        <div>
          <img
            src="https://ethikonline.com/cdn/shop/files/Ethik_AI_Logo_New.svg?v=16161731542031420671"
            alt=""
            className="max-w-[100px] invert"
          />
        </div>

        {/* desktop menu */}
        <div className="hidden md:block">
          <ul className="flex items-center justify-end gap-4 relative z-40">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 1.5,
                    scale: 5,
                    mixBlendMode: "difference",
                  }}
                >
                  <Link
                    to={item.link}
                    className="inline-block text-base font-semibold py-2 px-3 uppercase"
                  >
                    {item.title}
                  </Link>
                </UpdateFollower>
              </li>
            ))}

            {/* Cart icon */}
            <UpdateFollower
              mouseOptions={{
                backgroundColor: "white",
                zIndex: 9999,
                followSpeed: 1.5,
                scale: 5,
                mixBlendMode: "difference",
              }}
            >
              <Link to="/cart">
                <button className="text-xl ps-1">
                  <ShoppingCart />
                </button>
              </Link>
            </UpdateFollower>

            {/* Login/Logout Button */}
            <UpdateFollower
              mouseOptions={{
                backgroundColor: "white",
                zIndex: 9999,
                followSpeed: 1.5,
                scale: 5,
                mixBlendMode: "difference",
              }}
            >
              {user ? (
                <button
                  onClick={handleLogout}
                  className="text-sm font-semibold text-red-600 border border-red-600 px-4 py-1 rounded hover:bg-red-600 hover:text-white transition"
                >
                  Logout
                </button>
              ) : (
                <Link to="/login">
                  <button
                    className="text-sm font-semibold text-white border border-blue-600 px-4 py-1 bg-blue-500 rounded hover:bg-blue-600 hover:text-white transition"
                  >
                    Login
                  </button>
                </Link>
              )}
            </UpdateFollower>
          </ul>
        </div>

        {/* Mobile icons */}
        <div className="flex gap-6 md:hidden z-50">
          <Link to={"/cart"}>
            <ShoppingCart />
          </Link>
          {showMenu ? (
            <MdClose
              onClick={toggleMenu}
              className="cursor-pointer transition-all md:hidden z-50"
              size={30}
            />
          ) : (
            <GiHamburgerMenu
              onClick={toggleMenu}
              className="cursor-pointer transition-all md:hidden z-50"
              size={30}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div>
        <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
    </div>
  );
};

export default Navbar;
