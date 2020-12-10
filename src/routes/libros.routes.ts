import { Router } from "express";
import { librosController } from '../controllers/libros.controller';

class LibrosRoutes {

    public router: Router = Router();

    constructor() {
        this.router.get('/', librosController.getLibros);
        this.router.post('/', librosController.addLibros);
        this.router.put('/', librosController.updateLibros);
        this.router.delete('/:id', librosController.deleteLibros);
    }
}

export const librosRoutes = new LibrosRoutes();