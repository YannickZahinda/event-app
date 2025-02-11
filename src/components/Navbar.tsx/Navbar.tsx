import { Link } from "react-router-dom";
import logo from "../../assets/logo-removebg-preview.png";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <nav className="text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="logo" className="w-1/5 h-auto" />
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:underline ">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline ">
              A propos
            </Link>
          </li>
          <li>
            <Link to="/manage-events" className="hover:underline ">
              Manage Events
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:underline ">
              Services
            </Link>
          </li>
          <li>
            <Link to="/planning" className="hover:underline ">
              Contactez-nous
            </Link>
          </li>
        </ul>
        <div className="flex space-x-3">
          <Button
            className="px-4 py-3 text-white border-2 border-white rounded-3xl hover:bg-[#4A1316] hover:text-white transition duration-300"
            text="RESERVER "
          />
        </div>
      </div>
    </nav>
  );
};
// to remember text-[#4A1316] required color for products

export default Navbar;
