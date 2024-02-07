import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Example1 } from "./Example1";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path={"/"} element={<Example1 />} />
      </Routes>
    </div>
  );
}

export default App;
