import { africanWedding, celebration, enterprise, conference } from "../assets";

const servicesData = [
  {
    title: "Mariage",
    picture: africanWedding,
    desc: [
      {
        title: "Planification complète: ",
        desc: "De la conception à l'exécution, nous nous occupons de tous les aspects de votre mariage pour créer un jour parfait.",
      },
      {
        title: "Coordination du Jour J: ",
        desc: "Gestion de tous les détails le jour de votre mariage pour que vous puissiez profiter pleinement."
      },
      {
        title: "Conception et Décoration : ",
        desc: "Création de décors époustouflants qui reflètent votre style et vos goûts."
      },
    
    ],
  },
  {
    title: "Conférences et Séminaires : ",
    picture: conference,
    desc: [
        {
            title: "Organisation et Logistique : ",
            desc: "Gestion complète de la logistique, de la réservation des lieux à la coordination des intervenants."
        },
        {
            title: "Services Audiovisuels : ",
            desc: "Fourniture de solutions audiovisuelles pour des présentations professionnelles et captivantes."
        },
        {
            title: "Gestion des Participants : ",
            desc: "Coordination des inscriptions, des badges et des besoins des participants."
        },
    ]
  },
  {
    title: "Fêtes et Célébrations : ",
    picture: celebration,
    desc: [
        {
            title: "Anniversaires : ",
            desc: "Organisation de fêtes d'anniversaire personnalisées et mémorables pour toutes les tranches d'âge."
        },
        {
            title: "Célébrations Privées : ",
            desc: "Planification de fêtes privées telles que des anniversaires de mariage, des fêtes de fiançailles, etc."
        },
        {
            title: "Événements Thématiques : ",
            desc: "Création d'événements sur des thèmes spécifiques pour des expériences uniques et amusantes."
        }
    ]
  }, 
  {
    title: "Événements d'Entreprise : ",
    picture: enterprise,
    desc: [
        {
            title: "Lancements de Produits : ",
            desc: "Organisation d'événements de lancement de produits pour maximiser l'impact et l'engagement."
        },
        {
            title: "Réunions et Conférences : ",
            desc: "Planification et exécution de réunions et conférences d'entreprise efficaces et professionnelles."
        }, 
        {
            title: "Team Building : ",
            desc: "Conception et organisation d'activités de team building pour renforcer la cohésion et la motivation des équipes."
        }
    ]
  }
];

export default servicesData;
