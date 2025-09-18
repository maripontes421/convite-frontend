import express from "express";
import convite from "./convitesRoutes.js";

function routes (app) {
    app.route("/").get((req, res) => res.status(200).send("Convite para o meu aniversario"));
    app.use(express.json(), convite)
};

export default routes;