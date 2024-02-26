const UserTalent = require("../models/userTalent.model.js");
const bcrypt = require('bcrypt');

const crearUsuarioTalento = async (req, res) => {

  const { kind, name, lastName, email, password, rut, estado_civil, bday, phone_num, adm_msg} = req.body;

  // agrgar un paso para encriptar la constraseña
  const salt = bcrypt.genSaltSync();

  const passwordEncripted = bcrypt.hashSync(password, salt)

  await UserTalent.create({
    kind: kind,
    name: name,
    lastName: lastName,
    email: email,
    password: passwordEncripted,
    rut: rut,
    estado_civil: estado_civil,
    bday: bday,
    phone_num: phone_num,
    adm_msg: adm_msg,
  });

  res.status(201).json({
    msg: "Usuario Talento creado con éxito",
    code: 201,
    data: UserTalent
  })
};

module.exports = crearUsuarioTalento;