import { pool } from "./database.js";
import "./dotenv.js";
import customCarData from "../data/customCars.js";

const createCustomCarsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS customCars;

    CREATE TABLE IF NOT EXISTS customCars (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        exterior VARCHAR(255) NOT NULL,
        roof VARCHAR(255) NOT NULL,
        wheels VARCHAR(255) NOT NULL,
        interior VARCHAR(255) NOT NULL,
        convertible BOOLEAN NOT NULL DEFAULT FALSE,
        pricepoint MONEY NOT NULL
    )
`;

  try {
    await pool.query(createTableQuery);
    console.log("Created customCars table");
  } catch (error) {
    console.log("⚠️ error creating customCars table", error);
  }
};

const seedCustomCarsTable = async () => {
  await createCustomCarsTable();

  customCarData.forEach((customCar) => {
    const insertQuery = {
      text: "INSERT INTO customCars (name, exterior, roof, wheels, interior, convertible, pricepoint) VALUES ($1, $2, $3, $4, $5, $6, $7)",
    };

    const values = [
      customCar.name,
      customCar.exterior,
      customCar.roof,
      customCar.wheels,
      customCar.interior,
      customCar.convertible,
      customCar.pricepoint,
    ];
    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting custom car", err);
        return;
      }

      console.log(`✅ ${customCar.name} added successfully`);
    });
  });
};

seedCustomCarsTable();
