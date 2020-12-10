"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// import path from "path";
const express_1 = __importDefault(require("express"));
// import { librosRouter } from './routes';
const libros_routes_1 = require("./routes/libros.routes");
//Instanciar el framework de express
const app = express_1.default();
app.use(express_1.default.json());
// Intanciar las rutas
app.use('/biblio', libros_routes_1.librosRoutes.router);
app.get('/', (req, res) => {
    res.status(200).send('<h2>llama a la ruta específica</h2>');
});
//Instanciar el puerto
app.set('port', 3005);
const server = app.listen(app.get('port'), () => {
    console.log(`The server is runing on port ${app.get('port')}`);
});
