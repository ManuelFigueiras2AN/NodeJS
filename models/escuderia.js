const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const escuderiaSchema = new Schema({
    nombre: {type: String, required: true},
    pais: {type: String, required: true},
    campeonatos: {type: Number, required: true}
});

const Escuderia = mongoose.model('Escuderia',escuderiaSchema,'f1');
module.exports = Escuderia;