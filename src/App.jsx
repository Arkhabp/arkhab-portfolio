import React from "react";

import { BrowserRouter } from "react-router-dom";
import ExperiencePage from "./pages/ExperiencePage";
import PortofolioPage from "./pages/PortofolioPage";
import NavbarComponent from "./Components/NavbarComponent";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <header>
          <NavbarComponent />
        </header>
        <AboutMe />
        <ExperiencePage />
        <PortofolioPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
