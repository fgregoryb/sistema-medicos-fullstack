const express = require('express');
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const cors = require('cors'); // NOVO: Importamos o porteiro

const app = express();
app.use(express.json());
app.use(cors()); // NOVO: Liberamos a entrada para qualquer Front-end!

// ... O resto do seu código continua idêntico (inicializarBanco, rotas GET, POST, DELETE, etc) ...

let db;

async function inicializarBanco() {
    db = await open({
        filename: 'banco.sqlite',
        driver: sqlite3.Database
    });

    await db.exec(`
        CREATE TABLE IF NOT EXISTS medicos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            especialidade TEXT,
            status TEXT
        )
    `);
    console.log("📦 Banco de dados conectado e tabela pronta!");
}
inicializarBanco();

// ==========================================
// 🚀 AS NOVAS ROTAS CONECTADAS AO BANCO
// ==========================================

// Rota POST: CADASTRAR MÉDICO NO BANCO
app.post('/medicos', async (req, res) => {
    // 1. Pegamos os dados que vieram do Front-end
    const { nome, especialidade } = req.body;
    const status = "Disponível"; // Status inicial padrão

    try {
        // 2. A Ordem SQL: "Insira na tabela médicos (nome, especialidade, status) os valores (?, ?, ?)"
        // Usamos pontos de interrogação (?) por segurança, para evitar invasões (SQL Injection)
        const comandoSQL = "INSERT INTO medicos (nome, especialidade, status) VALUES (?, ?, ?)";
        
        // 3. Executamos o comando passando os dados reais para substituir os '?'
        const resultado = await db.run(comandoSQL, [nome, especialidade, status]);
        
        // 4. Respondemos com sucesso e o ID que o próprio banco gerou automaticamente
        res.status(201).json({ mensagem: "Médico cadastrado com sucesso!", idGerado: resultado.lastID });
    } catch (erro) {
        res.status(500).json({ erro: "Deu erro ao salvar no cofre!" });
    }
});

// Rota GET: LER TODOS OS MÉDICOS DO BANCO
app.get('/medicos', async (req, res) => {
    try {
        // 1. A Ordem SQL: "Selecione (*) tudo da tabela médicos"
        const todosOsMedicos = await db.all("SELECT * FROM medicos");
        
        // 2. Devolve a lista para o Front-end
        res.json(todosOsMedicos);
    } catch (erro) {
        res.status(500).json({ erro: "Deu erro ao ler o cofre!" });
    }
});

// Rota DELETE: APAGAR UM MÉDICO DO BANCO
app.delete('/medicos/:id', async (req, res) => {
    // 1. Pegamos o ID que veio na URL (ex: /medicos/1)
    const idParaApagar = req.params.id;

    try {
        // 2. A Ordem SQL: "Delete da tabela médicos ONDE o id for igual a ?"
        const comandoSQL = "DELETE FROM medicos WHERE id = ?";
        
        // 3. Executamos o comando passando o ID
        const resultado = await db.run(comandoSQL, [idParaApagar]);

        // O 'resultado.changes' nos diz quantas linhas foram apagadas no banco
        if (resultado.changes > 0) {
            res.json({ mensagem: "Médico removido do sistema com sucesso!" });
        } else {
            res.status(404).json({ erro: "Médico não encontrado." });
        }
    } catch (erro) {
        res.status(500).json({ erro: "Deu erro ao tentar apagar!" });
    }
});

app.listen(3000, () => {
    console.log("🔥 Servidor rodando na porta 3000!");
});