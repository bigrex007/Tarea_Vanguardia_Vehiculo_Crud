import mongoose from 'mongoose';

const vehiculoSchema = new mongoose.Schema({
    marca: {
        type: String,
        required: true,
        trim: true
    },
    modelo: {
        type: String,
        required: true,
        trim: true
    },
    año: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true,
        trim: true
    }
});

export const Vehiculo = mongoose.model('Vehiculo', vehiculoSchema);
