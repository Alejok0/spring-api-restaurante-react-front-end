import React, { useEffect, useState } from 'react';
import { getOrdenes, deleteOrden } from '../services/OrdenService';
import { useNavigate } from 'react-router-dom';

const ListaOrdenesComponent = () => {
    const [ordenes, setOrdenes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        cargarOrdenes();
    }, []);

    const cargarOrdenes = async () => {
        try {
            const response = await getOrdenes();
            console.log("Datos recibidos:", response.data); // Depuración
            setOrdenes(response.data);
        } catch (error) {
            console.error("Error al obtener las órdenes:", error);
        }
    };

    const editarOrden = (id) => {
        navigate(`/editar-orden/${id}`);
    };

    const eliminarOrdenHandler = async (id) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar esta orden?")) {
            try {
                await deleteOrden(id);
                cargarOrdenes();
            } catch (error) {
                console.error("Error al eliminar la orden:", error);
            }
        }
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Lista de Órdenes</h1>
            <div className="mb-3">
                <button className="btn btn-success" onClick={() => navigate('/agregar-orden')}>
                    Agregar Orden
                </button>
            </div>
            <div className="table-responsive">
                <table className="table table-striped table-hover table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th>ID Orden</th>
                            <th>ID Mesero</th>
                            <th>Fecha y Hora</th>
                            <th>Estado</th>
                            <th>Total</th>
                            <th>Editar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordenes.length > 0 ? (
                            ordenes.map((orden) => (
                                <tr key={orden.id_orden}>
                                    <td>{orden.id_orden}</td>
                                    <td>{orden.id_mesero}</td>
                                    <td>{orden.fecha_hora}</td>
                                    <td>{orden.estado}</td>
                                    <td>{orden.total}</td>
                                    <td>
                                        <button 
                                            className="btn btn-warning" 
                                            onClick={() => editarOrden(orden.id_orden)}>
                                            Editar
                                        </button>
                                    </td>
                                    <td>
                                        <button 
                                            className="btn btn-light text-danger border border-warning" 
                                            onClick={() => eliminarOrdenHandler(orden.id_orden)}>
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="text-center">No hay órdenes disponibles</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListaOrdenesComponent;
