import { pool } from "../config/database.js";

const findAll = () => {
  const query = "SELECT * FROM customCars ORDER BY name ASC";
  return pool.query(query);
};

const findOne = (id) => {
  const query = "SELECT * FROM customCars WHERE id = $1";
  return pool.query(query, [id]);
};

const create = (carName, exterior, wheels, roof, interior, pricepoint) => {
  const query =
    "INSERT INTO customCars (name, exterior, wheels, roof, interior, pricepoint) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
  return pool.query(query, [
    carName,
    exterior,
    wheels,
    roof,
    interior,
    pricepoint,
  ]);
};

const update = (id, carName, exterior, wheels, roof, interior, pricepoint) => {
  const query =
    "UPDATE customCars SET name = $2, exterior = $3, wheels = $4, roof = $5, interior = $6, pricepoint = $7 WHERE id = $1 RETURNING *";
  return pool.query(query, [
    id,
    carName,
    exterior,
    wheels,
    roof,
    interior,
    pricepoint,
  ]);
};

const deleteCar = (id) => {
  const query = "DELETE FROM customCars WHERE id = $1";
  return pool.query(query, [id]);
};

export default {
  findAll,
  findOne,
  create,
  update,
  delete: deleteCar,
};
