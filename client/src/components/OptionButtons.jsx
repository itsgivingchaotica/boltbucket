import React, { useState } from "react";
import "../css/Toolbar.css";
import OptionsModal from "./OptionsModal";

const OptionButtons = ({ open, setOpen, carBuild, setCarBuild }) => {
  const [category, setCategory] = useState("");

  const handleSetOpen = (category) => {
    return (e) => {
      e.preventDefault();
      setOpen(!open);
      setCategory(category);
    };
  };
  return (
    <div className="option-buttons">
      <button onClick={handleSetOpen("exterior")}>Exterior</button>
      <button onClick={handleSetOpen("roof")}>Roof</button>
      <button onClick={handleSetOpen("wheels")}>Wheels</button>
      <button onClick={handleSetOpen("interior")}>Interior</button>
      {open ? (
        <OptionsModal
          open={open}
          setOpen={setOpen}
          category={category}
          setCategory={setCategory}
          carBuild={carBuild}
          setCarBuild={setCarBuild}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default OptionButtons;
