import express from 'express';
import multer from 'multer'
import { listarDenunciasController, obterDenunciaPorIdDoUsuarioController, criarDenunciaController, atualizarDenunciaController, excluirDenunciaController } from '../controllers/DenunciaController.js';
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

router.get('/', listarDenunciasController)
router.get('/:id', obterDenunciaPorIdDoUsuarioController);
router.post('/', upload.single('foto'), criarDenunciaController);
router.put('/:id', upload.single('foto'), atualizarDenunciaController);
router.delete('/:id', excluirDenunciaController);

export default router;