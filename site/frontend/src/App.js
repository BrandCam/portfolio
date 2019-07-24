import withRoot from "./withRoot";
import React from "react";
import "./App.css";
import AppAppBar from "./views/AppAppBar";
import Hero from "./views/Hero";
import AppFooter from "./views/AppFooter";
import SmokingHero from "./views/SmokingHero";
import About from "./views/About";
import Projects from "./views/Projects";

function App() {
  return (
    <React.Fragment>
      <AppAppBar />
      <Hero />
      <About />
      <Projects />
      <SmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(App);
