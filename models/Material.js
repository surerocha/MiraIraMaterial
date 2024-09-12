const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    quantidade: { type: Number, required: true },
    danca: { type: String, required: true }
});

const Material = mongoose.model('Material', materialSchema);

module.exports = Material;
