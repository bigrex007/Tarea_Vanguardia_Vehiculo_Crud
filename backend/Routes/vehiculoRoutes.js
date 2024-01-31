import express from 'express';
const router = express.Router();
import {vehiculoController} from '../Controllers/vehiculoController.js';

// Ruta para crear un nuevo vehículo (POST)
router.post('/', vehiculoController.crearVehiculo);

// Ruta para obtener todos los vehículos (GET)
router.get('/', vehiculoController.obtenerVehiculos);

// Ruta para obtener un vehículo específico por ID (GET)
router.get('/:id', vehiculoController.obtenerVehiculoPorId);

// Ruta para actualizar un vehículo por ID (PUT)
router.put('/:id', vehiculoController.actualizarVehiculo);

// Ruta para eliminar un vehículo por ID (DELETE)
router.delete('/:id', vehiculoController.eliminarVehiculo);

export { router as vehiculoRoutes };