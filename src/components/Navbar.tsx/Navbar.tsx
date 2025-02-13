import { useState } from "react";
import logo from "../../assets/logo-removebg-preview.png";
import Button from "../Button/Button";
import Popup from "../popup/Popup";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="logo" className="w-24 sm:w-32 lg:w-48 h-auto" />{" "}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <HiX size={30} className="hover:cursor-pointer" />
          ) : (
            <HiMenu size={30} />
          )}
        </button>
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-[#4A1316] md:bg-transparent md:flex space-x-6 transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden md:flex"
          }`}
        >
          <li>
            <a href="#apropos" className="block py-2 px-4 hover:underline">
              A propos
            </a>
          </li>
          <li>
            <a href="#services" className="block py-2 px-4 hover:underline">
              Services
            </a>
          </li>
        </ul>
        <div className="hidden md:flex space-x-3">
          <Button
            className="px-4 py-3 text-white border-2 border-white rounded-3xl hover:bg-white hover:text-[#4A1316] hover:cursor-pointer transition duration-300"
            text="RESERVER "
            onClick={(e) => {
              e.preventDefault();
              setIsPopupOpen(true);
            }}
          />
        </div>
      </div>
      {isPopupOpen && <Popup onClose={() => setIsPopupOpen(false)} />}
    </nav>
  );
};

export default Navbar;
