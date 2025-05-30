import express from 'express';
import { listarUsuariosController, obterUsuarioPorEmailController, obterUsuarioPorIdController, criarUsuarioController, atualizarUsuarioController, excluirUsuarioController } from '../controllers/UsuarioController.js';
import authrotas from './authRotas.js'

const router = express.Router();

router.get('/', listarUsuariosController)
router.get('/:email/:senha', obterUsuarioPorEmailController);
router.get('/:id', obterUsuarioPorIdController);
router.post('/', criarUsuarioController);
router.put('/:id', atualizarUsuarioController);
router.delete('/:id', excluirUsuarioController);

export default router;