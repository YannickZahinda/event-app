import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import servicesData from "../../data/servicesData";

const ServicesList = () => {
  return (
    <section className="bg-[#4A1316] text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Nos Services
        </h2>

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
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          className="pb-10"
        >
          {servicesData.map((service, index) => (
            <SwiperSlide key={index} className="p-4">
              <div className="bg-[#621A1D] p-6 rounded-lg shadow-md text-center">
                <img
                  src={service.picture}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
                <ul className="mt-2 text-gray-300 text-sm">
                  {service.desc.map((description, i) => (
                    <li key={i} className="mt-1">{description.title}</li>
                  ))}
                </ul>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ServicesList;
