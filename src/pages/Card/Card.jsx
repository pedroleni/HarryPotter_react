
import React, { useContext } from "react";
import { HPContext } from "../../context/context";
import "./Card.css";


const Card = () => {
  const { cards, user } = useContext(HPContext);
  
  return (

    <section className="card">

            {
            cards.length > 0 ? (
              cards.map((card) => (
                card.image == ""?
                <></> : (<figure className="card-portrait">
                <img className="image_character" src={card.image} alt={card.name} />
                <h2>{card.name}</h2>
                <h3>House: {card.house}</h3>
                <p>Actor: {card.actor}</p>
              </figure>)
  
              ))
            ) : (
              <p>Cargando cartas...</p>
            )}
    </section>


  );
};

export default Card;
