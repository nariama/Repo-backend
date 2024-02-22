const User = require("../models/user.model.js");

const actualizarUsuario = async (req, res) => {
  const { id } = req.params;
  const { name, lastName } = req.body;
  // tomamos el id para buscar en la base de datos a ese usuario

  if (!id) {
    return res.status(400).json({
      msg: "No se ha proporcionado un ID",
      code: 400,
    });
  }

  if (id.length !== 24) {
    return res.status(400).json({
      msg: "El ID proporcionado no es válido",
      code: 400,
    });
  }

  if(!name || !lastName) {
    return res.status(400).json({
      msg: "Debes enviar datos para actualizar",
      code: 400
    })
  }

  const userChanges = {
    name: name,
    lastName: lastName,
  };

  try {
    await User.findByIdAndUpdate(id, userChanges);

    res.status(200).json({
      msg: "Usuario actualizado con éxito",
      code: 200,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = actualizarUsuario;