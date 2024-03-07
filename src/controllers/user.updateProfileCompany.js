const jwt = require('jsonwebtoken');
const UserCompany = require("../models/userCompany.model.js");


const updateProfileCompany = async (req, res) => {
    try {
        const { name, Descripcion, Experiencia, Acerca_de, Habilidades, StrongsHab, Idiomas, bday, age, estado_civil, Horarios, Disponibilidad, Renta_minima, visible_bday, visible_estado_civil, visible_Horarios, visible_Disponibilidad, visible_Renta_minima, Modalidad, visible_Modalidad, Estado} = req.body;

        // Encuentra y actualiza el documento del usuario en la base de datos
        const token = req.headers.token;

        const decodedToken = jwt.verify(token, process.env.SECRET_KEY_STRING);
    //    const userId = decodedToken.idUser;
       
        const user = await UserCompany.findOneAndUpdate(
            { _id: decodedToken.idUser }, // Suponiendo que tienes el ID del usuario en la solicitud (req.user.id)
            { $set: { name, Descripcion, Experiencia, Acerca_de, Habilidades, StrongsHab, Idiomas, bday, age, estado_civil, Horarios, Disponibilidad, Renta_minima, visible_bday, visible_estado_civil, visible_Horarios, visible_Disponibilidad, visible_Renta_minima, Modalidad, visible_Modalidad, Estado   } },
            { new: true }
        );

        res.status(200).json({ message: 'Perfil actualizado correctamente', user });
    } catch (error) {
        console.error('Error actualizando perfil:', error);
        res.status(500).json({ message: 'Error al actualizar el perfil' });
    }
};

module.exports = updateProfileCompany;