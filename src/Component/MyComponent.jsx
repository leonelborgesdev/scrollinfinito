import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMoreImages } from "../redux/actions";

const MyComponent = () => {
  const images = useSelector((state) => state.images);
  const visibleImagesCount = useSelector((state) => state.visibleImagesCount);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        loadMoreImages(visibleImagesCount);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Sin dependencias

  // Renderizar las imágenes basadas en el estado actual
  const renderImages = () => {
    return images.slice(0, visibleImagesCount).map((image, index) => (
      <div key={index} className="image-container">
        <img src={image} alt={index} />
      </div>
    ));
  };

  return (
    <div>
      <div className="image-gallery">
        {renderImages()} {/* Renderizar las imágenes */}
      </div>
    </div>
  );
};

export default MyComponent;
