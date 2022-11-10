import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Context from "../context/Provider";

export default function InicioSesion() {
  const { usuarios, setisAuthenticated, changeForm } = useContext(Context);
  const navigate = useNavigate();

  const iniciarSesion = () => {
    let correo = document.getElementById("email").value;
    let contraseña = document.getElementById("pwd").value;
    if (!correo && !contraseña) {
      alert("llene la cosa no sea weon");
    } else {
      let user = usuarios.find((e) => e.correo === correo);
      if (user !== undefined) {
        if (user.contraseña == contraseña) {
          setisAuthenticated(true);
          navigate(`/home`);
        } else {
          alert("Contraseña equivocada");
        }
      } else {
        alert("No existe el fucking correo");
      }
    }
  };

  return (
    <>
      <h2>Iniciar sesión</h2>
      <div className="in-sesion">
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Correo@example.com"
        />
        <input
          type="password"
          className="form-control"
          id="pwd"
          placeholder="Contraseña"
        />
        <button
          type="submit"
          onClick={iniciarSesion}
          className="btn btn-primary"
        >
          Iniciar Sesión
        </button>
      </div>
      <hr className="hrdiv" />
      <div className="registrar">
        <button onClick={() => changeForm(false)}>Crear cuenta nueva</button>
      </div>
    </>
  );
}
