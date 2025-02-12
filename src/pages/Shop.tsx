import { IoBasket } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import shopData from "../data/shopData";
// import Button from "../components/Button/Button";
// import { ProductProps } from "../types/types";
import ReactWhatsapp from "react-whatsapp";

const prices = [24, 30, 30, 40, 40, 40, 55, 60, 65, 65, 70, 80];

const Shop = () => {

  return (
    <section className="px-10 py-6">
      <div className="flex items-center gap-4 mb-6">
        <IoBasket size={50} className="text-[#4A1316]" />
        <h1 className="text-3xl font-bold text-[#4A1316]">PANIER CLASSIQUE</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {shopData.map((item, index) => {
          const price = prices[index];
          const discountPercentage =
            Math.floor(Math.random() * (30 - 10 + 1)) + 10; // 10% to 30% discount
          const originalPrice = (
            price /
            (1 - discountPercentage / 100)
          ).toFixed(2);

          const phoneNumber = "+243978042243";
          const message =
            `Hello, Je suis interessé(e):\n\n` +
            `🛍️ *${item.title}*\n` +
            `💰 Prix: $${price}\n` +
            `🔖 Prix original: $${originalPrice}\n` +
            `🎉 Reduction: ${discountPercentage}%\n\n` +
            `Pourais-je avoir plus de details ?`;
          return (
            <div
              key={index}
              className="bg-gray-300 p-4 rounded-lg shadow-lg text-center relative"
            >
              <span className="absolute top-3 left-3 bg-[#4A1316] text-white text-sm px-2 py-1 rounded-full">
                {discountPercentage}%
              </span>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
              <div className="flex justify-center items-center gap-2 mt-3 text-lg font-semibold">
                <span className="text-gray-900">${price}</span>
                <span className="line-through text-gray-400 text-sm">
                  ${originalPrice}
                </span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-1">
                  {[...Array(4)].map((_, i) => (
                    <FaHeart
                      key={i}
                      className="text-gray-500 hover:cursor-pointer hover:text-[#4A1316]"
                    />
                  ))}
                </div>
                <ReactWhatsapp
                  number={phoneNumber}
                  message={message}
                  element="button"
                  className="bg-[#4A1316] hover:cursor-pointer hover:bg-gray-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl"
                >
                  {" "}
                  +{" "}
                </ReactWhatsapp>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Shop;
