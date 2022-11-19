import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";

function App() {
  const [desktopMode, setDesktopMode] = useState("");
  const [tabletMode, setTabletMode] = useState("");
  const [tabletP, setTabletP] = useState("");
  const [mobile, setMobile] = useState("");
  const [responsiveWidth, setResponsiveWidth] = useState("");
  const handleDesktopMode = () => {
    console.log(window.screen.availWidth);
    setResponsiveWidth(window.screen.availWidth);
  };
  const handleTablet = () => {
    setResponsiveWidth('768');
    console.log(window.screen.availWidth);
  };
  const handleTabletP = () => {
    setResponsiveWidth('1024');

    console.log(window.screen.availWidth);
  };
  const handleMobile = () => {
    setResponsiveWidth('480');
    console.log(window.screen.availWidth);
  };
  return (
    <>
      <Navbar
        setDesktopMode={setDesktopMode}
        handleDesktopMode={handleDesktopMode}
        handleTablet={handleTablet}
        handleTabletP={handleTabletP}
        handleMobile={handleMobile}
      />
      <Home
        desktopMode={desktopMode}
        tabletMode={tabletMode}
        tabletP={tabletP}
        mobile={mobile}
        setResponsiveWidth={setResponsiveWidth}
        responsiveWidthScreen={responsiveWidth}
      />
    </>
  );
}

export default App;
