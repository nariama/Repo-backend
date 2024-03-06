const UserTalent = require("../models/userTalent.model.js");
const ExperienciaLaboral = require("../models/userExperience.model.js");
const jwt = require('jsonwebtoken');



const agregarExperienciaLaboral = async (req, res) => {
    const { actividad, lugar, fecha, descripcion } = req.body;
    // const userId = req.idUser; // asumiendo que tienes el ID del usuario en req.user.id

    const token = req.headers.token;

    const decodedToken = jwt.verify(token, process.env.SECRET_KEY_STRING);
   const userId = decodedToken.idUser;

    try {
        const nuevaExperiencia = new ExperienciaLaboral({
            actividad,
            lugar,
            fecha,
            descripcion,
            userId
        });

        await nuevaExperiencia.save();

        // Agregar el ID de la nueva experiencia laboral al usuario
        const usuario = await UserTalent.findById(userId);
        usuario.experienciasLaborales.push(nuevaExperiencia._id);
        await usuario.save();

        res.status(201).json({
            msg: "Experiencia laboral agregada con éxito",
            code: 201,
            data: nuevaExperiencia
        });
    } catch (error) {
        console.error("Error al agregar experiencia laboral:", error);
        res.status(500).json({
            code: 500,
            msg: "Error interno del servidor"
        });
    }
};

module.exports = { agregarExperienciaLaboral };
