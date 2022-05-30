import { consultaFilme, deletarFilme, inserirFilmes } from "../repository/filmesRepository.js";
import { Router } from "express";

const server = Router();

server.get('/filme/:id', async(req,resp)=>{
    const id = req.params.id;
    const resposta = await consultaFilme(id);

    resp.send(resposta)
})

server.post('/filme', async(req, resp) =>{
    const filme = req.body;
    const resposta = await inserirFilmes(filme);

     resp.send({
        x:resposta
     })
})

server.delete('/filme/:id', async(req,resp) =>{
    const filme = req.params.id;

    const resposta = await deletarFilme(filme);

    resp.send({
        x : resposta
    })
})
export default server