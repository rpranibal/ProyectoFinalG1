import { useContext } from "react";
import Context from "../context/Provider";
import { nanoid } from "nanoid";

export default function InicioSesion() {
  const { usuarios, setUsuarios, changeForm } = useContext(Context);

  const registrar = () => {
    let correo = document.getElementById("Remail").value;
    let contrasena = document.getElementById("Rpsw").value;
    let contrasenaRpt = document.getElementById("psw-repeat").value;
    if (correo !== "" && contrasena !== "" && contrasena !== "") {
      if (contrasena === contrasenaRpt) {
        let existe = usuarios.filter((e) => e.correo === correo);
        if (existe.length === 0) {
          setUsuarios([
            ...usuarios,
            { userId: nanoid(), correo: correo, contraseña: contrasena }
          ]);
          changeForm(true);
          alert("usuario registrado");
        } else {
          alert("kep2 el correo ya existe prro");
        }
      } else {
        alert("contraseñas distintas");
      }
    } else {
      alert("agregue su info pirfivir");
    }
  };
  return (
    <>
      <div className="in-sesion">
        <h2>Registrate</h2>
        <input
          type="text"
          className="form-control"
          placeholder="Correo@example.com"
          name="email"
          id="Remail"
          required
        />
        <input
          type="password"
          className="form-control"
          placeholder="Contraseña"
          name="psw"
          id="Rpsw"
          required
        />
        <input
          type="password"
          className="form-control"
          placeholder="Repetir Contraseña"
          name="psw-repeat"
          id="psw-repeat"
          required
        />
        <button onClick={registrar} type="submit" className="btn btn-primary">
          Registrate
        </button>
      </div>
      <hr className="hrdiv" />
      <div className="registrar">
        <button onClick={() => changeForm(true)}>Iniciar Sesión</button>
      </div>
    </>
  );
}
