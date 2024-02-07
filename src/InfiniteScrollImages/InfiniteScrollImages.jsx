import React, { useState, useEffect } from "react";

const InfiniteScrollImages = () => {
  const initialImages = [
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

  const [images, setImages] = useState(initialImages);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
          document.documentElement.offsetHeight &&
        !loading
      ) {
        loadMoreImages();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  const loadMoreImages = () => {
    setLoading(true);
    setTimeout(() => {
      const start = page * pageSize;
      const end = start + pageSize;
      const newImages = initialImages.slice(start, end);
      setImages((prevImages) => [...prevImages, ...newImages]);
      setLoading(false);
      setPage((prevPage) => prevPage + 1);
    }, 1000);
  };

  return (
    <div>
      <h1>Infinite Scroll Images</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} />
        ))}
      </div>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default InfiniteScrollImages;
