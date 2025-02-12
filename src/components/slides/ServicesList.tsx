import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import servicesData from "../../data/servicesData";
import Button from "../Button/Button";

const ServicesList = () => {
  return (
    <section className="bg-white text-black py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 text-center justify-center mt-4 mb-10">
          <span className="block w-16 h-[1px] bg-gray-400"></span>
          <h1 className="text-2xl font-serif font-bold tracking-wide text-black">
            NOS SERVICES
          </h1>
          <span className="block w-16 h-[1px] bg-gray-400"></span>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          loop
          className="pb-10"
        >
          {servicesData.map((service, index) => (
            <SwiperSlide key={index} className="p-4">
              <div className="bg-gray-300 p-6 rounded-lg shadow-md text-center flex flex-col min-h-[450px]">
                <img
                  src={service.picture}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg"
                />

                <h3 className="text-xl font-semibold mt-4">{service.title}</h3>

                <ul className="mt-2 text-gray-900 text-sm flex-grow">
                  {service.desc.map((description, i) => (
                    <li key={i} className="mt-1">
                      {description.title}
                    </li>
                  ))}
                </ul>

                <Button
                  text="Reserver"
                  className="rounded-2xl p-2 mt-auto bg-white text-black border-1 border-white hover:border-white hover:bg-gray-300 hover:text-gray-700 hover:cursor-pointer"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ServicesList;
