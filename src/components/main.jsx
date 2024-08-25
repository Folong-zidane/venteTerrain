import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.png.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">Découvrez nos offres de logements spacieux !</h5>
              <p className="card-text fs-5 d-none d-sm-block ">
              

Explorez nos annonces pour trouver votre prochain foyer. Nos maisons offrent un espace généreux et des commodités modernes pour répondre à tous vos besoins.
 Que vous recherchiez une maison confortable en ville ou une villa de luxe en bord de mer, nous avons ce qu'il vous faut pour créer des souvenirs inoubliables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
