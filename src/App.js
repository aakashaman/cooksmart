import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import "./App.css";
import Recipe from "./Components/Recipe";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "../src/Components/About.jsx";
import Home from "./Components/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
