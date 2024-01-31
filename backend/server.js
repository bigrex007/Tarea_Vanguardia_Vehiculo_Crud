import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import {vehiculoRoutes} from "./Routes/vehiculoRoutes.js";

const app = express();
const PORT = 5000;
const url = 'mongodb+srv://test:123@testdatabase.oh49bmu.mongodb.net/Vehiculos?retryWrites=true&w=majority';

mongoose.connect(url).then(() => {
    console.log('Connected to mongodb');
}).catch((err) => {
    console.log(err);
})

app.use(bodyParser.json());

app.use('/api/Vehiculos', vehiculoRoutes);

app.listen(PORT, () => {
    console.log(`Backend API listening on port ${PORT}.`);
});