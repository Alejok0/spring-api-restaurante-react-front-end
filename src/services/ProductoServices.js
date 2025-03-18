import axios from "axios";

const BASE_URL = "http://localhost:8085/restaurante";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Productos
export const getProductos = () => api.get("/productos");
export const getProductoById = (id) => api.get(`/productos/${id}`);
export const createProducto = (producto) => api.post("/productos", producto);
export const updateProducto = (id, producto) => api.put(`/productos/${id}`, producto);
export const deleteProducto = (id) => api.delete(`/productos/${id}`);
