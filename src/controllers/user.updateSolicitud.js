const UserTalent = require('../models/userTalent.model'); // Importa tu modelo de usuario
const UserCompany = require('../models/userCompany.model'); // Importa tu modelo de usuario


const updateSolicitud =  async (req, res) => {
    try {
        const { userId } = req.params;
        const { solicitud } = req.body;
        console.log(solicitud)

        // Buscar el usuario por su ID
        const user = await UserTalent.findById(userId);

        // Verificar si el usuario existe
        if (!user) {

            const user = await UserCompany.findById(userId);
        } else {
            return res.status(404).json({ message: 'User not found' });

        }



        // Actualizar el campo de solicitud
        user.Solicitud = solicitud;
        await user.save();

        res.status(200).json({ message: 'User solicitud updated successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Failed to update user solicitud', error: error.message });
    }
}

module.exports = updateSolicitud;