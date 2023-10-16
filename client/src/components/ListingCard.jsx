import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/ListingCard.css";

const Card = (props) => {
  const [car, setCar] = useState({
    id: 0,
    name: "",
    exterior: "",
    wheels: "",
    roof: "",
    interior: "",
    convertible: false,
    pricepoint: '$65000',
  });

  useEffect(() => {
    setCar({
      id: props.id,
      name: props.name,
      exterior: props.extesrior,
      wheels: props.wheels,
      roof: props.roof,
      interior: props.interior,
      convertible: props.convertible,
      pricepoint: props.pricepoint,
    });
  }, [props]);

  return (
    <div className="card">
      <div className="top-container">
        <Link to={"/edit/" + car.id}>
          <img src={more} />
        </Link>
      </div>
      <div className="bottom-container">
        <h3>{car.name}</h3>
        <p>{"Price: " + car.pricepoint}</p>
        <p>{"Great For: " + gift.audience}</p>
        <Link to={"/gift/" + gift.id}>
          <a>Read More →</a>
        </Link>
      </div>
    </div>
  );
};

export default Card;
