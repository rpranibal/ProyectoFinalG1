import InicioSesion from "../componentes/InicioSesion";
import Registro from "../componentes/Registro";
import { useContext } from "react";
import ProductosContext from "../context/Provider";

export default function Intro() {
  const { Intro } = useContext(ProductosContext);

  return (
    <div className="vpback">
      <div className="fondiwis"></div>
      <div className="Container-intro">
        <section className="presentacion">
          <img src="img/logo.svg" />
          <p>
            El sonido tiene el poder de hacernos &nbsp;
            <span className="blink_me" id="rotate">
              <span> Viajar</span>
              <span> Cambiar</span>
              <span> Soñar</span>
              <span> Sentir</span>
              <span> Crecer</span>
              <span> Mejores</span>
            </span>
          </p>
        </section>
        <section className="formulario">
          {Intro ? <InicioSesion /> : <Registro />}
        </section>
      </div>
    </div>
  );
}
