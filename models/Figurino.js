const mongoose = require('mongoose');

const FigurinoSchema = new mongoose.Schema({
    tipo: { type: String, enum: ['masculino', 'feminino'], required: true },
    descricao: String,
    danca: { type: String, required: true }, // Campo para a dança associada
    dataCriacao: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Figurino', FigurinoSchema);
