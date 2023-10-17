import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/ListingCard.css";
import { icons8, exterior, roof, wheel, interior } from "../assets";

// export {
//   car,
//   carSeat,
//   convertible,
//   fail,
//   money,
//   moneybag,
//   paintbrush,
//   roof,
//   smileyFace,
//   success,
//   wheel,
// };

const ListingCard = (props) => {
  const [car, setCar] = useState({
    id: 0,
    name: "",
    exterior: "",
    wheels: "",
    roof: "",
    interior: "",
    convertible: false,
    pricepoint: "$65000",
  });

  useEffect(() => {
    console.log("listing");
    setCar({
      id: props.id,
      name: props.name,
      exterior: props.exterior,
      wheels: props.wheels,
      roof: props.roof,
      interior: props.interior,
      convertible: props.convertible,
      pricepoint: props.pricepoint,
    });
  }, [props]);

  if (car) {
    console.log(car);
  }

  // car,
  // carSeat,
  // convertible,
  // fail,
  // money,
  // moneybag,
  // paintbrush,
  // roof,
  // smileyFace,
  // success,
  // wheel,

  // export {
  //   car,
  //   carSeat,
  //   convertibleImage,
  //   fail,
  //   money,
  //   moneybag,
  //   paintbrush,
  //   roof,
  //   smileyFace,
  //   success,
  //   wheel,
  // };

  return car ? (
    <article className="card">
      <header>
        <div className="header-content">
          {car.convertible ? (
            <img src={icons8.convertible} alt={`${icons8.convertible}`} />
          ) : (
            <img src={icons8.car} alt={`${icons8.car}`} />
          )}
          <h3>{car.name}</h3>
        </div>
      </header>
      <div className="card-content">
        <div className="left-container">
          <div className="card-item">
            <img src={icons8.paintbrush} alt={`${icons8.paintbrush}`} />
            <p>
              <div>Exterior:</div>
            </p>
            <p>{car.exterior}</p>
          </div>
          <div className="card-item">
            <img src={icons8.roof} alt={`${icons8.roof}`} />
            <p>
              <div>Roof:</div>
            </p>
            <p>{car.roof}</p>
          </div>
        </div>
        <div className="middle-container">
          <div className="card-item">
            <img src={icons8.wheel} alt={`${icons8.wheel}`} />
            <p>
              <div>Wheels:</div>
              <div>{car.wheels}</div>
            </p>
          </div>
          <div className="card-item">
            <img src={icons8.carSeat} alt={`${icons8.carSeat}`} />
            <p>
              <div>Interior:</div>
            </p>
            <p>{car.interior}</p>
          </div>
        </div>
        <div className="right-container">
          <div className="card-item">
            <img src={icons8.moneybag} alt={`${icons8.moneybag}`} />
            <p style={{ fontWeight: "bold" }}>{car.pricepoint}</p>
          </div>
          <Link to={"/details/" + car.id}>
            <button className="details-button" style={{ width: "14rem" }}>
              Details
            </button>
          </Link>
        </div>
      </div>
    </article>
  ) : (
    <div>no cars</div>
  );
};
export default ListingCard;
