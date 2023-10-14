import CustomCar from '../models/customCar';

//show all custom cars
const index = async (req, res, next) => {
  try {
    const customCars = await CustomCar.findAll();
    res.status(200).json(customCars.rows);
  } catch (error) {
    next(error);
  }
}

//show one custom car
const show = async (req, res, next) => {
    try {
        const { id } = req.params;
        const customCar = await CustomCar.findOne(id);
        res.status(200).json(customCar.rows[0]);
    } catch (error) {
        next(error);
    }
}

//create a new custom car
const create = async (req, res, next) => {
    try {
        const { carName, exterior, wheels, roof, interior, pricepoint } = req.body;
        const customCar = await CustomCar.create(carName, exterior, wheels, roof, interior, pricepoint);
        res.status(201).json(customCar.rows[0]);
    } catch (error) {
        next(error);
    }
}

//update an existing custom car
const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { carName, exterior, wheels, roof, interior, pricepoint } = req.body;
        const customCar = await CustomCar.update(id, carName, exterior, wheels, roof, interior, pricepoint);
        res.status(200).json(customCar.rows[0]);
    } catch (error) {
        next(error);
    }
}      

//delete an existing custom car
const deleteCustomCar = async (req, res, next) => {
    try {
        const { id } = req.params;
        await CustomCar.delete(id);
        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}