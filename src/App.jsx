import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About"
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ContactMe from "./components/ContactMe";
import { createBrowserRouter , RouterProvider } from "react-router-dom";

const App = () => {

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <div className="mx-auto container px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies/>
        <Projects/>
        <Contact />
      </div>
    </div>
  );
};

export default App;
