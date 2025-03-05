import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Navbar from "./Components/Navbar";
import Mission from "./Components/Mission";
import WrongPath from "./Components/WrongPath";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="*" element={<WrongPath />} />
      </Routes>
    </div>
  );
}

export default App;
