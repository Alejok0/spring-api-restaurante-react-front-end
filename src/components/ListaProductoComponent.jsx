import React, { useEffect, useState } from 'react';
import { getProductos, deleteProducto } from '../services/ProductoServices';
import { useNavigate } from 'react-router-dom';

const ListaProductoComponent = () => {
    const [productos, setProductos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        cargarProductos();
    }, []);

    const cargarProductos = async () => {
        try {
            const response = await getProductos();
            console.log("Datos recibidos:", response.data); // Depuración
            setProductos(response.data);
        } catch (error) {
            console.error("Error al obtener los productos:", error);
        }
    };

    const editarProducto = (id) => {
        navigate(`/editar-producto/${id}`);
    };

    const eliminarProductoHandler = async (id) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar este producto?")) {
            try {
                await deleteProducto(id);
                cargarProductos();
            } catch (error) {
                console.error("Error al eliminar el producto:", error);
            }
        }
    };

    return (
        <div className="container mt-4">
        <h1 className="text-center mb-4">Lista de Productos</h1>
        <div className="mb-3">
        <button className="btn btn-success" onClick={() => navigate('/agregar-producto')}>
        Agregar Producto
        </button>
        </div>
        <div className="table-responsive">
        <table className="table table-striped table-hover table-bordered">
        <thead className="table-dark">
        <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Descripción</th>
        <th>Precio</th>
        <th>Stock</th>
        <th>Estado</th>
        <th>Editar</th>
        <th>Eliminar</th>
        </tr>
        </thead>
        <tbody>
        {productos.length > 0 ? (
            productos.map((producto) => (
                <tr key={producto.id_producto}>
                <td>{producto.id_producto}</td>
                <td>{producto.nombre}</td>
                <td>{producto.descripcion}</td>
                <td>${producto.precio.toFixed(2)}</td>
                <td>{producto.cantidad_stock}</td>
                <td>{producto.estado}</td>
                <td>
                <button 
                className="btn btn-warning" 
                onClick={() => editarProducto(producto.id_producto)}>
                Editar
                </button>
                </td>
                <td>
                <button 
                className="btn btn-light text-danger border border-warning" 
                onClick={() => eliminarProductoHandler(producto.id_producto)}>
                Eliminar
                </button>
                </td>
                </tr>
                ))
            ) : (
            <tr>
            <td colSpan="8" className="text-center">No hay productos disponibles</td>
            </tr>
            )}
            </tbody>
            </table>
            </div>
            </div>
            );
};

export default ListaProductoComponent;
