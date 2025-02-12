import celebrateImage from "../assets/myrja.png";

const Values = () => {
  return (
    <section className="bg-[#4A1316] text-white py-12 px-4">
      <div className="flex flex-wrap items-center justify-center gap-8 max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 w-full md:w-1/2 text-justify">
          <div className="flex items-center gap-4 text-center justify-center mt-4">
            <span className="block w-16 h-[1px] bg-gray-400"></span>
            <h1 className="text-2xl md:text-3xl font-serif font-bold tracking-wide">
              VALEURS FONDAMENTALES
            </h1>
            <span className="block w-16 h-[1px] bg-gray-400"></span>
          </div>
          <p className="text-lg leading-relaxed">
            1. <strong>Créativité</strong> : Nous croyons en la puissance de
            l'innovation et de la créativité pour transformer des idées en
            expériences inoubliables. <br /> 2. <strong>Excellence</strong> :
            Nous nous engageons à offrir des services de la plus haute qualité,
            en veillant à chaque détail pour garantir la perfection.
            <br /> 3. <strong>Passion</strong> : Notre passion pour
            l'événementiel est ce qui nous pousse à surpasser les attentes de
            nos clients. <br /> 4. <strong>Intégrité</strong> : Nous agissons
            avec honnêteté et transparence dans toutes nos interactions
            professionnelles.
            <br /> 5.
            <strong>Collaboration</strong> : Nous valorisons le travail d'équipe
            et la coopération, tant avec nos clients qu'avec nos partenaires.
            <br /> 6.
            <strong>Engagement envers les Clients</strong> : Nous nous engageons
            à comprendre et à réaliser les visions de nos clients avec
            dévouement et professionnalisme.
          </p>
        </div>
        <img
          src={celebrateImage}
          alt="planning pic"
          className="w-full md:w-1/3 max-w-lg mx-auto"
        />
      </div>
    </section>
  );
};

export default Values;
