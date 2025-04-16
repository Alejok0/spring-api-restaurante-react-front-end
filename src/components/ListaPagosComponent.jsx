import React, { useEffect, useState } from 'react';
import { getPagos, deletePago } from '../services/PagoServices';
import { useNavigate } from 'react-router-dom';

const ListaPagosComponent = () => {
    const [pagos, setPagos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        cargarPagos();
    }, []);

    const cargarPagos = async () => {
        try {
            const response = await getPagos();
            console.log("Datos recibidos:", response.data); // Depuración
            setPagos(response.data);
        } catch (error) {
            console.error("Error al obtener los pagos:", error);
        }
    };

    const editarPago = (id) => {
        navigate(`/editar-pago/${id}`);
    };

    const eliminarPagoHandler = async (id) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar este pago?")) {
            try {
                await deletePago(id);
                cargarPagos();
            } catch (error) {
                console.error("Error al eliminar el pago:", error);
            }
        }
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Lista de Pagos</h1>
            <div className="mb-3">
                <button className="btn btn-success" onClick={() => navigate('/agregar-pago')}>
                    Agregar Pago
                </button>
            </div>
            <div className="table-responsive">
                <table className="table table-striped table-hover table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th>ID Pago</th>
                            <th>ID Orden</th>
                            <th>Método de Pago</th>
                            <th>Monto</th>
                            <th>Fecha y Hora</th>
                            <th>Editar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pagos.length > 0 ? (
                            pagos.map((pago) => (
                                <tr key={pago.id_pago}>
                                    <td>{pago.id_pago}</td>
                                    <td>{pago.id_orden}</td>
                                    <td>{pago.metodo_pago}</td>
                                    <td>{pago.monto}</td>
                                    <td>{pago.fecha_hora}</td>
                                    <td>
                                        <button 
                                            className="btn btn-warning" 
                                            onClick={() => editarPago(pago.id_pago)}>
                                            Editar
                                        </button>
                                    </td>
                                    <td>
                                        <button 
                                            className="btn btn-light text-danger border border-warning" 
                                            onClick={() => eliminarPagoHandler(pago.id_pago)}>
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="text-center">No hay pagos disponibles</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListaPagosComponent;
