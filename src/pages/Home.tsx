import Button from "../components/Button/Button";
import Navbar from "../components/Navbar.tsx/Navbar";
import About from "./About";
import Services from "./Services";

const Home = () => {
  return (
    <>
    <div className="relative h-screen w-full bg-[url('/assets/niceweddingimg.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
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

          <p className="text-4xl text-white mt-4 font-serif text-5xl">
            {" "}
            <strong>PARCE QUE CHAQUE FÊTE MÉRITE <br /> D'ÊTRE EXCEPTIONNELLE !</strong>{" "}
          </p>
        </div>
      </section>
      {/* Service section */}
      {/* <Services /> */}
     
    </div>
    <About />
    </>
  );
};

export default Home;
