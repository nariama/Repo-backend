const profileImageTalent =async (req, res) => {
    try {
        const user = await User.findById(req.user.id); // Suponiendo que tienes un middleware de autenticación que agrega req.user con el ID del usuario
        if (!user || !user.profileImage) {
            return res.status(404).send('Imagen no encontrada');
        }
        res.set('Content-Type', 'image/png'); // Establecer el tipo de contenido de la respuesta
        res.send(user.profileImage);
    } catch (error) {
        res.status(500).send('Error al obtener la imagen');
    }
};

module.exports = profileImageTalent;