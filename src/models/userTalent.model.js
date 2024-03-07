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

    Foto: { type: Buffer, required: false },
    Nota: { type: Number, required: false },
    Descripcion: { type: String, required: false },
    Acerca_de: { type: String, required: false },
    Disponibilidad: { type: String, required: false },
    Horarios: { type: String, required: false },
    Habilidades: { type: String, required: false },
    Idiomas: { type: String, required: false },
    Renta_minima: { type: Number, required: false },
    Estado: { type: String, required: false },
    StrongsHab: { type: String, required: false },
    Modadlidad: { type: String, required: false },
    Experiencia: { type: String, required: false },
    experienciasLaborales: [{ type: Schema.Types.ObjectId, ref: 'ExperienciaLaboral' }],
    
    visible_bday: { type: String, required: false },
    visible_estado_civil: { type: String, required: false },
    visible_Horarios: { type: String, required: false },
    visible_Disponibilidad: { type: String, required: false },
    visible_Modalidad: { type: String, required: false },

    Solicitud: { type: String, required: false },
    Rubro: { type: String, required: false }


    // Schema perfil
    //exp
    //

    //
})

// modelo
const UserTalent = mongoose.model("Talent", userTalentSchema);

module.exports = UserTalent;