import express from 'express';
import cors from 'cors'
import denuncias from './routes/denunciaRotas.js'
import usuarios from './routes/usuarioRotas.js'
import authrotas from './routes/authRotas.js'

const app = express();
const port = 3001;

app.use(cors())
app.use(express.json())

app.use('/auth', authrotas)
app.use('/denuncias', denuncias);
app.use('/usuarios', usuarios)

app.get('/', (req, res) => {
    res.status(200).send('<h1> Home page </h1>');
});

app.use((req, res) => {
    res.status(404).json({ mensagem: 'Rota não emcontrada!!!' });
});

app.listen(port, () => {
    console.log(`Servidor rodando em https://localhost:${port}`);
});
