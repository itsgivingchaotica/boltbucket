import express from "express";

import CustomCarsController from "../controllers/customCars.js";

const router = express.Router();

//get custom cars data
router.get("/customcars", CustomCarsController.index);
router.get("/customcars/:id", CustomCarsController.show);

//routes to create, update, and delete custom cars
router.post("/customcars", CustomCarsController.create);
router.patch("/customcars/:id", CustomCarsController.update);
router.delete("/customcars/:id", CustomCarsController.delete);

export default router;
