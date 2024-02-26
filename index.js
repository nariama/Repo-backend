require('dotenv').config();
const app = require("./src/app/app.js")
const { dbConnection } = require("./src/database/conexion.js")

const port = process.env.DEV_PORT;


app.listen(port, () => {
  console.log(`Aplicacion corriendo en --->>>> http://localhost:${port}`);
});

dbConnection();








import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RegistroUsuariosEmpresas() {
  // Declarar estado
  const [enviar, setEnviar] = useState(false);
  const [formValidado, setFormValidado] = useState(false);

  const formEnviado = () => {
    setEnviar(true);
  };

  const validarFormulario = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setFormValidado(true);
  };

  return (
    <div>
      <div className="container-fluid m-5 bg-light shadow border-5 pt-3">
        <form
          className={`container position-relative needs-validation ${formValidado ? 'was-validated' : ''}`}
          noValidate
          onSubmit={validarFormulario}
        >
          <h1>Registro como EMPRESA</h1>
          <div className="row">
            <div className="col-3"></div>
            <div className="col-3">
              <Link to="/registro_usuarios_talentos" className="btn btn-success text-white w-100 mt-4">
                Regístrate como TALENTO
              </Link>
            </div>
            <div className="col-3">
              <Link to="/registro_usuarios_empresas" className="btn btn-primary text-white w-100 mt-4">
                Regístrate como EMPRESA
              </Link>
            </div>
            <div className="col-3"></div>
          </div>
          <div className="row">
            <div className="col-6 col-sm-6 mb-3">
              <label className="col-12 form-label" htmlFor="name">
                Nombre de la empresa
              </label>
              <input className="form-control" id="name" type="text" placeholder="Nombre de empresa" required />
              <div className="invalid-feedback"> Ingresa el Nombre de la empresa</div>
              <div className='valid-feedback'> Nombre ingresado correctamente</div>
            </div>
            <div className="col-6 col-sm-6 mb-3">
              <label className="form-label" htmlFor="email">
                Email Corporativo
              </label>
              <input className="form-control" id="email" type="email" placeholder="Email corporativo" required />
              <div className="invalid-feedback"> Por favor, ingresa el Email corporativo</div>
              <div className='valid-feedback'> Email corporativo ingresado correctamente </div>
            </div>
          </div>
          {/* Resto de tu formulario */}
          <div className="d-grid">
            <button className="btn btn-primary btn-lg mb-4" type="submit">
              Enviar
            </button>
            <h3>{enviar ? "Has enviado exitosamente el formulario" : "No has enviado el Formulario"}</h3>
          </div>
        </form>
      </div>
      <img src="" className="img-fluid mx-auto d-block mb-2" alt="" />
      <script>
        {(() => {
          'use strict';

          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          const forms = document.querySelectorAll('.needs-validation');

          // Loop over them and prevent submission
          Array.from(forms).forEach((form) => {
            form.addEventListener('submit', (event) => {
              if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
                form.classList.add('was-validated');
              }
            }, false);
          });
        })()}
      </script>
    </div>
  );
}
