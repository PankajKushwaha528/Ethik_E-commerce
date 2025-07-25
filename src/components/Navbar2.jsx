// import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import { ShoppingCart } from "lucide-react";
// import { FaRegUser } from "react-icons/fa";
// import ResponsiveMenu from "./ResponsiveMenu";
// import { UpdateFollower } from "react-mouse-follower";
// import { NavbarMenu } from "./Navbar";
// import { ShopContext } from "../context/ShopContext";
// import { MdClose } from "react-icons/md";
// import { GiHamburgerMenu } from "react-icons/gi";

// const Navbar2 = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };
//   const { getTotalCartItems } = useContext(ShopContext);
//   return (
//     <div className="text-black py-2 bg-gray-100 z-10">
//       <div className="container flex justify-between items-center">
//         {/* logo section */}
//         <div>
//           <img
//             src="https://ethikonline.com/cdn/shop/files/Ethik_AI_Logo_New.svg?v=16161731542031420671"
//             alt=""
//             className="max-w-[100px]"
//           />
//         </div>
//         {/* menu section */}
//         <div className="hidden md:block">
//           <ul className="flex items-center gap-4 relative z-40">
//             {NavbarMenu.map((item, index) => (
//               <li key={index}>
//                 <UpdateFollower
//                   mouseOptions={{
//                     backgroundColor: "white",
//                     zIndex: 9999,
//                     followSpeed: 1.5,
//                     scale: 5,
//                     mixBlendMode: "difference",
//                   }}
//                 >
//                   <Link
//                     to={item.link}
//                     className="inline-block text-base font-semibold py-2 px-3 uppercase"
//                   >
//                     {item.title}
//                   </Link>
//                 </UpdateFollower>
//               </li>
//             ))}
//             <UpdateFollower
//               mouseOptions={{
//                 backgroundColor: "white",
//                 zIndex: 9999,
//                 followSpeed: 1.5,
//                 scale: 5,
//                 mixBlendMode: "difference",
//               }}
//             >
//               <Link to="/cart">
//                 {" "}
//                 <div className="relative">
//                   <ShoppingCart />{" "}
//                   <div className="bg-[#138695] w-5 absolute -top-3 -right-2 flex items-center justify-center rounded-full text-white">
//                     {getTotalCartItems()}
//                   </div>
//                 </div>
//               </Link>
//             </UpdateFollower>
//             <UpdateFollower
//               mouseOptions={{
//                 backgroundColor: "white",
//                 zIndex: 9999,
//                 followSpeed: 1.5,
//                 scale: 5,
//                 mixBlendMode: "difference",
//               }}
//             >
//               <button className="text-xl ps-8">
//                 <FaRegUser />
//               </button>
//             </UpdateFollower>
//           </ul>
//         </div>
//         <div className="flex gap-8 md:hidden z-50">
//           <Link to={"/cart"}>
//             <div className="relative w-10 z-50">
//               <ShoppingCart />{" "}
//               <div className="bg-[#138695] z-40 w-5 absolute -top-2 right-1 flex items-center justify-center rounded-full text-white">
//                 {getTotalCartItems()}
//               </div>
//             </div>
//           </Link>
//           {/* mobile hamburger menu */}
//           {showMenu ? (
//             <MdClose
//               onClick={toggleMenu}
//               className="cursor-pointer transition-all md:hidden z-50"
//               size={30}
//             />
//           ) : (
//             <GiHamburgerMenu
//               onClick={toggleMenu}
//               className="cursor-pointer transition-all md:hidden z-50"
//               size={30}
//             />
//           )}
//         </div>
//       </div>
//       <div>
//         <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
//       </div>
//     </div>
//   );
// };

// export default Navbar2;

import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { FaRegUser } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import { UpdateFollower } from "react-mouse-follower";
import { NavbarMenu } from "./Navbar";
import { ShopContext } from "../context/ShopContext";
import { AuthContext } from "../context/AuthContext";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar2 = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  const { getTotalCartItems } = useContext(ShopContext);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="text-black py-2 bg-gray-100 z-10">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <div>
          <img
            src="https://ethikonline.com/cdn/shop/files/Ethik_AI_Logo_New.svg?v=16161731542031420671"
            alt="Logo"
            className="max-w-[100px]"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-4 relative z-40">
            {NavbarMenu.map((item, index) => (
              <li key={index}>
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

            {/* Cart Icon */}
            <UpdateFollower mouseOptions={{ backgroundColor: "white", zIndex: 9999, followSpeed: 1.5, scale: 5, mixBlendMode: "difference" }}>
              <Link to="/cart">
                <div className="relative">
                  <ShoppingCart />
                  <div className="bg-[#138695] w-5 absolute -top-3 -right-2 flex items-center justify-center rounded-full text-white text-xs">
                    {getTotalCartItems()}
                  </div>
                </div>
              </Link>
            </UpdateFollower>

            {/* Auth Section */}
            <UpdateFollower mouseOptions={{ backgroundColor: "white", zIndex: 9999, followSpeed: 1.5, scale: 5, mixBlendMode: "difference" }}>
              <div className="flex items-center gap-3 ps-4">
                {user ? (
                  <>
                    <span className="text-sm font-medium hidden lg:inline">
                      👋 Hi, {user.name.split(" ")[0]}
                    </span>
                    <button
                      onClick={handleLogout}
                      className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-sm font-semibold shadow-sm transition-all duration-200"
  >
                      Login
                    </Link>
                    <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-sm font-semibold shadow-sm transition-all duration-200"
>
                      Register
                    </Link>
                  </>
                )}
              </div>
            </UpdateFollower>
          </ul>
        </div>

        {/* Mobile Header */}
        <div className="flex gap-8 md:hidden z-50">
          <Link to="/cart">
            <div className="relative w-10 z-50">
              <ShoppingCart />
              <div className="bg-[#138695] z-40 w-5 absolute -top-2 right-1 flex items-center justify-center rounded-full text-white text-xs">
                {getTotalCartItems()}
              </div>
            </div>
          </Link>

          {/* Hamburger / Close */}
          {showMenu ? (
            <MdClose
              onClick={toggleMenu}
              className="cursor-pointer transition-all z-50"
              size={30}
            />
          ) : (
            <GiHamburgerMenu
              onClick={toggleMenu}
              className="cursor-pointer transition-all z-50"
              size={30}
            />
          )}
        </div>
      </div>

      {/* Responsive Menu */}
      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
};

export default Navbar2;
