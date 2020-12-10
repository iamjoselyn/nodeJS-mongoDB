import mongoose from "mongoose";
import {Request, Response} from "express";
import Libro from '../models/libros.model';

mongoose.connect(
    `mongodb+srv://JoselynC:${process.env.MATLASPASS}@cluster0.meexu.mongodb.net/biblioteca?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
);

class LibrosController {
    public async getLibros (req: Request, res: Response) {
        try {
            const librosList = await Libro.find();
            res.json(librosList);

        }catch(error) {
            res.json(error);
        }
    }

    public async addLibros (req: Request, res: Response) {
        try {
            const libroToAdd = new Libro();
            libroToAdd.libro = req.body.libro;
            libroToAdd.autor = req.body.autor;

            await libroToAdd.save();

            res.json('nota añadida')

        } catch (err) {
            res.json(err);
        }
    }

    public async updateLibros (req: Request, res: Response) {
        try {
            const updateLibros = await Libro.findByIdAndUpdate(
                {
                    _id: req.body.id
                },
                {
                    libro: req.body.libro,
                    autor: req.body.autor
                }
            );

            res.json({
                message: 'Success! Your book has been updated',
                info: updateLibros
            })
        } catch (err) {
            res.json(err);
        }
    }

    public async deleteLibros (req: Request, res: Response) {
        try {
            const deleteLibro = await Libro.findByIdAndDelete({
                _id: req.params.id
            });

            res.json({
                message: 'Success! The book has been removed',
                info: deleteLibro
            })
        } catch (err) {
            res.json(err);
        }
    }
}
export const librosController = new LibrosController();