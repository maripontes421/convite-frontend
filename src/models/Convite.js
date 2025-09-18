import mongoose from "mongoose";

const conviteSchema  = new mongoose.Schema({
    nomeCompleto: {type: String, require: true},
    telefone: {type: Number},
    acompanhante: {type: String},
    nomeDoAcompanhante: {type: String}
}, { versionKey: false});

const convite = mongoose.model("convite", conviteSchema);

export  default convite; 