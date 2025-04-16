// services/OrdenService.js
import axios from "axios";

const BASE_URL = "http://localhost:8085/restaurante";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Órdenes
export const getOrdenes = () => api.get("/ordenes");
export const getOrdenById = (id) => api.get(`/ordenes/${id}`);
export const createOrden = (orden) => api.post("/ordenes", orden);
export const updateOrden = (id, orden) => api.put(`/ordenes/${id}`, orden);
export const deleteOrden = (id) => api.delete(`/ordenes/${id}`);
