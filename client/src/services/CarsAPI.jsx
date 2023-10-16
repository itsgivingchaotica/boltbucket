const API_BASE_URL = "http://localhost:3000/api";

// Function to get all custom cars
const getAllCars = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/customcars`);
    if (!response.ok) {
      throw new Error(`Failed to fetch cars: ${response.status}`);
    }
    return response.json();
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

const createCar = async (
  carName,
  exterior,
  wheels,
  roof,
  interior,
  pricepoint
) => {
  try {
    const response = await fetch(`${API_BASE_URL}/customcars`, {
      method: "POST",
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
      throw new Error(`Failed to create car: ${response.status}`);
    }
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
