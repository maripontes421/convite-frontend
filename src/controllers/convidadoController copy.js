import convite from "../models/Convidado.js";

class convidadoController {
    static async listarConvidados(req, res) {   
        try {
            const listaConvidados = await convidado.find({});
            res.status(200).json(listaConvidados);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição  ` })
        }

    };

    static async listarConvidadosPorId(req, res) {
        try {
            const id = req.params.id;
            const convidadoEncontrado = await convidado.findById(id);
            res.status(200).json(convidadoEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` })
        }
    };

    static async cadastrarConvidado(req, res) {
        try {
            const novoConvidado = await convite.create(req.body);
            res.status(201).json({ message: "criado com sucesso", livro: novoConvidado });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar convidado ` })
        }
    }

    static async atualiarConvidado(req, res) {
        try {
            const id = req.params.id;
            await convite.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "livro atualizado" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualização` })
        }
    };

    static async excluirConvidado(req, res) {
        try {
            const id = req.params.id;
            await convite.findByIdAndDelete(id);
            res.status(200).json({ message: "livro excluido com sucesso" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na exclusão` });
        }
    }; 
};

export default ConviteController;