import React, { useEffect, useState } from "react";
import "../App.css";
import ListingCard from "../components/ListingCard";
import CarsAPI from "../services/CarsAPI";

const ViewCars = () => {
  const [customCars, setCustomCars] = useState([]);

  useEffect(() => {
    const fetchCustomCars = async () => {
      try {
        // const response = await CarsAPI.getAllCars();
        const response = await fetch("http://localhost:3000/api/customcars");
        console.log(response);

        // Check the HTTP status code for success (200)
        if (response.ok) {
          const cars = await response.json();
          setCustomCars(cars);
        } else {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      } catch (error) {
        // Handle errors (e.g., network issues, invalid JSON)
        console.error(error);
      }
    };
    fetchCustomCars();
  }, []);

  return (
    <div>
      {customCars.map((car) => (
        <ListingCard
          key={car.id}
          id={car.id}
          name={car.name}
          exterior={car.exterior}
          wheels={car.wheels}
          roof={car.roof}
          interior={car.interior}
          convertible={car.convertible}
          pricepoint={car.pricepoint}
        />
      ))}
    </div>
  );
};

export default ViewCars;
