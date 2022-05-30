import { con } from "./connection.js"

export async function consultaFilme(id) {

    const comando =
        `SELECT
        id_filme		id,
        nm_filme	    nome,
        vl_avaliacao	avaliacao,
        ds_sinopse		sinopse,
        dt_lancamento	lancamento,
        bt_disponivel	disponivel,
        img_filme       capa
    FROM tb_filme
    WHERE id_filme			= ?`;

    const resposta = await con.query(comando, [id]);

    return resposta[0]
}

export async function inserirFilmes(filme){
    const comando = `
    INSERT INTO tb_filme (id_usuario, nm_filme, ds_sinopse, vl_avaliacao, dt_lancamento, bt_disponivel)
                  VALUES (?, ?, ?, ?, ?, ?)`

    const [resposta] = await con.query(comando, [filme.usuario, filme.nome,
    filme.sinopse, filme.avaliacao, filme.lancamento, filme.disponivel])

    return resposta.affectedRows;
}