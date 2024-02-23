const mongoose = require("mongoose");

// schema
const { Schema } = mongoose; 

const userTalentSchema = new Schema({
    kind: String,
    name: String,
    lastName: String,
    email: String,
    password: String,
    rut: String,
    estado_civil: String,
    bday: String,
    phone_num: String,
    adm_msg: String,
})

// modelo
const UserTalent = mongoose.model("Talent", userTalentSchema);

module.exports = UserTalent;