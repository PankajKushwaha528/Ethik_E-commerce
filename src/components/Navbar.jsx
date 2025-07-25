import { ShoppingCart } from "lucide-react";
import { FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useState } from "react";



import { Link } from 'react-router-dom';


import { HiMenuAlt1, HiMenuAlt3, } from "react-icons/hi";
import ResponsiveMenu from './ResponsiveMenu';
import { UpdateFollower } from 'react-mouse-follower';



export const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Footwear",
    link: "/footwear",
  },
  {
    id: 3,
    title: "Wallet",
    link: "/wallet",
  },
  {
    id: 4,
    title: "Belts",
    link: "/belts",
  },
  {
    id: 5,
    title: "Contact",
    link: "/contact",
  },
  {
    id: 6,
    title: "About Us",
    link: "/about",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <div className='text-white py-3'>
      <div className='container flex justify-between items-center'>
        {/* logo section */}
        <div>
          <img src="https://ethikonline.com/cdn/shop/files/Ethik_AI_Logo_New.svg?v=16161731542031420671" alt="" className='max-w-[100px] invert' />
        </div>
        {/* menu section */}
        <div className='hidden md:block'>
          <ul className='flex items-center justify-end gap-4 relative z-40'>
            {NavbarMenu.map((item, index) => (
              <li key={index}>
                <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 9999,
                  followSpeed: 1.5,
                  scale:5,
                  mixBlendMode: "difference"
                }}
                >
                <Link to={item.link} className='inline-block text-base font-semibold py-2 px-3 uppercase'>
                  {item.title}
                </Link>
                </UpdateFollower>
              </li>
            ))}
            <UpdateFollower 
             mouseOptions={{
              backgroundColor: "white",
              zIndex: 9999,
              followSpeed: 1.5,
              scale:5,
              mixBlendMode: "difference"
            }}
            >
            <Link to='/cart'>
              <button className='text-xl ps-1'>
                <ShoppingCart />
              </button>
            </Link>
            </UpdateFollower>
            <UpdateFollower
             mouseOptions={{
              backgroundColor: "white",
              zIndex: 9999,
              followSpeed: 1.5,
              scale:5,
              mixBlendMode: "difference"
            }}
            >
            <button className='text-xl ps-3'>
              <FaRegUser />
            </button>
            </UpdateFollower>

          </ul>
        </div>
        <div className='flex gap-6 md:hidden z-50'>
          <Link to={'/cart'}><ShoppingCart /></Link>
          {/* mobile hamburger menu */}
          {
            showMenu ? (
              <MdClose onClick={toggleMenu} className='cursor-pointer transition-all md:hidden z-50' size={30} />
            ) : (
              <GiHamburgerMenu onClick={toggleMenu} className='cursor-pointer transition-all md:hidden z-50' size={30} />
            )
          }
        </div>
      </div>
      <div>
        <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
    </div>
  )
}

export default Navbar

