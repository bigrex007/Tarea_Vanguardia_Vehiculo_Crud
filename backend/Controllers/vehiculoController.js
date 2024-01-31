import {Vehiculo} from '../dbModels/vehiculoModel.js';

export const vehiculoController = {
    // Crear un nuevo vehículo
    async crearVehiculo(req, res) {
        try {
            const nuevoVehiculo = new Vehiculo(req.body);
            await nuevoVehiculo.save();
            res.status(201).send(nuevoVehiculo);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    // Obtener todos los vehículos
    async obtenerVehiculos(req, res) {
        try {
            const vehiculos = await Vehiculo.find({});
            res.send(vehiculos);
        } catch (error) {
            res.status(500).send(error);
        }
    },

    // Obtener un vehículo por ID
    async obtenerVehiculoPorId(req, res) {
        try {
            const vehiculo = await Vehiculo.findById(req.params.id);
            if (!vehiculo) {
                return res.status(404).send();
            }
            res.send(vehiculo);
        } catch (error) {
            res.status(500).send(error);
        }
    },

    // Actualizar un vehículo por ID
    async actualizarVehiculo(req, res) {
        try {
            const vehiculo = await Vehiculo.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
            if (!vehiculo) {
                return res.status(404).send();
            }
            res.send(vehiculo);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    // Eliminar un vehículo por ID
    async eliminarVehiculo(req, res) {
        try {
            const vehiculo = await Vehiculo.findByIdAndDelete(req.params.id);
            if (!vehiculo) {
                return res.status(404).send();
            }
            res.send(vehiculo);
        } catch (error) {
            res.status(500).send(error);
        }
    }
};
