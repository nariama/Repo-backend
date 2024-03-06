const mongoose = require("mongoose");

// schema
const { Schema } = mongoose; 

const userTalentSchema = new Schema({
    kind: { type: String, required: false },
    name: { type: String, required: false },
    email: { type: String, required: false, unique: false },
    password: { type: String, required: false },
    rut: { type: String, required: false },
    estado_civil: { type: String, required: false },
    bday: { type: String, required: false },
    phone_num: { type: String, required: false },
    adm_msg: { type: String, required: false },

    Foto: { type: String, required: false },
    Nota: { type: Number, required: false },
    Descripcion: { type: String, required: false },
    Disponibilidad: { type: String, required: false },
    Horarios: { type: String, required: false },
    Habilidades: { type: String, required: false },
    Renta_minima: { type: Number, required: false },
    Estado: { type: String, required: false },
    StrongsHab: { type: String, required: false },
    experienciasLaborales: [{ type: Schema.Types.ObjectId, ref: 'ExperienciaLaboral' }]


    // Schema perfil
    //exp
    //

    //
})

// modelo
const UserTalent = mongoose.model("Talent", userTalentSchema);

module.exports = UserTalent;