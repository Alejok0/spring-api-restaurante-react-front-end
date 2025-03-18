import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const MenuComponent = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [estado, setEstado] = useState('activo');
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        if (id) {
            setCargando(true);
            fetch(`http://127.0.0.1:8085/restaurante/menus/${id}`)
                .then(response => response.json())
                .then(data => {
                    setNombre(data.nombre);
                    setDescripcion(data.descripcion);
                    setPrecio(data.precio);
                    setEstado(data.estado);
                    setProductos(data.productos || []);
                    setCargando(false);
                })
                .catch(error => {
                    console.error("Error al obtener los datos del menú:", error);
                    setCargando(false);
                });
        }
    }, [id]);

    const saveMenu = async (e) => {
        e.preventDefault();
        const menu = { nombre, descripcion, precio, estado, productos };

        try {
            if (id) {
                await fetch(`http://127.0.0.1:8085/restaurante/menus/${id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(menu)
                });
            } else {
                await fetch("http://127.0.0.1:8085/restaurante/menus", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(menu)
                });
            }
            navigate('/menu');
        } catch (error) {
            console.error("Error al guardar menú:", error);
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">{id ? "Editar Menú" : "Registrar Menú"}</h2>
            {cargando ? (
                <div className="alert alert-info text-center">Cargando datos...</div>
            ) : (
                <form>
                    <div className="form-group mb-3">
                        <label>Nombre</label>
                        <input type="text" className="form-control" value={nombre} onChange={e => setNombre(e.target.value)} />
                    </div>

                    <div className="form-group mb-3">
                        <label>Descripción</label>
                        <input type="text" className="form-control" value={descripcion} onChange={e => setDescripcion(e.target.value)} />
                    </div>

                    <div className="form-group mb-3">
                        <label>Precio</label>
                        <input type="number" className="form-control" value={precio} onChange={e => setPrecio(e.target.value)} />
                    </div>

                    <div className="form-group mb-3">
                        <label>Estado</label>
                        <select className="form-control" value={estado} onChange={e => setEstado(e.target.value)}>
                            <option value="activo">Activo</option>
                            <option value="inactivo">Inactivo</option>
                        </select>
                    </div>

                    <button type="submit" className="btn btn-warning btn-block mt-3" onClick={saveMenu}>
                        {id ? "Actualizar Menú" : "Registrar Menú"}
                    </button>
                </form>
            )}
        </div>
    );
};

export default MenuComponent;
