const mongoose = require("mongoose");

// schema
const { Schema } = mongoose; 

const userTalentSchema = new Schema({
    kind: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    rut: { type: String, required: true },
    estado_civil: { type: String, required: true },
    bday: { type: String, required: true },
    phone_num: { type: String, required: true },
    adm_msg: { type: String, required: true },

    Foto: { type: String, required: true },
    Nota: { type: Number, required: true },
    Descripcion: { type: String, required: true },
    Disponibilidad: { type: String, required: true },
    Horarios: { type: String, required: true },
    Habilidades: { type: String, required: true },
    Renta_minima: { type: Number, required: true },
    Estado: { type: String, required: true },
    StrongsHab: { type: String, required: true },
    experienciasLaborales: [{ type: Schema.Types.ObjectId, ref: 'ExperienciaLaboral' }]


    // Schema perfil
    //exp
    //

    //
})

// modelo
const UserTalent = mongoose.model("Talent", userTalentSchema);

module.exports = UserTalent;