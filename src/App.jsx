import React from "react";

import { BrowserRouter } from "react-router-dom";
import ExperiencePage from "./pages/ExperiencePage";
import PortofolioPage from "./pages/PortofolioPage";
import NavbarComponent from "./Components/NavbarComponent";
import AboutMe from "./pages/AboutMe";
import FooterComponent from "./Components/FooterComponent";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <AboutMe />
        <ExperiencePage />
        <PortofolioPage />

        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
