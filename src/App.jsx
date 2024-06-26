import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Categories from "./Pages/Categories";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import SignUp from "./Pages/SignUp";
import men_banner from "./assets/banner_mens.png";
import women_banner from "./assets/banner_women.png";
import kid_banner from "./assets/banner_kids.png";
import Login from "./Pages/Login";

const App = () => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route
              path="/men"
              element={<Categories category="men" banner={men_banner} />}
            />
            <Route
              path="/women"
              element={<Categories category="women" banner={women_banner} />}
            />
            <Route
              path="/kids"
              element={<Categories category="kids" banner={kid_banner} />}
            />
            <Route path="/product" element={<Product />}>
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
