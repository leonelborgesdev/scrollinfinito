import "./App.css";
import { Routes, Route } from "react-router-dom";
import InfiniteScrollC from "./InfiniteScrollC/InfiniteScrollC";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path={"/"} element={<InfiniteScrollC />} />
      </Routes>
    </div>
  );
}

export default App;
