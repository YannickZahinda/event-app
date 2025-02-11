import { IoBasket } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import shopData from "../data/shopData";

const prices = [24, 30, 30, 40, 40, 40, 55, 60, 65, 65, 70, 80];

const Shop = () => {
  return (
    <section className="px-10 py-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <IoBasket size={50} className="text-gray-700" />
        <h1 className="text-3xl font-bold text-gray-800">PANIER CLASSIQUE</h1>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {shopData.map((item, index) => {
          const price = prices[index]; 
          const discountPercentage = Math.floor(Math.random() * (30 - 10 + 1)) + 10; // 10% to 30% discount
          const originalPrice = (price / (1 - discountPercentage / 100)).toFixed(2);

          return (
            <div key={index} className="bg-[#FCF5C7] p-4 rounded-lg shadow-lg text-center relative">
              {/* Discount Badge */}
              <span className="absolute top-3 left-3 bg-gray-800 text-white text-sm px-2 py-1 rounded-full">
                {discountPercentage}%
              </span>

              {/* Product Image */}
              <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-md" />

              {/* Title */}
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mt-2">{item.desc}</p>

              {/* Price & Discount */}
              <div className="flex justify-center items-center gap-2 mt-3 text-lg font-semibold">
                <span className="text-gray-900">${price}</span>
                <span className="line-through text-gray-400 text-sm">${originalPrice}</span>
              </div>

              {/* Icons */}
              <div className="flex justify-between items-center mt-4">
                {/* Favorite Icons */}
                <div className="flex space-x-1">
                  {[...Array(4)].map((_, i) => (
                    <FaHeart key={i} className="text-gray-500" />
                  ))}
                </div>

                {/* Add to Cart Button */}
                <button className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl">
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Shop;
