const Services = () => {
  return (
    <section className="mt-10">
      <h2 className="text-3xl font-bold text-center">Nos Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-6">
        {[
          {
            title: "Conception & PLanification",
            desc: "Définition du concept; choix du thème et planification des détails",
          },
          {
            title: "Gestion de l'événement",
            desc: "Coordinqtion logistique; réservation du lieu et supervision.",
          },
          {
            title: "Décoration & Ambiance",
            desc: "Décoration, éclairage et sonorisation pour une ambiance unique.",
          },
          {
            title: "Services de traiteur",
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
          <div key={index} className="bg-[#ED6C0E] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="mt-2 text-black-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
