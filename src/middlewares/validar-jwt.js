const jwt = require('jsonwebtoken');

const isAuth = (req, res, next) => {

    // const access_token = req.headers.token;
    const access_token = req.headers.token;

    if (!access_token) {
        return res.status(401).json({
            core: 401,
            msg: "no se ha enviado el token de acceso"
        })
    }
    try {
        const decoded = jwt.verify(access_token, process.env.SECRET_KEY_STRING); // semilla con la que lo validamos debe ser la misma con la que lo creamos
        req.user = decoded;
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            code: 401,
            msg: "Token invalido"
        })

    }


    next() // desoues de que hayas hecho lo que tenías que hacer, next y se ejecuta lo que sigue
}

module.exports = isAuth;

// const jwt = require('jsonwebtoken');

// const isAuth = (req, res, next) => {
//     const authorizationHeader = req.headers['authorization'];

//     if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
//         return res.status(401).json({
//             code: 401,
//             msg: "No se ha enviado el token de acceso o el formato es incorrecto"
//         });
//     }

//     const token = authorizationHeader.split(' ')[1];

//     try {
//         const decoded = jwt.verify(token, process.env.SECRET_KEY_STRING);
//         req.user = decoded.user;
//         next();
//     } catch (error) {
//         console.log(error);
//         return res.status(401).json({
//             code: 401,
//             msg: "Token inválido"
//         });
//     }

//     next();
// };

// module.exports = isAuth;
