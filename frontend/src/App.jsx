import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Login from "./components/LogIn/LogIn";
import useStore from "./context/useStore";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";

function App() {
  const { showLogin } = useStore();

  return (
    <>
      {showLogin && <Login />}
      <header>
        <Navbar />
      </header>
      <main className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
