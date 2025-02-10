const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: 'http://localhost:5173'
}))
app.use(express.json());

app.get('/api/mensagem', (req, res) => {
    res.json({mensagem: 'Olá do backend'})
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});