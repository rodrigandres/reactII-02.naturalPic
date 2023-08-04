import { createContext, useEffect, useState } from "react";

export const ImageContext = createContext();

const ImageProvider = ({ children }) => {
  const [foto, setfoto] = useState([]);

  const baseURL = "https://api.pexels.com/v1/curated?page=2&per_page=40";

  const getImg = async () => {
    const response = await fetch(baseURL, {
      headers: {
        accept: "application/json",
        authorization:
          "563492ad6f9170000100000197369c3a727e43739307691ad508dc5f",
      },
    });
    const data = await response.json();
    console.log(data.photos);
    setfoto(data.photos);
  };

  useEffect(() => {
    getImg();
  }, []);

  const toggleLike = (id) => {
    const newImages = foto.map((imagen) => {
      if (imagen.id === id) {
        return { ...imagen, liked: !imagen.liked };
      }
      return imagen;
    });
    setfoto(newImages);
  };

  return (
    <ImageContext.Provider value={{ foto, setfoto, toggleLike }}>
      {children}
    </ImageContext.Provider>
  );
};

export default ImageProvider;
