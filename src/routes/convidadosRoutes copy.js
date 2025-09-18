import  express from "express";
import convidadoController from "../controllers/convidadoController.js";

const routes = express.Router ();

routes.get("/convidados", convidadoController.listarConvidados);
routes.get("/convidados/:id", convidadoController.listarConvidadosPorId);
routes.post("/convidados", convidadoController.cadastrarConvidado);
routes.put("/convidados/:id", convidadoController.atualiarConvidado);
routes.delete("/convidados/:id", convidadoController.excluirConvidado);

export default routes;