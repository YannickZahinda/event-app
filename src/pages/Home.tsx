import Navbar from "../components/Navbar.tsx/Navbar";
import ServicesList from "../components/slides/ServicesList";
import Sliding from "../components/slides/Sliding";
import About from "./About";
import Engagement from "./Engagement";
import Footer from "./Footer";
import Shop from "./Shop";
import Strategy from "./Strategy";
import Values from "./Values";
import TypewriterComponent from "typewriter-effect";

const Home = () => {
  return (
    <>
      <div className="relative h-screen w-full bg-[url('/assets/niceweddingimg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#4A1316] opacity-40"></div>
        <div className="relative">
          <Navbar />
        </div>
        {/* Hero Section */}
        <section className="flex items-center justify-center text-white text-2xl h-screen">
          <div className="relative text-center mt-3">
            <div className="flex items-center justify-center m-7">
              <div className="flex items-center gap-4 text-center">
                <span className="block w-16 h-[1px] bg-gray-400"></span>
                <h1 className="text-2xl font-serif tracking-wide text-white">
                  EVENTS PLANNER
                </h1>
                <span className="block w-16 h-[1px] bg-gray-400"></span>
              </div>
            </div>

            <p className="text-2xl sm:text-3xl md:text-4xl text-white mt-4 font-serif font-bold text-center">
              PARCE QUE CHAQUE FÊTE MÉRITE <br className="hidden sm:block" />
              <TypewriterComponent options={{
                strings: ["D'ÊTRE EXCEPTIONNELLE !"],
                autoStart: true,
                deleteSpeed: 50,
                delay: 100,
                loop: true,
              }} />
            </p>
          </div>
        </section>
        {/* Service section */}
        {/* <Services /> */}
      </div>
      <Sliding />
      <div id="apropos"><About /></div>
      <Values />
      <Engagement />
      <div id="services"><ServicesList /></div>
      <Shop />
      <Strategy />
      <Footer />
    </>
  );
};

export default Home;
