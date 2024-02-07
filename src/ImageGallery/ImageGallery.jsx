import React, { useState, useEffect } from "react";

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    setIsLoading(true);
    // Simulando una llamada a una API para obtener las imágenes
    const imagesData = [
      "https://flagcdn.com/w320/aw.png",
      "https://flagcdn.com/w320/ao.png",
      "https://flagcdn.com/w320/aw.png",
      "https://flagcdn.com/w320/aw.png",
      "https://flagcdn.com/w320/aw.png",
      "https://flagcdn.com/w320/aw.png",
      "https://flagcdn.com/w320/aw.png",
      "https://flagcdn.com/w320/aw.png",
      "https://flagcdn.com/w320/aw.png",
      "https://flagcdn.com/w320/ai.png",
      "https://flagcdn.com/w320/aw.png",
      "https://flagcdn.com/w320/aw.png",
      "https://flagcdn.com/w320/aw.png",
      "https://flagcdn.com/w320/am.png",
      "https://flagcdn.com/w320/aw.png",
      "https://flagcdn.com/w320/aw.png",
      "https://flagcdn.com/w320/aw.png",
      "https://flagcdn.com/w320/aw.png",
      "https://flagcdn.com/w320/aw.png",
      "https://flagcdn.com/w320/aw.png",
      "https://flagcdn.com/w320/be.png",
      "https://flagcdn.com/w320/be.png",
      "https://flagcdn.com/w320/be.png",
      "https://flagcdn.com/w320/be.png",
      "https://flagcdn.com/w320/be.png",
      "https://flagcdn.com/w320/be.png",
      "https://flagcdn.com/w320/be.png",
      "https://flagcdn.com/w320/be.png",
      "https://flagcdn.com/w320/be.png",
      "https://flagcdn.com/w320/be.png",
      "https://flagcdn.com/w320/be.png",
      "https://flagcdn.com/w320/be.png",
      "https://flagcdn.com/w320/be.png",
      "https://flagcdn.com/w320/be.png",
      "https://flagcdn.com/w320/be.png",
    ];
    // Simulando un retraso de carga
    setTimeout(() => {
      setImages((prevImages) => [
        ...prevImages,
        ...imagesData.slice((page - 1) * 10, page * 10),
      ]);
      setPage((prevPage) => prevPage + 1);
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        return;
      fetchImages();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="image-gallery">
      <h1>Image Gallery</h1>
      <div className="images">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
      {isLoading && <div>Loading...</div>}
    </div>
  );
};

export default ImageGallery;
