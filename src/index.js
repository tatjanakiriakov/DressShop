import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import ImageSlider from "./components/ImageSlider";
import { CarouselData } from "./components/CarouselData";
import DressInspo from "./components/DressInspo";
import Contact from "./components/Contact";
import Winter2022 from "./components/Winter2022";
import Summer2022 from "./components/Summer2022";
import ShortDresses from "./components/ShortDresses";
import About from "./components/About";
import LongDresses from "./components/LongDresses";
import BeigeWinterDress from "./components/dresses/BeigeWinterDress";
import ExtravagantPinkOne from "./components/dresses/ExtravagantPinkOne";
import TheShortRedOne from "./components/dresses/TheShortRedOne";
import Bavaria from "./components/dresses/Bavaria";
import Sunflowery from "./components/dresses/Sunflowery";

ReactDOM.render(
  <Router>
    <Navbar />

    <Routes>
      <Route path="/home" element={<ImageSlider slides={CarouselData} />} />
      <Route path="/inspo" element={<DressInspo />} />
      <Route path="/winter2022" element={<Winter2022 />} />
      <Route path="/about" element={<About />} />

      <Route path="/summer2022" element={<Summer2022 />} />
      <Route path="/short" element={<ShortDresses />} />
      <Route path="/beigewinterdress" element={<BeigeWinterDress />} />
      <Route path="/bavaria" element={<Bavaria />} />
      <Route path="/sunflowery" element={<Sunflowery />} />
      <Route path="/theshortredone" element={<TheShortRedOne />} />
      <Route path="/extravagantpinkone" element={<ExtravagantPinkOne />} />
      <Route path="/long" element={<LongDresses />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<DressInspo />}>
        <Route path="" element={<DressInspo />} />
        <Route path=":postSlug" element={<DressInspo />} />
      </Route>
    </Routes>
  </Router>,

  document.getElementById("root")
);
