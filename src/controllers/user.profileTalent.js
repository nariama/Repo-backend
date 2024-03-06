const UserTalent = require('../models/userTalent.model'); // Importa el modelo de usuario
const jwt = require('jsonwebtoken');


const profileTalent = async (req, res) => {
    try {
        // const userId = req.user._id; // Suponiendo que el id del usuario se obtiene de la autenticación
        const token = req.headers.token;

        const decodedToken = jwt.verify(token, process.env.SECRET_KEY_STRING);
       const userId = decodedToken.idUser;
    //    const user = await UserTalent.findById(userId).populate('experienciasLaborales'); popula las experiencias laborales
        const user = await UserTalent.findById(userId); // Busca el usuario por su id 
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(user);
    } catch (error) {
        console.error('Error al obtener el perfil de usuario:', error);
        res.status(500).json({ message: 'Error al obtener el perfil de usuario' });
    }
}

module.exports = profileTalent;