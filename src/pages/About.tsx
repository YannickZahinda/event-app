import celebrateImage from "../assets/equipe.png";
import Button from "../components/Button/Button";

const About = () => {
  return (
    <section className="bg-[#4A1316] text-white py-12 px-4">
      <h1 className="text-center text-4xl md:text-5xl font-serif font-bold pt-8">
        À propos
      </h1>

      <div className="flex items-center gap-4 text-center justify-center mt-4">
        <span className="block w-16 h-[1px] bg-gray-400"></span>
        <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-wide text-white">
          NOTRE ORGANISATION
        </h2>
        <span className="block w-16 h-[1px] bg-gray-400"></span>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8 max-w-6xl mx-auto p-8">
        <img
          src={celebrateImage}
          alt="planning pic"
          className="w-full md:w-1/3 max-w-lg mx-auto"
        />
        <div className="flex flex-col gap-6 w-full md:w-1/2 text-justify">
          <p className="font-bold text-2xl md:text-3xl text-[#FFB6C1]">
            Nous sommes une équipe de passionnés et expérimentés en événementiel
          </p>
          <p className="text-lg leading-relaxed">
            Myrja Events a été fondée en 2021 par ABUS’ALANGE BILUGE Myrja, une
            passionnée de l'événementiel avec une vision claire : créer des
            expériences mémorables et uniques pour chaque occasion. Dès ses
            débuts, l'agence a misé sur la créativité, l'excellence et une
            approche personnalisée pour se démarquer dans l'industrie
            événementielle.
            <br />
            <br />
            Au fil des années, Myrja Events a organisé avec succès une variété
            d'événements, allant des mariages somptueux aux conférences
            professionnelles en passant par des fêtes d'entreprise et des
            célébrations privées. Chaque projet a permis à l'agence de
            renforcer sa réputation d'excellence et de devenir un leader
            respecté dans le domaine de l'événementiel.
            <br />
            <br />
            Aujourd'hui, Myrja Events continue de croître, en restant fidèle à
            ses valeurs fondamentales et en s'engageant à offrir des services de
            premier ordre à ses clients.
          </p>
          <div className="flex justify-center md:justify-start">
            <Button
              className="px-6 py-3 text-white border-2 border-white rounded-3xl hover:bg-white hover:text-[#4A1316] transition duration-300"
              text="Réservez dès maintenant"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
