import satisfaction from "../assets/satisfaction-removebg-preview.png";
import innovation from "../assets/innovation-removebg-preview.png";
import responsability from "../assets/collaboration-removebg-preview.png";
import accessibility from "../assets/integrity-removebg-preview.png";
import durability from "../assets/engagement-removebg-preview.png";

const Engagement = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#4A1316] text-white p-6">
      {/* Card */}
      <div className="flex flex-col items-center text-center bg-[#3C0F12] p-4 rounded-lg shadow-lg">
        <img src={satisfaction} alt="Satisfaction" className="w-30 h-30 mb-4" />
        <h3 className="text-lg font-semibold mb-2">Satisfaction</h3>
        <p className="text-sm leading-relaxed">
          Nous mettons tout en œuvre pour garantir la satisfaction totale de nos
          clients en personnalisant nos services pour répondre à leurs besoins
          spécifiques.
        </p>
      </div>

      {/* Card */}
      <div className="flex flex-col items-center text-center bg-[#3C0F12] p-4 rounded-lg shadow-lg">
        <img src={innovation} alt="Innovation" className="w-1/2" />
        <h3 className=" font-semibold mb-2">Innovation continue</h3>
        <p className="text-sm leading-relaxed">
          Nous nous engageons à rester à la pointe des tendances événementielles
          et à intégrer les dernières innovations dans nos prestations.
        </p>
      </div>

      {/* Card */}
      <div className="flex flex-col items-center text-center bg-[#3C0F12] p-4 rounded-lg shadow-lg">
        <img
          src={responsability}
          alt="Responsabilité"
          className="w-1/2"
        />
        <h3 className="text-lg font-semibold mb-2">Responsabilité</h3>
        <p className="text-sm leading-relaxed">
          Nous assumons pleinement la responsabilité de chaque aspect de nos
          projets pour assurer leur succès.
        </p>
      </div>

      {/* Card */}
      <div className="flex flex-col items-center text-center bg-[#3C0F12] p-4 rounded-lg shadow-lg">
        <img
          src={accessibility}
          alt="Accessibilité"
          className="w-1/2"
        />
        <h3 className="text-lg font-semibold mb-2">Accessibilité</h3>
        <p className="text-sm leading-relaxed">
          Nous nous engageons à offrir des services accessibles et abordables
          sans compromettre la qualité.
        </p>
      </div>

      {/* Card */}
      <div className="flex flex-col items-center text-center bg-[#3C0F12] p-4 rounded-lg shadow-lg">
        <img src={durability} alt="Durabilité" className="w-1/2" />
        <h3 className="text-lg font-semibold mb-2">Durabilité</h3>
        <p className="text-sm leading-relaxed">
          Nous adoptons des pratiques durables et respectueuses de
          l'environnement dans l'organisation de nos événements.
        </p>
      </div>
    </section>
  );
};

export default Engagement;
