const User = require('../models/userTalent.model'); // Importa tu modelo de usuario

// function isAdmin(req, res, next) {
//     console.log(req.user);
//     if (req.user.kind === 'admin') {
//         return next();
//     } else {
//         return res.status(403).json({ message: 'Forbidden' });
//     }
// }

async function isAdmin(req, res, next) {
    try {
        // Obtener el usuario por su ID
        const user = await User.findById(req.user.idUser);

        // Verificar si el usuario tiene el rol de administrador
        if (user && user.kind === 'admin') {
            return next();
        } else {
            return res.status(403).json({ message: 'Forbidden' });
        }
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = isAdmin;