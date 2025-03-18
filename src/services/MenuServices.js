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

// Menús
export const getMenus = () => api.get("/menus");
export const getMenuById = (id) => api.get(`/menus/${id}`);
export const createMenu = (menu) => api.post("/menus", menu);
export const updateMenu = (id, menu) => api.put(`/menus/${id}`, menu);
export const deleteMenu = (id) => api.delete(`/menus/${id}`);

// Asociación Menu-Producto
export const addProductoToMenu = (menuId, producto) => api.post(`/menus/${menuId}/productos`, producto);
export const removeProductoFromMenu = (menuId, productoId) => api.delete(`/menus/${menuId}/productos/${productoId}`);