import Navbar from "../componentes/Navbar";
import { useContext } from "react";
import Context from "../context/Provider";

const Profile = () => {
  const { productos, setProductos } = useContext(Context);

  const deleteFavorito = (id) => {
    const productosIndex = productos.findIndex((e) => e.id === id);
    productos[productosIndex].liked = !productos[productosIndex].liked;
    setProductos([...productos]);
  };
  return (
    <>
      <Navbar />

      <div className="p-3 galeria grid-columns-5">
        {productos
          .filter((elem) => elem.liked)
          .map((elem, i) => (
            <img
              src={elem.img}
              alt=""
              onClick={() => deleteFavorito(elem.id)}
              key={i}
            />
          ))}
      </div>
    </>
  );
};

export default Profile;
