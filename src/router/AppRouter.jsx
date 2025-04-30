import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Home from "../pages/Home";
import Culture from "../pages/Culture";
import Symbols from "../pages/Symbols";
import Cuisine from "../pages/Cuisine";
import Landmarks from "../pages/Landmarks";

function AppRouter() {
  return (
    <BrowserRouter>
    <div className="site-container relative">
      <Header />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/culture" element= {<Culture />} />
          <Route path="/symbols" element= {<Symbols />} />
          <Route path="/cuisine" element= {<Cuisine />} />
          <Route path="/landmarks" element= {<Landmarks />} />
        </Routes>
      </main>
    </div>
    </BrowserRouter>  
  )
}

export default AppRouter;