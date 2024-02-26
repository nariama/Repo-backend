const mongoose = require("mongoose");

// schema
const { Schema } = mongoose; 

const userCompanySchema = new Schema({
    kind: String,
    name_company: String,
    email: String,
    password: String,
    rut_empresa: String,
    rubro: String,
    num_empleados: String,
    phone_num: String,
    url_company: String,
    necesidad_personal: String,
    adm_msg: String,
})

// modelo
const UserCompany = mongoose.model("Company", userCompanySchema);

module.exports = UserCompany;