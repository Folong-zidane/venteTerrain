import React, { useEffect, useState } from 'react';
import { Footer, Navbar } from "../components";

const AboutPage = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await fetch('/houses.json');
        const data = await response.json();
        setHouses(data);
      } catch (error) {
        console.error("Erreur lors du chargement des données :", error);
      }
    };

    fetchHouses();
  }, []);

  return (
    <>
      
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
          Bienvenue sur notre plateforme dédiée à la location et à la colocation de maisons. Nous vous offrons une sélection variée de logements, adaptés à tous les besoins et budgets. Que vous cherchiez une location temporaire ou une colocation à long terme, nous avons ce qu'il vous faut. Profitez de notre service de recherche avancée, des descriptions détaillées des propriétés, et des photos haute résolution pour trouver votre prochaine maison en toute simplicité. Notre équipe est là pour vous accompagner à chaque étape, de la recherche à la signature du contrat.
        </p>

        <h2 className="text-center py-4">Our Houses</h2>
        <div className="row">
          {houses.slice(0, 5).map((house) => (
            <div className="col-md-3 col-sm-6 mb-3 px-3" key={house.id}>
              <div className="card h-100">
                <img className="card-img-top img-fluid" src={house.image} alt={house.title} height={160} />
                <div className="card-body">
                  <h5 className="card-title text-center">{house.title}</h5>
                  <p className="card-text text-center">{house.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    
    </>
  );
};

export default AboutPage;
