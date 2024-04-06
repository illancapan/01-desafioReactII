import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Contacto from "./pages/Contacto";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
    <NavBar/>
    <div className="mt-5">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
      </div>
    </>
  );
}

export default App;
