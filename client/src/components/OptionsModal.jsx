import React, { useState } from "react";
import { wheel, roof, interior, exterior } from "../assets";
import "../css/OptionsModal.css";
import { icons8 } from "../assets";
import CarsAPI from "../services/CarsAPI";

const OptionsModal = ({
  open,
  setOpen,
  category,
  setCategory,
  setCarBuild,
  carBuild,
  setErrorMessage,
}) => {
  const wheelImages = Object.values(wheel); // Use the wheel asset
  const roofsImages = Object.values(roof);
  const interiorImages = Object.values(interior);
  const exteriorImages = Object.values(exterior);

  const handleOpen = () => {
    setOpen(!open);
    if (!open) {
      setCategory("");
    }
  };

  const handleSelect = (image, categoryOf) => {
    const updatedCarBuild = { ...carBuild };

    if (categoryOf === "wheels") {
      updatedCarBuild.wheels[0] = { ...image };
    } else if (categoryOf === "roof") {
      updatedCarBuild.roof[0] = { ...image };
    } else if (categoryOf === "interior") {
      updatedCarBuild.interior[0] = { ...image };
    } else if (categoryOf === "exterior") {
      updatedCarBuild.exterior[0] = { ...image };
    }

    setCarBuild(updatedCarBuild);
    setOpen(!open);
  };

  return (
    <dialog open>
      <article>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {category === "wheels" ? (
            <div>Wheels</div>
          ) : category === "roof" ? (
            <div>Roof</div>
          ) : category === "interior" ? (
            <div>Interior</div>
          ) : category === "exterior" ? (
            <div>Exterior</div>
          ) : (
            <></>
          )}
          <a
            href="#close"
            aria-label="Close"
            className="close"
            onClick={handleOpen}
          ></a>
        </header>
        <p>
          {category === "wheels" ? (
            wheelImages.map((image, index) => (
              <div className="image-container" key={index}>
                <div>
                  <h3>{image.name}</h3>
                </div>
                <div className="options-list-item">
                  <div>
                    <img src={image.src} alt={image.name} />
                  </div>
                  <div>
                    <div className="custom-price">
                      <img src={icons8.money} style={{ width: "2rem" }} />
                      <div>{image.price}</div>
                    </div>
                    {image.convertible === true ? <>Convertible Only</> : <></>}
                    <button
                      style={{ marginLeft: "3rem", alignItems: "center" }}
                      onClick={() => handleSelect(image, "wheels")}
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : category === "roof" ? (
            roofsImages.map((image, index) => (
              <div className="image-container" key={index}>
                <div>
                  <h3>{image.name}</h3>
                </div>
                <div className="options-list-item">
                  <div>
                    <img src={image.src} alt={image.name} />
                  </div>
                  <div>
                    <div className="custom-price">
                      <img src={icons8.money} style={{ width: "2rem" }} />
                      <div>{image.price}</div>
                    </div>
                    {image.convertible === true ? <>Convertible Only</> : <></>}
                    <button
                      style={{ marginLeft: "3rem", alignItems: "center" }}
                      onClick={() => handleSelect(image, "roof")}
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : category === "interior" ? (
            interiorImages.map((image, index) => (
              <div className="image-container" key={index}>
                <div>
                  <h3>{image.name}</h3>
                </div>
                <div className="options-list-item">
                  <div>
                    <img src={image.src} alt={image.name} />
                  </div>
                  <div>
                    <div className="custom-price">
                      <img src={icons8.money} style={{ width: "2rem" }} />
                      <div>{image.price}</div>
                    </div>
                    {image.convertible === true ? <>Convertible Only</> : <></>}
                    <button
                      style={{ marginLeft: "3rem", alignItems: "center" }}
                      onClick={() => handleSelect(image, "interior")}
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : category === "exterior" ? (
            exteriorImages.map((image, index) => (
              <div className="image-container" key={index}>
                <div>
                  <h3>{image.name}</h3>
                </div>
                <div className="options-list-item">
                  <div>
                    <img src={image.src} alt={image.name} />
                  </div>
                  <div>
                    <div className="custom-price">
                      <img src={icons8.money} style={{ width: "2rem" }} />
                      <div>{image.price}</div>
                    </div>
                    <div className="convertible-option">
                      {image.convertible === true ? (
                        <>Convertible Only</>
                      ) : (
                        <></>
                      )}
                    </div>
                    <button
                      style={{ marginLeft: "3rem", alignItems: "center" }}
                      onClick={() => handleSelect(image, "exterior")}
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <></>
          )}
        </p>
      </article>
    </dialog>
  );
};

export default OptionsModal;
