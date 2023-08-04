import { useContext } from "react";
import { ImageContext } from "../context/ImageProvider";

const Favorites = () => {
  const { foto } = useContext(ImageContext);
  return (
    <div className="contenedor">
      <h2 className="h2">Natural Pic</h2>
      <div className="galeria-port">
        {foto
          .filter((imagen) => imagen.liked)
          .map((imagen, i) => (
            <div
              key={i}
              className="image-api"
              style={{
                backgroundImage: `url(${imagen.src.portrait})`,
              }}
            ></div>
          ))}
      </div>
    </div>
  );
};

export default Favorites;
