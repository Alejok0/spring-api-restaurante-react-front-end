// services/EmpleadoService.js
import axios from "axios";

const BASE_URL = "http://localhost:8085/restaurante";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Empleados
export const getEmpleados = () => api.get("/empleados");
export const getEmpleadoById = (id) => api.get(`/empleados/${id}`);
export const createEmpleado = (empleado) => api.post("/empleados", empleado);
export const updateEmpleado = (id, empleado) => api.put(`/empleados/${id}`, empleado);
export const deleteEmpleado = (id) => api.delete(`/empleados/${id}`);
