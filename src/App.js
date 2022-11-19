import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";

function App() {
  const [responsiveWidth, setResponsiveWidth] = useState("");
  const [styleHome, setStyleHome] = useState(true);
  const handleDesktopMode = () => {
    setResponsiveWidth(window.screen.availWidth);
    setStyleHome(true);
  };
  const handleTablet = () => {
    setResponsiveWidth("768");
    setStyleHome(false);
  };
  const handleTabletP = () => {
    setResponsiveWidth("1024");
    setStyleHome(false);
  };
  const handleMobile = () => {
    setResponsiveWidth("480");
    setStyleHome(false);
  };
  return (
    <>
      <Navbar
        handleDesktopMode={handleDesktopMode}
        handleTablet={handleTablet}
        handleTabletP={handleTabletP}
        handleMobile={handleMobile}
      />
      <Home
        styleHome={styleHome}
        setResponsiveWidth={setResponsiveWidth}
        responsiveWidthScreen={responsiveWidth}
      />
    </>
  );
}

export default App;
