import React, { useState } from "react";
import "../css/Toolbar.css";
import OptionButtons from "./OptionButtons";
import NameCar from "./NameCar";
import { car } from "../assets/icons8";

const BuildToolbar = ({ open, setOpen }) => {
  const [carBuild, setCarBuild] = useState({
    name: "",
    wheels: [
      {
        name: "",
        src: "",
        convertible: false,
        price: "",
      },
    ],
    interior: [
      {
        name: "",
        src: "",
        convertible: false,
        price: "",
      },
    ],
    exterior: [
      {
        name: "",
        src: "",
        convertible: false,
        price: "",
      },
    ],
    roof: [
      {
        name: "",
        src: "",
        convertible: false,
        price: "",
      },
    ],
    convertible: false,
    pricepoint: "",
  });

  const handleCheckBox = () => {
    setCarBuild({ ...carBuild, convertible: !carBuild.convertible });
  };

  return (
    <div className="toolbar-container">
      <div>
        <fieldset className="convertible-message">
          <div>
            <input
              type="checkbox"
              id="terms"
              name="terms"
              onClick={handleCheckBox}
            />
          </div>
          <div style={{ marginLeft: "1rem" }}>Convertible?</div>
        </fieldset>
      </div>
      <div>
        <OptionButtons
          setOpen={setOpen}
          open={open}
          carBuild={carBuild}
          setCarBuild={setCarBuild}
        />
      </div>
      <div className="car-creation">
        <NameCar carBuild={carBuild} />
      </div>
    </div>
  );
};

export default BuildToolbar;
