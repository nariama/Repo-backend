const User = require("../models/userTalent.model.js");
const bcrypt = require('bcrypt');
const generarJWT = require("../services/generar-jwt.js");
const jwt = require('jsonwebtoken');



const login = async (req, res) => {

    const { email, password, kind } = req.body;

    if(!email || !password) {
        return res.status(400).json({
            code: 400,
            msg: "Email y password son requeridos"
        })
    }
    try {
   // verificar que el usuario exista en la base de datos
   const user = await User.findOne({email: email})

   if(!user) {
    return res.status(400).json({
        code: 400,
        msg: "Usuario no registrado en nuestro sistema"
    })
   }
   //verificar que la contraseña sea correcta

   //agregar un paso paara poder verificar la contraseña encriptada

   const passwordVerified = bcrypt.compareSync(password, user.password)


   if(!passwordVerified) {
    return res.status(400).json({
        code: 400,
        msg: "Contraseña incorrecta"
    })
   }

   const token = await generarJWT(user._id);

   // Decodificar el token para obtener el ID del usuario
   const decodedToken = jwt.verify(token, process.env.SECRET_KEY_STRING);
   const userId = decodedToken.idUser;

   // Imprimir el ID del usuario en la consola
   console.log("ID del usuario:", userId);

   res.status(200).json({
       code: 200,
       msg: "Usuario logueado con éxito",
       data: {
        name: user.name,
        id: user._id,
        kind: user.kind,
       },
       token: token
   })

    }
    catch (error) {
        console.log(error);
    }

  

   

}


module.exports = login;