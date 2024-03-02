import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./Pages/Product";
import Sell from "./Pages/Sell";
import Shop from "./Pages/Shop";
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Pages/Cart";
import Signup from "./Pages/Signup";
import Footer from "./Components/Footer/Footer";
import Login from "./Pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./Pages/Profile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={<Shop />}
          />
          <Route
            path='/sell'
            element={<Sell />}
          />
          <Route
            path='/product/:productId'
            element={<Product />}
          />

          <Route
            path='/cart'
            element={<Cart />}
          />
          <Route
            path='/signup'
            element={<Signup />}
          />
          <Route
            path='/login'
            element={<Login />}
          />
          <Route
            path='/profile'
            element={<Profile />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
