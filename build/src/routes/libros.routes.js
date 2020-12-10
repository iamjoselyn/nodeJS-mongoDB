"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.librosRoutes = void 0;
const express_1 = require("express");
const libros_controller_1 = require("../controllers/libros.controller");
class LibrosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.router.get('/', libros_controller_1.librosController.getLibros);
        this.router.post('/', libros_controller_1.librosController.addLibros);
        this.router.put('/:id', libros_controller_1.librosController.updateLibros);
        this.router.delete('/:id', libros_controller_1.librosController.deleteLibros);
    }
}
exports.librosRoutes = new LibrosRoutes();
