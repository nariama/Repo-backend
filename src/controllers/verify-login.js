// authController.js

const jwt = require('jsonwebtoken');

// Función para verificar el estado de login
const verifyLogin = (req, res) => {
  // Verifica si se envió un token en el encabezado Authorization
  const token = req.headers.token;

  if (!token) {
    return res.status(401).json({ message: 'No se proporcionó un token de autenticación' });
  }

  // Verifica el token
  jwt.verify(token, process.env.SECRET_KEY_STRING, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token inválido' });
    }

    // El token es válido, puedes hacer más validaciones aquí si es necesario
    return res.status(200).json({ message: 'Usuario autenticado' });
  });
};

module.exports = { verifyLogin };
