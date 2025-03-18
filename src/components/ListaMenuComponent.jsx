import React, { useEffect, useState } from 'react';
import { getMenus, deleteMenu } from '../services/MenuServices';
import { useNavigate } from 'react-router-dom';

const ListaMenuComponent = () => {
    const [menus, setMenus] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        cargarMenus();
    }, []);

    const cargarMenus = async () => {
        try {
            const response = await getMenus();
            console.log("Datos recibidos:", response.data); // Depuración
            setMenus(response.data);
        } catch (error) {
            console.error("Error al obtener los menús:", error);
        }
    };

    const editarMenu = (id) => {
        navigate(`/editar-menu/${id}`);
    };

    const eliminarMenuHandler = async (id) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar este menú?")) {
            try {
                await deleteMenu(id);
                cargarMenus();
            } catch (error) {
                console.error("Error al eliminar el menú:", error);
            }
        }
    };

    return (
        <div className="container mt-4">
        <h1 className="text-center mb-4">Lista de Menús</h1>
        <div className="mb-3">
        <button className="btn btn-success" onClick={() => navigate('/agregar-menu')}>
        Agregar Menu
        </button>
        </div>
        <div className="table-responsive">
        <table className="table table-striped table-hover table-bordered">
        <thead className="table-dark">
        <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Descripción</th>
        <th>Editar</th>
        <th>Eliminar</th>
        </tr>
        </thead>
        <tbody>
        {menus.length > 0 ? (
            menus.map((menu) => (
                <tr key={menu.id_menu}>
                <td>{menu.id_menu}</td>
                <td>{menu.nombre}</td>
                <td>{menu.descripcion}</td>
                <td>
                <button 
                className="btn btn-warning" 
                onClick={() => editarMenu(menu.id_menu)}>
                Editar
                </button>
                </td>
                <td>
                <button 
                className="btn btn-light text-danger border border-warning" 
                onClick={() => eliminarMenuHandler(menu.id_menu)}>
                Eliminar
                </button>
                </td>
                </tr>
                ))
            ) : (
            <tr>
            <td colSpan="5" className="text-center">No hay menús disponibles</td>
            </tr>
            )}
            </tbody>
            </table>
            </div>
            </div>
            );
};

export default ListaMenuComponent;
