import 'dotenv/config'
import express from "express"
import cors from "cors"

import filmesController from './controller/filmesController.js'; 
import usuariocontroller from './controller/usuarioController.js'

const server = express();

server.use(express.json());
server.use(cors());

server.use(filmesController);
server.use(usuariocontroller);

server.listen(process.env.PORT, () =>
    console.log(`API online na porta ${process.env.PORT}`))