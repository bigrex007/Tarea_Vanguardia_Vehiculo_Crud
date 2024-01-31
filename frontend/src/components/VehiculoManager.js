import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './VehiculoManager.css';

const VehiculoManager = () => {
    const [vehiculos, setVehiculos] = useState([]);
    const [vehiculo, setVehiculo] = useState({ marca: '', modelo: '', año: '', color: '' });
    const [vehiculoId, setVehiculoId] = useState('');

    useEffect(() => {
        cargarVehiculos();
    }, []);

    const cargarVehiculos = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/vehiculos');
            setVehiculos(response.data);
        } catch (error) {
            console.error('Error al obtener vehículos', error);
        }
    };

    const handleChange = (e) => {
        setVehiculo({ ...vehiculo, [e.target.name]: e.target.value });
    };

    const handleIdChange = (e) => {
        setVehiculoId(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (vehiculoId) {
                // Actualizar vehículo
                await axios.put(`http://localhost:3000/api/vehiculos/${vehiculoId}`, vehiculo);
            } else {
                // Crear vehículo
                await axios.post('http://localhost:3000/api/vehiculos', vehiculo);
            }
            setVehiculo({ marca: '', modelo: '', año: '', color: '' });
            setVehiculoId('');
            cargarVehiculos();
        } catch (error) {
            console.error('Hubo un error al manejar el vehículo', error);
        }
    };

    const eliminarVehiculo = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/vehiculos/${id}`);
            cargarVehiculos();
        } catch (error) {
            console.error('Error al eliminar vehículo', error);
        }
    };

    // Métodos para obtener y eliminar vehículos aquí...

    return (
        <div className="vehiculo-manager">
            <form onSubmit={handleSubmit} className="vehiculo-form">
                <input
                    type="text"
                    name="marca"
                    value={vehiculo.marca}
                    onChange={handleChange}
                    placeholder="Marca"
                />
                <input
                    type="text"
                    name="modelo"
                    value={vehiculo.modelo}
                    onChange={handleChange}
                    placeholder="Modelo"
                />
                <input
                    type="number"
                    name="año"
                    value={vehiculo.año}
                    onChange={handleChange}
                    placeholder="Año"
                />
                <input
                    type="text"
                    name="color"
                    value={vehiculo.color}
                    onChange={handleChange}
                    placeholder="Color"
                />
                <input
                    type="text"
                    value={vehiculoId}
                    onChange={handleIdChange}
                    placeholder="ID de Vehículo (para actualizar)"
                />
                <button type="submit">{vehiculoId ? 'Actualizar Vehículo' : 'Crear Vehículo'}</button>
            </form>
            {/* Botones y funciones adicionales para obtener y eliminar vehículos */}
            <table className="table-vehiculos">
                <thead>
                    <tr>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Año</th>
                        <th>Color</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {vehiculos.map((v) => (
                        <tr key={v._id}>
                            <td>{v.marca}</td>
                            <td>{v.modelo}</td>
                            <td>{v.año}</td>
                            <td>{v.color}</td>
                            <td>
                                <button onClick={() => setVehiculoId(v._id)}>Editar</button>
                                <button onClick={() => eliminarVehiculo(v._id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VehiculoManager;