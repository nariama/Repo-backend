const mongoose = require("mongoose");

// schema
const { Schema } = mongoose; 

const userTalentSchema = new Schema({
    kind: String,
    name: String,
    email: String,
    password: String,
    rut: String,
    estado_civil: String,
    bday: String,
    phone_num: String,
    adm_msg: String,

    Foto: String,
    Nota: Number,
    Descripcion: String,
    Disponibilidad: String,
    Horarios: String,
    Habilidades: String,
    Renta_minima: Number,
    Estado: String,
    StrongsHab: String,


    // Schema perfil
    //exp
    //

    //
})

// modelo
const UserTalent = mongoose.model("Talent", userTalentSchema);

module.exports = UserTalent;