import React, { useState } from "react";
import "../css/Toolbar.css";
import CarsAPI from "../services/CarsAPI";

const NameCar = (carBuild) => {
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async () => {
    try {
      await CarsAPI.createCar(carBuild);
    } catch (error) {
      setErrorMessage(
        "Some options are only available for the convertible model."
      );
    }
  };
  return (
    <div>
      <form className="name-car">
        <input
          type="text"
          id="carname"
          name="carname"
          placeholder="Choose a name"
          required
          className="white-placeholder"
        />
        <button
          type="submit"
          className="create-car-button"
          onClick={handleSubmit}
        >
          Create
        </button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default NameCar;
