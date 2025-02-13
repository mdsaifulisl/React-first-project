import React from "react";
import "./assets/css/common.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Headers from "./component/header/Headers";
import Home from "./pages/Home/Home";
import Footer from "./component/footer/Footers";

const App = () => {
  return (
    <div>
      <Home />
      
    </div>
  );
};

export default App;
