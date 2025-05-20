import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Culture from "../pages/Culture";
import Symbols from "../pages/Symbols";
import Cuisine from "../pages/Cuisine";

function AppRouter() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <BrowserRouter basename="/philippines">
      <div className="site-container relative">
        <Header />
        <main>
          <Nav isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
          <Routes>
            <Route path="/" element={<Home setIsNavOpen={setIsNavOpen} />} />
            <Route path="/culture" element={<Culture />} />
            <Route path="/symbols" element={<Symbols />} />
            <Route path="/cuisine" element={<Cuisine />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
