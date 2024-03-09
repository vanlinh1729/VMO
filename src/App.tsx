import React from "react";
import ScrollToTop from "./components/partials/SrollToTop";
import Header from "./components/partials/header";
import ToTop from "./components/partials/ToTop";
import Social from "./components/partials/Social";
import Footer from "./components/partials/Footer";
import { Route, Routes } from "react-router";
import Home from "./pages/index";
import Services from "./pages/service";
import Profolio from "./pages/Profolio";
import AboutUs from "./pages/aboutus";

function App() {
  return (
    <div>
      <ScrollToTop></ScrollToTop>
      <Header></Header>
      <div className="mt-28">
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/services/*" element={<Services></Services>}></Route>
          <Route path="/portfolio" element={<Profolio></Profolio>} />
          <Route path="/about-us/*" element={<AboutUs></AboutUs>} />
        </Routes>
      </div>
      <Footer></Footer>
      <ToTop></ToTop>
      <Social></Social>
    </div>
  );
}

export default App;
