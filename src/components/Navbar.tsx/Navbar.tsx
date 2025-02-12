// import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo-removebg-preview.png";
import Button from "../Button/Button";
import Popup from "../popup/Popup";

const Navbar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <nav className="text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="logo" className="w-1/5 h-auto" />
        <ul className="flex space-x-6">
          <li>
            {/* <Link to="/" className="hover:underline ">
              Home
            </Link> */}

          </li>
          <li className="hover:underline ">
            {/* <Link to="/about" className="hover:underline ">
              A propos
            </Link> */}
            <a href="#apropos" className="hover:cursor-pointer hover:underline">A propos</a>
          </li>
          <li>
            {/* <Link to="/services" className="hover:underline ">
              Services
            </Link> */}
            <a href="#services" className="hover:underline hover:cursor-pointer decoration:none">Services</a>
          </li>
        </ul>
        <div className="flex space-x-3">
          <Button
            className="px-4 py-3 text-white border-2 border-white rounded-3xl hover:bg-[#4A1316] hover:border-[#4A1316] hover:cursor-pointer hover:text-white transition duration-300"
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
// to remember text-[#4A1316] required color for products

export default Navbar;
