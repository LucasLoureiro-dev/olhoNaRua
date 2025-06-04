import jwt from 'jsonwebtoken';
import { read, compare } from '../config/database.js';
import { JWT_SECRET } from '../config/jwt.js'

const loginController = async (req, res) => {

    const { Email, Senha, Cargo } = req.body;

    try {

        const usuario = await read('usuarios', `Email = '${Email}'`);

        if (!usuario) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado' });
        }
        const senhaCorreta = await compare(Senha, usuario.Senha);
        if (!senhaCorreta) {
            return res.status(401).json({ mensagem: 'Senha incorreta' });
        }

        const cargoCorreto = usuario.Cargo
        if(Cargo != cargoCorreto){
            return res.status(401).json({ mensagem: 'tipo de login incorreto' });
        }

        const jwt_secret = JWT_SECRET

        const token = jwt.sign({ Id: usuario.Id, Cargo: usuario.Cargo }, jwt_secret);

        res.json({ mensagem: 'Login realizado com sucesso', token, Usuario: usuario });
    } catch (error) {
        console.error('Erro ao fazer login:', error);

        res.status(500).json({ mensagem: 'Erro ao fazer login' });
    }
};
export { loginController };