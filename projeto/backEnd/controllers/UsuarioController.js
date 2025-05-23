import { listarUsuarios, obterUsuarioPorEmail, obterUsuarioPorId, criarUsuario, atualizarUsuario, excluirUsuario } from "../model/usuarios.js";

const listarUsuariosController = async (req, res) => {
    try {
        const usuarios = await listarUsuarios();
        res.status(200).json(usuarios)
    }
    catch (error) {
        console.error('Erro ao listar usuários: ', error)
        res.status(500).json({ mensagem: 'Erro ao listar usuários' })
    }
}

const obterUsuarioPorEmailController = async (req, res) => {
    try {
        const { email, senha } = req.params
        const usuario = await obterUsuarioPorEmail(email, senha);
        if (usuario) {
            res.status(200).json(usuario)
        }
        else {
            res.status(404).json({ mensagem: 'O usuário não pode ser encontrado ou não existe' })
        }
    }
    catch (error) {
        console.error('Erro ao listar usuário por email: ', error)
        res.status(500).json({ mensagem: 'Erro ao listar usuário por email' })
    }
}

const obterUsuarioPorIdController = async (req, res) => {
    try {
        const userId = req.params.id
        const usuario = await obterUsuarioPorId(userId);
        if (usuario) {
            res.status(200).json(usuario)
        }
        else {
            res.status(404).json({ mensagem: 'O usuário não pode ser encontrado ou não existe' })
        }
    }
    catch (error) {
        console.error('Erro ao listar usuário por email: ', error)
        res.status(500).json({ mensagem: 'Erro ao listar usuário por email' })
    }
}

const criarUsuarioController = async (req, res) => {
    try {
        const { Email, Senha } = req.body;
        const cargoUsuario = "Usuario"
        const usuarioData = {
            Email: Email,
            Senha: Senha,
            Cargo: cargoUsuario
        }
        const usuarioId = await criarUsuario(usuarioData)
        res.status(201).json({ mensagem: 'Usuário criado com secesso.', usuarioId })
    }
    catch (error) {
        console.error('Erro ao criar usuário:', error);
        res.status(500).json({ mensagem: 'Erro ao criar usuário.' });
    }
}

const atualizarUsuarioController = async (req, res) => {
    try {
        const usuarioId = req.params.id
        const { email, senha } = req.body;

        const usuarioData = {
            Email: email,
            Senha: senha,
        }
        await atualizarUsuario(usuarioId, usuarioData);
        res.status(200).json({ mensagem: 'Usuário atualizado com sucesso.' })

    }
    catch (error) {
        console.error('Erro ao atualizar usuário:', error);
        res.status(500).json({ mensagem: 'Erro ao atualizar usuário.' });
    }
}
const excluirUsuarioController = async (req, res) => {
    try {
        const usuarioId = req.params.id;
        await excluirUsuario(usuarioId);
        res.status(200).json({ mensagem: 'Usuário excluído com sucesso' });
    } catch (error) {
        console.error('Erro ao excluir usuário:', error);
        res.status(500).json({ mensagem: 'Erro ao excluir usuário' });
    }
};

export { listarUsuariosController,obterUsuarioPorEmailController, obterUsuarioPorIdController, criarUsuarioController, atualizarUsuarioController, excluirUsuarioController }