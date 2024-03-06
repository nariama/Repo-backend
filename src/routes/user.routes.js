const express = require('express');
const router = express.Router();

const  listarUsuarios  = require("../controllers/user.getAllUser.js");
// const actualizarUsuario = require('../controllers/user.Update.js');
const crearUsuarioTalento = require("../controllers/user.createUserTalent.js");
const crearUsuarioEmpresa = require('../controllers/user.createUserCompany.js');

const login = require('../controllers/login.user.js');
const isAuth = require('../middlewares/validar-jwt.js');
const verificarCorreoExistente = require('../middlewares/validar-email.js')
const { agregarExperienciaLaboral } = require("../controllers/user.createUserExperience.js");



//listar usuarios
router.get("/", listarUsuarios);

//crear usuarios
router.post("/crear_usuario_empresa", crearUsuarioEmpresa);

router.post("/crear_usuario_talento", crearUsuarioTalento);

//login
router.post("/login", login);

//actualizar usuario
// router.put("/actualizar-usuario/:id", actualizarUsuario);

//verificar server
router.get("/verificar", (req, res) => {
    res.send("Ruta gestionada");
});

//borrar usuario
router.delete("/eliminar-usuario", (req, res) => {
    res.send("Ruta DELETE gestionada");
});

router.get("/ruta-protegida", isAuth, (req,res) => {  // primero se ejecuta isAuth y despues req, res
    res.send("Ruta protegida");
});

// Ruta para agregar una nueva experiencia laboral
router.post("/experienciasLaborales", isAuth, agregarExperienciaLaboral);

module.exports = router;