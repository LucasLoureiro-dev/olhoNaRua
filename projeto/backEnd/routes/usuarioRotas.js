import express from 'express';
import multer from 'multer'
import { listarUsuariosController, obterUsuarioPorEmailController, obterUsuarioPorIdController, criarUsuarioController, atualizarUsuarioController, excluirUsuarioController } from '../controllers/UsuarioController.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../uploads/'));
    },
    filename: (req, file, cb) => {
        const nomeArquivo = `${Date.now()}-${file.originalname}`;
        cb(null, nomeArquivo);
    }
});
const upload = multer({ storage: storage });

const router = express.Router();

router.get('/', listarUsuariosController)
router.get('/:email/:senha', obterUsuarioPorEmailController);
router.get('/:id', obterUsuarioPorIdController);
router.post('/', upload.single('foto'), criarUsuarioController);
router.put('/:id', upload.single('foto'), atualizarUsuarioController);
router.delete('/:id', excluirUsuarioController);

export default router;