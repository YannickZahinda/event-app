// import eventPlanImage from '../assets/generated-image-preview.png';
import celebrateImage from "../assets/equipe.png";
import Button from "../components/Button/Button";

const About = () => {
  return (
    <section className="bg-[#4A1316] text-white">
      <h1 className="text-center text-5xl font-serif font-bold pt-8">A propos</h1>

      <div className="flex items-center gap-4 text-center justify-center mt-4">
        <span className="block w-16 h-[1px] bg-gray-400"></span>
        <h1 className="text-2xl font-serif font-bold tracking-wide text-white">
          NOTRE ORGANISATION
        </h1>
        <span className="block w-16 h-[1px] bg-gray-400"></span>
      </div>

      <div className="flex items-center justify-center gap-8 p-8">
        <img src={celebrateImage} alt="planning pic"
          className="w-1/3 max-w-2xl"
        />
        <div className="flex flex-col gap-6 w-1/2 text-justify">
          <p className="font-bold text-3xl text-[#4A1316]">
            Nous sommes une équipe des passionnés et experimentés en
            événementiels
          </p>
          <p className="text-lg leading-relaxed">
            Myrja Events a été fondée en 2021 par ABUS’ALANGE BILUGE Myrja, une
            passionnée de l'événementiel avec une vision claire : créer des
            expériences mémorables et uniques pour chaque occasion. Dès ses
            débuts, l'agence a misé sur la créativité, l'excellence et une
            approche personnalisée pour se démarquer dans l'industrie
            événementielle. Au fil des années, Myrja Events a organisé avec
            succès une variété d'événements, allant des mariages somptueux aux
            conférences professionnelles en passant par des fêtes d'entreprise
            et des célébrations privées. Chaque projet a permis à l'agence de
            renforcer sa réputation d'excellence et de devenir un leader
            respecté dans le domaine de l'événementiel. Aujourd'hui, Myrja
            Events continue de croître, en restant fidèle à ses valeurs
            fondamentales et en s'engageant à offrir des services de premier
            ordre à ses clients.
          </p>
          <Button
            className="px-4 w-1/4 py-3 text-white border-2 border-white rounded-3xl hover:bg-white hover:text-[#4A1316] transition duration-300"
            text="Reservez dès maintenant "
          />
        </div>
      </div>
    </section>
  );
};

export default About;
