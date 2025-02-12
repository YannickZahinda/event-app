import { PopupProps } from "../../types/types";
import { IoCall } from "react-icons/io5";
import { AiFillTikTok } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { bouquet } from "../../assets";

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#4A1316] bg-opacity-100">
      <div className="bg-white text-black p-6 rounded-lg shadow-lg flex w-[500px]">
        <div className="w-1/3 flex items-center">
          <img src={bouquet} alt="Bouquet" className="w-full h-auto rounded-lg" />
        </div>

        <div className="w-2/3 pl-6 flex flex-col justify-center">
          <h1 className="text-xl font-bold mb-4">Contactez-nous</h1>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <IoCall size={30} className="text-[#4A1316]" />
              <p>+243 999 837 406</p>
            </li>
            <li className="flex items-center gap-3">
              <AiFillTikTok size={30} className="text-[#4A1316]" />
              <p>Myrja Events</p>
            </li>
            <li className="flex items-center gap-3">
              <SiGmail size={30} className="text-[#4A1316]" />
              <p>myrjaevents7@gmail.com</p>
            </li>
          </ul>
          <button 
            onClick={onClose} 
            className="mt-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
