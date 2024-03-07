const UserCompany = require("../models/userCompany.model.js");
const bcrypt = require('bcrypt');

const crearUsuarioEmpresa = async (req, res) => {

  const { kind, name_company, email, password, rut_empresa, rubro, num_empleados, phone_num, url_company, necesidad_personal, adm_msg, HabilidadesNecesarias, RequisitosMinimos, FechaCreacion, Acerca_de, Solicitud} = req.body;

  // agrgar un paso para encriptar la constraseña
  const salt = bcrypt.genSaltSync();

  const passwordEncripted = bcrypt.hashSync(password, salt)

    // verificar que el usuario exista en la base de datos
    const user = await UserCompany.findOne({email: email})

    if(user) {
      return res.status(400).json({
          code: 400,
          msg: "Usuario ya existe"
      })
     }


 

  
     
  await UserCompany.create({
    kind: kind,
    name_company: name_company,
    email: email,
    password: passwordEncripted,
    rut_empresa: rut_empresa,
    rubro: rubro,
    num_empleados: num_empleados,
    phone_num: phone_num,
    url_company: url_company,
    necesidad_personal: necesidad_personal,
    adm_msg: adm_msg,
    HabilidadesNecesarias: HabilidadesNecesarias,
    RequisitosMinimos: RequisitosMinimos,
    FechaCreacion: FechaCreacion,
    Acerca_de: Acerca_de,
    Solicitud: Solicitud
     
  });

  res.status(201).json({
    msg: "Usuario Empresa creado con éxito",
    code: 201,
    data: UserCompany
  })
};

module.exports = crearUsuarioEmpresa;