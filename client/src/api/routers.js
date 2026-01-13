import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/v1', 
});

// GET
export const fetchRouters = async () => {
  try {
    const response = await api.get('/routers'); 
    return response.data;
  } catch (error) {
    console.error("Error fetching routers:", error);
    return { routers: [] };
  }
};

// POST
export const createRouter = async (routerData) => {
  try {
    const response = await api.post('/routers', routerData);
    return response.data;
  } catch (error) {
    console.error("Error creating router:", error);
    throw error;
  }
};

// DELETE
export const deleteRouter = async (id) => {
  try {
    const response = await api.delete(`/routers/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting router:", error);
    throw error;
  }
};

// PATCH
export const updateRouter = async (id, updatedData) => {
  try {
    const response = await api.patch(`/routers/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating router:", error);
    throw error;
  }
};