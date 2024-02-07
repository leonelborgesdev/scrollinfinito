import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

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

const InfiniteScrollImages = () => {
  const [items, setItems] = useState(initialImages.slice(0, 10)); // inicialmente muestra 10 imágenes

  const fetchMoreData = () => {
    setTimeout(() => {
      setItems((prevItems) => [
        ...prevItems,
        ...initialImages.slice(prevItems.length, prevItems.length + 10),
      ]);
    }, 1500); // tiempo de simulación de carga
  };

  return (
    <div>
      <h1>Infinite Scroll Images</h1>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={items.length < initialImages.length}
        loader={<h4>Loading...</h4>}
        endMessage={<p>No more images</p>}
      >
        {items.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Image ${index}`}
              style={{ width: "200px", height: "200px", margin: "10px" }}
            />
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default InfiniteScrollImages;
