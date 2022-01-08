import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Pricing from "./components/pages/Pricing";
import Register from "./components/pages/Register";
import Beehives from "./components/pages/Beehives";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beehives" element={<Beehives />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
