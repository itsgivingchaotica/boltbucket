import { calculatePrice } from "../utilities/priceCalculation";
const API_BASE_URL = "http://localhost:3000/api";

// Function to get all custom cars
const getAllCars = async () => {
  try {
    console.log("Getting all cars from CarsAPI");
    const response = await fetch(`${API_BASE_URL}/customcars`);
    if (!response.ok) {
      throw new Error(`Failed to fetch cars: ${response.status}`);
    }
    const data = await response.json();
    console.log("Received car data:", data); // Log the received data
    return data;
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw error;
  }
};

// Function to get a custom car by its ID
const getCarById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/customcars/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch car with ID ${id}: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error(`Error fetching car with ID ${id}:`, error);
    throw error;
  }
};

const createCar = async (carBuild) => {
  const { name, exterior, wheels, roof, interior, pricepoint } = carBuild;
  const newPrice = calculatePrice(carBuild);
  if (newPrice === -1) {
    throw new Error("Invalid car build");
  }
  try {
    const response = await fetch(`${API_BASE_URL}/customcars`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        exterior: exterior[0].name,
        wheels: wheels[0].name,
        roof: roof[0].name,
        interior: interior[0].name,
        convertible,
        pricepoint: newPrice,
      }),
    });
    if (!response.ok) {
      throw new Error(`Failed to create car: ${response.status}`);
    }
    console.log(response.json());
    return response.json();
  } catch (error) {
    console.error("Error creating car:", error);
    throw error;
  }
};

const updateCar = async (
  id,
  carName,
  exterior,
  wheels,
  roof,
  interior,
  pricepoint
) => {
  try {
    const response = await fetch(`${API_BASE_URL}/customcars/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        carName,
        exterior,
        wheels,
        roof,
        interior,
        pricepoint,
      }),
    });
    if (!response.ok) {
      throw new Error(`Failed to update car: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error updating car:", error);
    throw error;
  }
};

const deleteCar = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/customcars/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`Failed to delete car: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error deleting car:", error);
    throw error;
  }
};

export default {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
};
