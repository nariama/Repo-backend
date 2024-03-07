const uploadImageTalent = async (req, res) => {
    try {
        const user = await User.findById(req.user.id); // Suponiendo que tienes un middleware de autenticación que agrega req.user con el ID del usuario
        const imageBuffer = req.file.buffer; // Suponiendo que utilizas multer para manejar la carga de archivos
        user.profileImage = imageBuffer;
        await user.save();
        res.send('Imagen almacenada correctamente');
    } catch (error) {
        res.status(500).send('Error al almacenar la imagen');
    }
};

module.exports = uploadImageTalent;