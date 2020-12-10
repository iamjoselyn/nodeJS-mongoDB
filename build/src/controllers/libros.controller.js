"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.librosController = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect(`mongodb+srv://JoselynC:${process.env.MATLASPASS}@cluster0.meexu.mongodb.net/biblioteca?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });
class LibrosController {
    async getLibros(req, res) {
        try {
        }
        catch (err) {
            res.json(err);
        }
    }
    async addLibros(req, res) {
        try {
        }
        catch (err) {
            res.json(err);
        }
    }
    async updateLibros(req, res) {
        try {
        }
        catch (err) {
            res.json(err);
        }
    }
    async deleteLibros(req, res) {
        try {
        }
        catch (err) {
            res.json(err);
        }
    }
}
exports.librosController = new LibrosController();
