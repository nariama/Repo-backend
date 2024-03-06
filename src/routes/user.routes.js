const express = require('express');
const router = express.Router();

const  listarUsuarios  = require("../controllers/user.getAllUser.js");
// const actualizarUsuario = require('../controllers/user.Update.js');
const crearUsuarioTalento = require("../controllers/user.createUserTalent.js");
const crearUsuarioEmpresa = require('../controllers/user.createUserCompany.js');

const login = require('../controllers/login.user.js');
const isAuth = require('../middlewares/validar-jwt.js');
const { agregarExperienciaLaboral } = require("../controllers/user.createUserExperience.js");
const { verifyLogin } = require('../controllers/verify-login.js');
const profileTalent = require("../controllers/user.profileTalent.js")

const multer = require('multer');


// Configuración de multer para guardar los archivos en la carpeta 'uploads'
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  
  const upload = multer({ storage });

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

// Ruta para subir archivos
router.post('/subir_archivo', upload.single('file'), (req, res) => {
    try {
      if (!req.file) {
        throw new Error('No se ha seleccionado ningún archivo.');
      }
      
      res.json({ mensaje: 'Archivo subido con éxito' });
    } catch (error) {
      console.error('Error al subir el archivo:', error);
      res.status(500).json({ error: 'Error al subir el archivo' });
    }
  });

// Ruta para verificar el estado de login
router.post('/verify-login', isAuth, verifyLogin);

// Ruta para obtener el perfil de usuario
router.get('/perfil_talento_usuario', isAuth, profileTalent); 

module.exports = router;