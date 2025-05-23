import { create, deleteRecord, read, readAll, update } from "../config/database.js";

const listarDenuncias = async () => {
    try {
        return await readAll('Denuncias')
    }
    catch (error) {
        console.error("Erro ao listar as denuncias: ", error);
        throw error;
    }
}

const obterDenunciaPorIdDoUsuario = async (id) => {
    try {
        return await readAll('Denuncias', `id_Usuario = ${id}`)
    }
    catch (error) {
        console.error("Erro ao obter a denuncia pelo id: ", error);
        throw error;
    }
}

const criarDenuncia = async (denunciaData) => {
    try {
        return await create('Denuncias', denunciaData)
    }
    catch (error) {
        console.error('Erro ao criar denuncia: ', error)
        throw error;
    }
}

const atualizarDenuncia = async (id, denunciaData) => {
    try {
        return await update('Denuncias', denunciaData, `id = '${id}'`)
    }
    catch (error) {
        console.error('Erro ao atualizar denuncia: ', error)
        throw error;
    }
}

const excluirDenuncia = async (id) => {
    try {
        await deleteRecord('Denuncias', `id = '${id}'`)
    }
    catch (error) {
        console.error('Erro ao atualizar a denuncia: ', error)
        throw error;
    }
}

export { listarDenuncias, obterDenunciaPorIdDoUsuario, criarDenuncia, atualizarDenuncia, excluirDenuncia }