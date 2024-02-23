const UserCompany = require("../models/userCompany.model.js");
const UserTalent = require("../models/userTalent.model.js");

const listarUsuarios = async (req, res) => {

   const usuarios = await UserTalent.find({}) + await UserCompany.find({}); //????????????

   res.status(200).json({
         code: 200,
         msg: "Lista de usuarios",
         data: usuarios
   })
    
}

module.exports = listarUsuarios;