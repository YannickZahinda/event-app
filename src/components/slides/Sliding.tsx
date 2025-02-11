import { motion } from "framer-motion";
import { FaSmile } from "react-icons/fa";

const Sliding = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-gray text-gray-700 py-3">
      <motion.div className="flex items-center gap-2 text-3xl font-bold"
      initial={{ x: "100%"}}
      animate={{ x: "-100%"}}
      transition={{ repeat: Infinity, duration: 25, ease: "linear"}}
       >
        <span>Hey, Ne manquez pas de revivre des moments qui vous font chaud au coeur avec Myrja Event !</span>
        <FaSmile className="text-yellow-300" /> 
        <FaSmile className="text-yellow-300" /> 
        <FaSmile className="text-yellow-300" /> 
    
      </motion.div>
    </div>
  )
}

export default Sliding;
