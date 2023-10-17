import CustomCar from "../models/customCar.js";

//show all custom cars
const index = async (req, res, next) => {
  console.log("Hello from index");
  try {
    const customCars = await CustomCar.findAll();
    res.status(200).json(customCars.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//show one custom car
const show = async (req, res, next) => {
  try {
    const { id } = req.params;
    const customCar = await CustomCar.findOne(id);
    res.status(200).json(customCar.rows[0]);
  } catch (error) {
    next(error);
  }
};

//create a new custom car
const create = async (req, res, next) => {
  try {
    const {
      carName,
      exterior,
      wheels,
      roof,
      interior,
      convertible,
      pricepoint,
    } = req.body;
    const customCar = await CustomCar.create(
      carName,
      exterior,
      wheels,
      roof,
      interior,
      convertible,
      pricepoint
    );
    res.status(201).json(customCar.rows[0]);
  } catch (error) {
    next(error);
  }
};

//update an existing custom car
const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      carName,
      exterior,
      wheels,
      roof,
      interior,
      convertible,
      pricepoint,
    } = req.body;
    const customCar = await CustomCar.update(
      id,
      carName,
      exterior,
      wheels,
      roof,
      interior,
      convertible,
      pricepoint
    );
    res.status(200).json(customCar.rows[0]);
  } catch (error) {
    next(error);
  }
};

//delete an existing custom car
const deleteCustomCar = async (req, res, next) => {
  try {
    const { id } = req.params;
    await CustomCar.delete(id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

export default {
  index,
  show,
  create,
  update,
  delete: deleteCustomCar,
};
