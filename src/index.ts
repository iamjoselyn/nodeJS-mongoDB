import dotenv from "dotenv";
dotenv.config();
// import path from "path";
import express from "express";



import { librosRoutes } from "./routes/libros.routes";

//Instanciar el framework de express
const app = express();
app.use(express.json());

// Intanciar las rutas
app.use('/biblio', librosRoutes.router);

app.get('/', (req: any, res: any) => {
    res.status(200).send('<h2>llama a la ruta específica</h2>')
});

//Instanciar el puerto
app.set('port', process.env.PORT);
const server = app.listen(app.get('port'), ()=> {
    console.log(`The server is runing on port ${app.get('port')}`);
 
});

