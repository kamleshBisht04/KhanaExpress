import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Login from "./components/LogIn/LogIn";
import useStore from "./context/useStore";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import ScrollHandler from "./components/Navbar/ScrollHandler/ScrollHandler";
import { Toaster } from "react-hot-toast";

function App() {
  const { showLogin } = useStore();

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          className: "micro-toast",
          success: { className: "micro-toast success" },
          error: { className: "micro-toast error" },
        }}
      />
      <ScrollHandler />
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
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
