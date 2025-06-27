import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { RiMenu4Fill } from "react-icons/ri";
import { NavLists } from "../../assets/data";
import { Link } from "react-router-dom";

type NavLinkProps = {
  text: string;
  path: string;
  onClick?: () => void;
  type?: "scroll" | "route";
};

const NavLink = ({ path, text, onClick }: NavLinkProps) => {
  return (
    <Link
      to={path}
      className="text-gray-800 hover:text-primary transition-colors duration-300"
      onClick={onClick}
    >
      {text}
    </Link>
  );
};

const Logo = () => (
  <div className="logo">
    <Link to="/">
      <img src="/images/common/logo.svg" alt="Logo" className="inline-block"/>
      <span className="font-bold text-primary ms-2">CiyaTrip</span>
    </Link>
  </div>
);

const AccountButtons = () => (
  <div className="flex flex-col md:flex-row md:space-x-4 items-center gap-4">
    <button className="relative">
      <GiShoppingCart size={25} />
      <span className="w-4 h-4 bg-primary absolute -top-1 -right-2 text-white flex justify-center items-center rounded-full text-sm">
        0
      </span>
    </button>
    <IoIosSearch size={25} />
    <button className="primary-btn">book now</button>
  </div>
);

type MobileMenuProps = {
  isOpen: boolean;
  toggleMenu?: () => void;
};
const MobileMenu = ({ isOpen, toggleMenu }: MobileMenuProps) => (
  <nav
    className={`fixed top-0 left-0 w-full capitalize h-screen bg-white flex flex-col items-center justify-center gap-8 text-lg z-[51] transition-transform duration-300 transform ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    }`}
  >
    {NavLists.map((list) => (
      <NavLink
        key={list.id}
        path={list.path}
        text={list.text}
        onClick={toggleMenu}
      />
    ))}
    {/* <AccountButtons /> */}
  </nav>
);

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Shrinks the header after 50px of scrolling
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`fixed top-0 w-full bg-white z-50 transition-all ease-in-out duration-300 ${
        isScrolled ? "shadow-s1 animate-bounceFromTop py-4" : "py-4"
      }`}
    >
      <div className="containers  flex justify-between items-center">
        <Logo />

        <button
          className="block md:hidden text-2xl focus:outline-none relative z-[8000] bg-primary text-white p-2 rounded-md"
          onClick={toggleMenu}
        >
          {menuOpen ? <IoMdClose size={25} /> : <RiMenu4Fill size={25} />}
        </button>

        <nav className="hidden md:flex items-center space-x-6 capitalize">
          {NavLists.map((list) => (
            <NavLink key={list.id} path={list.path} text={list.text} />
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <AccountButtons />
        </div>

        <MobileMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
      </div>
    </header>
  );
};
