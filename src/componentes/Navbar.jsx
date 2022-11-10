import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faUser,
  faCartShopping
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import Context from "../context/Provider";
import MiniCart from "./MiniCart";

export default function Navbar() {
  const { setisAuthenticated } = useContext(Context);

  const cerrarSesion = () => {
    setisAuthenticated(false);
  };

  return (
    <>
      <nav className="navbar d-flex sticky-top navbar-expand-lg navbar-dark bg-dark navp">
        <a className="navbar-brand order-lg-1 order-sm-2 order-2" href="/home">
          <img
            src="img/logo.svg"
            width="150px"
            className="d-inline-block align-top"
            alt=""
          />
        </a>
        <button
          className="navbar-toggler order-lg-2 order-sm-1 order-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse order-lg-2 order-sm-1 order-1 justify-content-center showmenu"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/tornamesas" className="nav-link">
                <h4>Tornamesas</h4>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/parlantes" className="nav-link">
                <h4>Parlantes</h4>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/parlantes" className="nav-link">
                <h4>Audífonos</h4>
              </Link>
            </li>
          </ul>
        </div>
        <div className="form-inline order-lg-3 order-sm-3 order-3 my-2 my-lg-0">
          <ul className="navbar-nav  d-flex flex-row justify-content-between nav-gap">
            <li className="nav-item">
              <Link to="/perfil" className="nav-link">
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                <FontAwesomeIcon icon={faCartShopping} />
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={cerrarSesion} className="nav-link">
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <MiniCart />
    </>
  );
}
