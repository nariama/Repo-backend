// const User = require("../models/userCompany.model.js");
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
        // Verificar si el usuario existe en UserTalent
        const UserTalent = require("../models/userTalent.model.js");
        const userTalent = await UserTalent.findOne({ email: email });

        
        if (!userTalent) {
            // El usuario no existe en UserTalent, verificar en UserCompany
            const UserCompany = require("../models/userCompany.model.js");
            const userCompany = await UserCompany.findOne({ email: email });

            if (!userCompany) {
                return res.status(400).json({
                    code: 400,
                    msg: "Usuario no registrado en nuestro sistema"
                })
            }

            // Verificar que la contraseña sea correcta para UserCompany
            const passwordVerified = bcrypt.compareSync(password, userCompany.password)

            if (!passwordVerified) {
                return res.status(400).json({
                    code: 400,
                    msg: "Contraseña incorrecta"
                })
            }

            const token = await generarJWT(userCompany._id);

            // Decodificar el token para obtener el ID del usuario
            const decodedToken = jwt.verify(token, process.env.SECRET_KEY_STRING);
            const userId = decodedToken.idUser;

            // Imprimir el ID del usuario en la consola
            console.log("ID del usuario:", userId);

            res.status(200).json({
                code: 200,
                msg: "Usuario logueado con éxito",
                data: {
                    name: userCompany.name,
                    id: userCompany._id,
                    kind: userCompany.kind,
                },
                token: token
            })

        } else {
            // Verificar que la contraseña sea correcta para UserTalent
            const passwordVerified = bcrypt.compareSync(password, userTalent.password)

            if (!passwordVerified) {
                return res.status(400).json({
                    code: 400,
                    msg: "Contraseña incorrecta"
                })
            }

            const token = await generarJWT(userTalent._id);

            // Decodificar el token para obtener el ID del usuario
            const decodedToken = jwt.verify(token, process.env.SECRET_KEY_STRING);
            const userId = decodedToken.idUser;

            // Imprimir el ID del usuario en la consola
            console.log("ID del usuario:", userId);

            res.status(200).json({
                code: 200,
                msg: "Usuario logueado con éxito",
                data: {
                    name: userTalent.name,
                    id: userTalent._id,
                    kind: userTalent.kind,
                },
                token: token
            })
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            code: 500,
            msg: "Error interno del servidor"
        })
    }
}

module.exports = login;