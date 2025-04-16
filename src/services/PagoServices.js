// services/PagoService.js
import axios from "axios";

const BASE_URL = "http://localhost:8085/restaurante";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Pagos
export const getPagos = () => api.get("/pagos");
export const getPagoById = (id) => api.get(`/pagos/${id}`);
export const createPago = (pago) => api.post("/pagos", pago);
export const updatePago = (id, pago) => api.put(`/pagos/${id}`, pago);
export const deletePago = (id) => api.delete(`/pagos/${id}`);
