import  express from "express";
import ConviteController from "../controllers/conviteController.js";

const routes = express.Router ();

routes.get("/convites", ConviteController.listarConvidados);
routes.get("/convites/:id", ConviteController.listarConvidadosPorId);
routes.post("/convites", ConviteController.cadastrarConvidado);
routes.put("/convites/:id", ConviteController.atualiarConvidado);
routes.delete("/convites/:id", ConviteController.excluirConvidado);

export default routes;