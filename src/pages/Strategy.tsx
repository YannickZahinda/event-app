const Strategy = () => {
  return (
    <section className="mt-10">
      <div className="flex items-center gap-4 text-center justify-center mt-4">
        <span className="block w-16 h-[1px] bg-gray-400"></span>
        <h1 className="text-2xl font-serif font-bold tracking-wide text-[#4A1316]">
          STRATEGIE
        </h1>
        <span className="block w-16 h-[1px] bg-gray-400"></span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-6">
        {[
          {
            title: "Conception & PLanification",
            desc: "Définition du concept; choix du thème et planification des détails",
          },
          {
            title: "Gestion de l'événement",
            desc: "Coordination logistique; réservation du lieu et supervision.",
          },
          {
            title: "Décoration & Ambiance",
            desc: "Décoration, éclairage et sonorisation pour une ambiance unique.",
          },
          {
            title: "Service traiteur",
            desc: "Organisation de la restauration avec des menus adaptés.",
          },
          {
            title: "Animations & Divertissements",
            desc: "Spectacles et animations pour engager vos invités.",
          },
          {
            title: "Promotion & Communication",
            desc: "Gestion de la promotion et relations publiques.",
          },
        ].map((service, index) => (
          <div key={index} className="bg-[#4A1316] p-6 rounded-lg shadow-md">
            <h3 className="text-xl text-gray-300 font-semibold">{service.title}</h3>
            <p className="mt-2 text-white">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Strategy;
