import { listarDenuncias, obterDenunciaPorIdDoUsuario, criarDenuncia, atualizarDenuncia, excluirDenuncia } from "../model/denuncia.js";
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const listarDenunciasController = async (req, res) => {
    try {
        const denuncias = await listarDenuncias();
        res.status(200).json(denuncias)
    }
    catch (error) {
        console.error('Erro ao listar denuncias: ', error)
        res.status(500).json({ mensagem: 'Erro ao listar denuncias' })
    }
}

const obterDenunciaPorIdDoUsuarioController = async (req, res) => {
    try {
        const denuncia = await obterDenunciaPorIdDoUsuario(req.params.id);
        if (denuncia) {
            res.status(200).json(denuncia)
        }
        else {
            res.status(404).json({ mensagem: 'A denuncia não pode ser encontrado ou não existe' })
        }
    }
    catch (error) {
        console.error('Erro ao listar denuncia por id: ', error)
        res.status(500).json({ mensagem: 'Erro ao listar denuncia por id' })
    }
}

const criarDenunciaController = async (req, res) => {
    try {
        const { motivo, descricao, localizacao, email } = req.body;
        let fotoPath = null;
        if (req.file) {
            fotoPath = req.file.path.replace(__dirname.replace('\\controllers', ''), '')
        }
        const denunciaData = {
            Motivo: motivo,
            Descricao: descricao,
            Localizacao: localizacao,
            Email: email,
            Foto: fotoPath
        }
        const denunciaId = await criarDenuncia(denunciaData)
        res.status(201).json({ mensagem: 'Denuncia enviada com secesso.', denunciaId })
    }
    catch (error) {
        console.error('Erro ao enviar denuncia:', error);
        res.status(500).json({ mensagem: 'Erro ao enviar denuncia.' });
    }
}

const atualizarDenunciaController = async (req, res) => {
    try {
        const denunciaId = req.params.id
        const { motivo, descricao, localizacao, email } = req.body;
        let fotoPath = null;
        if (req.file) {
            fotoPath = req.file.path.replace(__dirname.replace('\\controllers', ''), '')
        }
        const denunciaData = {
            motivo: motivo,
            descricao: descricao,
            localizacao: localizacao,
            email: email,
            foto: fotoPath
        }
        await atualizarDenuncia(denunciaId, denunciaData);
        res.status(200).json({ mensagem: 'Denuncia atualizada com sucesso.' })

    }
    catch (error) {
        console.error('Erro ao atualizar denuncia:', error);
        res.status(500).json({ mensagem: 'Erro ao atualizar denuncia.' });
    }
}
const excluirDenunciaController = async (req, res) => {
    try {
        const denunciaId = req.params.id;
        await excluirDenuncia(denunciaId);
        res.status(200).json({ mensagem: 'Denuncia excluída com sucesso' });
    } catch (error) {
        console.error('Erro ao excluir denuncia:', error);
        res.status(500).json({ mensagem: 'Erro ao excluir denuncia' });
    }
};

export { listarDenunciasController,obterDenunciaPorIdDoUsuarioController, criarDenunciaController, atualizarDenunciaController, excluirDenunciaController }