import React, { useEffect, useState } from 'react';
import { getEmpleados, deleteEmpleado } from '../services/EmpleadoServices';
import { useNavigate } from 'react-router-dom';

const ListaEmpleadosComponent = () => {
    const [empleados, setEmpleados] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        cargarEmpleados();
    }, []);

    const cargarEmpleados = async () => {
        try {
            const response = await getEmpleados();
            console.log("Datos recibidos:", response.data); // Depuración
            setEmpleados(response.data);
        } catch (error) {
            console.error("Error al obtener los empleados:", error);
        }
    };

    const editarEmpleado = (id) => {
        navigate(`/editar-empleado/${id}`);
    };

    const eliminarEmpleadoHandler = async (id) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar este empleado?")) {
            try {
                await deleteEmpleado(id);
                cargarEmpleados();
            } catch (error) {
                console.error("Error al eliminar el empleado:", error);
            }
        }
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Lista de Empleados</h1>
            <div className="mb-3">
                <button className="btn btn-success" onClick={() => navigate('/agregar-empleado')}>
                    Agregar Empleado
                </button>
            </div>
            <div className="table-responsive">
                <table className="table table-striped table-hover table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Rol</th>
                            <th>Salario</th>
                            <th>Fecha de Contratación</th>
                            <th>Editar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empleados.length > 0 ? (
                            empleados.map((empleado) => (
                                <tr key={empleado.id_empleado}>
                                    <td>{empleado.id_empleado}</td>
                                    <td>{empleado.nombre}</td>
                                    <td>{empleado.rol}</td>
                                    <td>{empleado.salario}</td>
                                    <td>{empleado.fecha_contratacion}</td>
                                    <td>
                                        <button 
                                            className="btn btn-warning" 
                                            onClick={() => editarEmpleado(empleado.id_empleado)}>
                                            Editar
                                        </button>
                                    </td>
                                    <td>
                                        <button 
                                            className="btn btn-light text-danger border border-warning" 
                                            onClick={() => eliminarEmpleadoHandler(empleado.id_empleado)}>
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="text-center">No hay empleados disponibles</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListaEmpleadosComponent;
