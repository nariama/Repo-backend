const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const experienciaLaboralSchema = new Schema({
    actividad: { type: String, required: true },
    lugar: { type: String, required: true },
    fecha: { type: String, required: true },
    descripcion: { type: [String], required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'UserTalent', required: true }
});

const ExperienciaLaboral = mongoose.model('Experience', experienciaLaboralSchema);

module.exports = ExperienciaLaboral;
