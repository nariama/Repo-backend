const express = require('express');
const router = express.Router();
const UserTalent = require('../models/userTalent.model.js');

// Ruta para eliminar un usuario por email
router.delete('/usuarios/:userEmail', async (req, res) => {
    try {
      const userEmail = req.params.userEmail;
  
      // Verificar si el usuario existe por email
      const usuario = await UserTalent.findOne({ email: userEmail });
  
      if (!usuario) {
        return res.status(404).json({
          msg: 'Usuario no encontrado',
          code: 404,
        });
      }
  
      // Eliminar el usuario por email
      await UserTalent.findOneAndDelete({ email: userEmail });
  
      res.status(200).json({
        msg: 'Usuario eliminado con éxito',
        code: 200,
        data: usuario,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        msg: 'Error interno del servidor',
        code: 500,
      });
    }
  });
  
  module.exports = router;