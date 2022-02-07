import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import ImageSlider from "./components/ImageSlider";
import { CarouselData } from "./components/CarouselData";
import DressInspo from "./components/DressInspo";
import Contact from "./components/Contact";

ReactDOM.render(
  <Router>
    <Navbar />

    <Routes>
      <Route path="/home" element={<ImageSlider slides={CarouselData} />} />
      <Route path="/inspo" element={<DressInspo />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<DressInspo />}>
        <Route path="" element={<DressInspo />} />
        <Route path=":postSlug" element={<DressInspo />} />
      </Route>
    </Routes>
  </Router>,

  document.getElementById("root")
);
