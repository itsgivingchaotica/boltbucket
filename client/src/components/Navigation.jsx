import React, { useState } from "react";
import "../App.css";
import "../css/Navigation.css";
import BuildToolbar from "./BuildToolbar";

const Navigation = () => {
  const [customize, setCustomize] = useState(false);
  const [open, setOpen] = useState(false);

  const handleShowToolbar = (e) => {
    e.preventDefault();
    setCustomize(!customize);
  };

  const handleCreateCar = async () => {
    try {
      CarsAPI.createCar(carBuild);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(
        "Some options are only available for the convertible model."
      );
    }
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <h1>Bolt Bucket 🏎️</h1>
          </li>
        </ul>

        <ul>
          <li>
            <a href="/" role="button" onClick={handleShowToolbar}>
              Customize
            </a>
          </li>
          <li>
            <a href="/customcars" role="button">
              View Cars
            </a>
          </li>
        </ul>
      </nav>
      {customize ? (
        <div>
          <BuildToolbar
            open={open}
            setOpen={setOpen}
            handleCreateCar={handleCreateCar}
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Navigation;
