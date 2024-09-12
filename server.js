const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override'); // Para suportar PUT e DELETE no form
const app = express();

// Conectar ao MongoDB
mongoose.connect('mongodb+srv://surerochab:Bezerra281207@cluster0sureprojects.pgwnq.mongodb.net/databasepw')
.then(() => console.log('Conectado ao MongoDB'))
.catch((error) => console.error('Erro ao conectar ao MongoDB:', error));

// Configurar EJS como o mecanismo de visualização
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); // Para processar dados de formulários
app.use(methodOverride('_method')); // Para suportar PUT e DELETE em formulários

// Middleware para interpretar JSON
app.use(express.json());

// Modelos
const Figurino = require('./models/Figurino');
const Material = require('./models/Material');

// Header e Footer
app.use((req, res, next) => {
    res.locals.title = "Sistema de Figurinos e Materiais";
    next();
});

// Rota principal (página inicial)
app.get('/', (req, res) => {
    res.render('index');
});

// Rotas para listar FIGURINOS e exibir o formulário de criação
app.get('/figurinos', async (req, res) => {
    try {
        const figurinos = await Figurino.find();
        res.render('figurinos', { figurinos });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Formulário para criar um novo figurino
app.get('/figurinos/new', (req, res) => {
    res.render('new-figurino');
});

// Criar um novo figurino
app.post('/figurinos', async (req, res) => {
    try {
        const newFigurino = new Figurino(req.body);
        await newFigurino.save();
        res.redirect('/figurinos');
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Formulário para editar um figurino existente
app.get('/figurinos/edit/:id', async (req, res) => {
    try {
        const figurino = await Figurino.findById(req.params.id);
        if (!figurino) return res.status(404).json({ error: 'Figurino não encontrado' });
        res.render('edit-figurino', { figurino });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Atualizar figurino por ID
app.put('/figurinos/:id', async (req, res) => {
    try {
        await Figurino.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.redirect('/figurinos');
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Deletar figurino por ID
app.delete('/figurinos/:id', async (req, res) => {
    try {
        await Figurino.findByIdAndDelete(req.params.id);
        res.redirect('/figurinos');
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// Rotas para listar MATERIAIS e exibir o formulário de criação
app.get('/materiais', async (req, res) => {
    try {
        const materiais = await Material.find();
        res.render('materiais', { materiais });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Formulário para criar um novo material
app.get('/materiais/new', (req, res) => {
    res.render('new-material');
});

// Criar um novo material
app.post('/materiais', async (req, res) => {
    try {
        const newMaterial = new Material(req.body);
        await newMaterial.save();
        res.redirect('/materiais');
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Formulário para editar um material existente
app.get('/materiais/edit/:id', async (req, res) => {
    try {
        const material = await Material.findById(req.params.id);
        if (!material) return res.status(404).json({ error: 'Material não encontrado' });
        res.render('edit-material', { material });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Atualizar material por ID
app.put('/materiais/:id', async (req, res) => {
    try {
        await Material.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.redirect('/materiais');
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Deletar material por ID
app.delete('/materiais/:id', async (req, res) => {
    try {
        await Material.findByIdAndDelete(req.params.id);
        res.redirect('/materiais');
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
