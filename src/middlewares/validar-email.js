async function verificarCorreoExistente(req, res, next) {
    const email = req.body.email;

    try {
        const usuario = await userTalent.findOne({ email: email });
        if (usuario) {
            return res.status(400).json({ mensaje: "El correo electrónico ya está registrado" });
        }
    } catch (error) {
        return res.status(500).json({ mensaje: "Error al verificar el correo electrónico en la base de datos" });
    }

    // Si el correo no existe en la base de datos, pasar al siguiente middleware
    next();
}

module.exports = verificarCorreoExistente;
