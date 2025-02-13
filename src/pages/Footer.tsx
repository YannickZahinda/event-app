import { IoCall } from "react-icons/io5";
import { AiFillTikTok } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { logo } from "../assets";

const Footer = () => {
  return (
    <footer className="bg-[#4A1316] text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <div className="mb-6 md:mb-0">
          <img src={logo} alt="logo" className="w-28 md:w-36 lg:w-48 h-auto" />
        </div>
        
        <ul className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6">
          <li><a href="#apropos" className="hover:underline">A propos</a></li>
          <li><a href="#services" className="hover:underline">Services</a></li>
        </ul>
        
        <ul className="mt-6 md:mt-0 space-y-3">
          <li className="flex items-center gap-3">
            <IoCall size={20} className="text-white" />
            <a href="tel:+243999837406" className="hover:underline">+243 999 837 406</a>
          </li>
          <li className="flex items-center gap-3">
            <AiFillTikTok size={20} className="text-white" />
            <a href="https://www.tiktok.com/@myrjaevents7" target="_blank" rel="noopener noreferrer" className="hover:underline">Myrja Events</a>
          </li>
          <li className="flex items-center gap-3">
            <SiGmail size={20} className="text-white" />
            <a href="mailto:myrjaevents7@gmail.com" className="hover:underline">myrjaevents7@gmail.com</a>
          </li>
        </ul>
      </div>
      <p className="text-center mt-6 text-sm">&copy; {new Date().getFullYear()} Myrja Events. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
