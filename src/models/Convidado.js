import mongoose from "mongoose";

const acompanhanteSchema  = new mongoose.Schema({
    id: {type:mongoose.Schema.Types.ObjectId},
    nome: {type: String, required: true},
    cidade: { type: String}
}, {versionKey: false});

const acompanhante = mongoose.model("autores", autorSchema); 

export {acompanhante, acompanhanteSchema}