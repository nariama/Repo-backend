const UserTalent = require("../models/userTalent.model.js");
const bcrypt = require('bcrypt');

const crearUsuarioTalento = async (req, res) => {

  const { kind, name, email, password, rut, estado_civil, bday, phone_num, adm_msg, Foto, Nota, Descripcion, Disponibilidad, Horarios, Habilidades, Renta_minima, Estado, StrongsHab } = req.body;

  // agrgar un paso para encriptar la constraseña
  const salt = bcrypt.genSaltSync();

  const passwordEncripted = bcrypt.hashSync(password, salt)

  // verificar que el usuario exista en la base de datos
  const user = await UserTalent.findOne({email: email})

  if(user) {
    return res.status(400).json({
        code: 400,
        msg: "Usuario ya existe"
    })
   }

  await UserTalent.create({
    kind: kind,
    name: name,
    email: email,
    password: passwordEncripted,
    rut: rut,
    estado_civil: estado_civil,
    bday: bday,
    phone_num: phone_num,
    adm_msg: adm_msg,

    Foto: Foto, // Desde aqui hacia abajo se genera la tarjeta
    Nota: Nota,
    Descripcion: Descripcion,
    Disponibilidad: Disponibilidad,
    Horarios: Horarios,
    Habilidades: Habilidades,
    Renta_minima: Renta_minima,
    Estado: Estado,
    StrongsHab: StrongsHab,
  });

  res.status(201).json({
    msg: "Usuario Talento creado con éxito",
    code: 201,
    data: UserTalent
  })
};

module.exports = crearUsuarioTalento;