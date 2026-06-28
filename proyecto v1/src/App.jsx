import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Costa from "./pages/Costa";
import Sierra from "./pages/Sierra";
import Selva from "./pages/Selva";
import Reservas from "./pages/Reservas";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/costa" element={<Costa />} />
        <Route path="/sierra" element={<Sierra />} />
        <Route path="/selva" element={<Selva />} />
        <Route path="/reservas" element={<Reservas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;