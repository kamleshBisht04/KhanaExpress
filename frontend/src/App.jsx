import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Home/>} />
        <Route path="/order" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
