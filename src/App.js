import "./App.css";
import { Routes, Route } from "react-router-dom";
import ImageGallery from "./ImageGallery/ImageGallery";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path={"/"} element={<ImageGallery />} />
      </Routes>
    </div>
  );
}

export default App;
