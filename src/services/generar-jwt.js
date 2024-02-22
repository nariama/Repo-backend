const jwt = require('jsonwebtoken');

const generarJWT = (idUser = "") => {    // idUser = "" quiere decir que si no recibe valor, es vacio

    return new Promise((resolve, reject) => {
        const payload = { idUser };

        jwt.sign(
            payload,
            process.env.SECRET_KEY_STRING, // semilla
            {
                expiresIn: "4h"
            },
            (err, token) => {
                if (err) {
                    console.log(err);
                    reject("no se pudo generar el token");
                } else {
                    resolve(token);
                }
            }
        )
    })
}



module.exports = generarJWT;