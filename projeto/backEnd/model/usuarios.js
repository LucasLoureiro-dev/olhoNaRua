import { create, deleteRecord, read, readAll, update, compare } from "../config/database.js";

const listarUsuarios = async () => {
    try {
        return await readAll('Usuarios')
    }
    catch (error) {
        console.error("Erro ao listar os usuários: ", error);
        throw error;
    }
}

const obterUsuarioPorEmail = async (email, senha) => {
    try {

        return await read('Usuarios', `Email = '${email}' AND Senha = '${senha}'`)

    }
    catch (error) {
        console.error("Erro ao obter a usuário pelo email: ", error);
        throw error;
    }
}
const obterUsuarioPorId = async (id) => {
    try {
        return await read('Usuarios', `id = '${id}'`)
    }
    catch (error) {
        console.error("Erro ao obter a usuário pelo id: ", error);
        throw error;
    }
}

const criarUsuario = async (denunciaData) => {
    try {
        return await create('Usuarios', denunciaData)
    }
    catch (error) {
        console.error('Erro ao criar usuário: ', error)
        throw error;
    }
}

const atualizarUsuario = async (id, denunciaData) => {
    try {
        return await update('Usuarios', denunciaData, `id = '${id}'`)
    }
    catch (error) {
        console.error('Erro ao atualizar usuário: ', error)
        throw error;
    }
}

const excluirUsuario = async (id) => {
    try {
        await deleteRecord('Usuarios', `id = '${id}'`)
    }
    catch (error) {
        console.error('Erro ao atualizar a usuário: ', error)
        throw error;
    }
}

export { listarUsuarios, obterUsuarioPorEmail, obterUsuarioPorId, criarUsuario, atualizarUsuario, excluirUsuario }