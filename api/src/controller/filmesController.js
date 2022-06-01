import { alterarImagem, consultaFilme, deletarFilme, inserirFilmes, listarTodosFilme, alterarFilme, buscarPorNome } from "../repository/filmesRepository.js";
import { Router } from "express";
import multer from 'multer';
const upload = multer({dest: 'storage/capasFilmes'})
const server = Router();

server.get('/filme/busca', async (req,resp) =>{
    const nome = req.query.nome;
    console.log('ASDAsd');
    const resposta = await buscarPorNome(nome);

    resp.send(resposta);
})

server.get('/filme', async (req, resp) => {
    const resposta = await listarTodosFilme();
    resp.send(resposta);
});



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

server.put('/filme/:id/imagem', upload.single('capa'), async(req,resp) =>{
    const id = req.params.id;
    const image = req.file.path;

    const resposta = await alterarImagem(image, id);

    resp.send({resposta});
})


server.put('/filme/:id', async (req, resp) => {
    const id  = req.params.id;
    console.log(id);
    const filme = req.body;

    const resposta = await alterarFilme(id, filme);

    resp.send({
        x: resposta
    })

});



export default server