import React from "react";
import {
  Footer,
  Blog,
  Possibility,
  Feature,
  WhatGPT4,
  Header,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";
import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT4 />
      <Feature />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
