import React from "react";

import { BrowserRouter } from "react-router-dom";
import ExperiencePage from "./pages/ExperiencePage";
import PortofolioPage from "./pages/PortofolioPage";
import NavbarComponent from "./Components/NavbarComponent";
import AboutMe from "./pages/AboutMe";
import FooterComponent from "./Components/FooterComponent";
import EducationPage from "./pages/Education";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavbarComponent />
        <AboutMe />
        <ExperiencePage />
        <EducationPage />
        <PortofolioPage />

        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
