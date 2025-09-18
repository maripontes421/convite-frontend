import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("Error", (erro) => {
    console.error("Erro de conexão", erro);
});

conexao.once("open", () =>  {
    console.log("Conexão com o banco de dados feita com sucesso");
});

const app = express();
routes(app);    

app.delete("/convidados/:id", (req, res) => {
     const index = buscaConvidado(req.params.id);
     convidados.splice(index, 1);
     res.status(200).send("Convidado(a) removido com sucesso");
});

export default app;



