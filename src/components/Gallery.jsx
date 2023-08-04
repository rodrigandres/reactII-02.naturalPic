import { useContext, useState } from "react";
import { ImageContext } from "../context/ImageProvider";
import { BsFillHeartFill } from "react-icons/bs";
import "../assets/css/gallery.css";
import Heart from "./Heart";

const Gallery = () => {
  const { foto, toggleLike } = useContext(ImageContext);
  const [btnState, SetBtnState] = useState(false);
  const handleClick = (id) => {
    SetBtnState(!btnState);
  };

  return (
    <div className="contenedor">
      <h2 className="h2">Natural Pic</h2>
      <div className="galeria-port">
        {foto.map((imagen, i) => (
          <div
            key={i}
            className="image-api"
            style={{
              backgroundImage: `url(${imagen.src.large})`,
            }}
            onClick={() => toggleLike(imagen.id)}
          >
            <BsFillHeartFill
              className={`logo ${imagen.liked ? "logored" : "logo"}`}
              onClick={handleClick}
            />

            <p className="p">{imagen.photographer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
