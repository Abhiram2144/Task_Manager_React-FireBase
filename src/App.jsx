import "./App.css";
import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "./config/particles-config";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Purpose from "./components/Purpose";
import ContactUs from "./components/ContactUs";
import Features from "./components/Features";
import Faq from "./components/Faq";
import Todo from "./components/Todo";
import { Routes, Route } from "react-router-dom";


// In this component all the populating is done


function App() {

  // This is required to generate the background particles 

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  // This is for the loaders animations

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          <div class="loader" style={{position:"relative", top:400}}></div>
        </div>
      ) : (
        <div>
          <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        params={particlesConfig}
        style={{ zIndex: -999 }}
      />

        {/* Navbar component  */}

      <Navbar />

      {/* All the routes present in our website are declared here */}

      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<Purpose />} path="/purpose"></Route>
        <Route element={<Features />} path="/features"></Route>
        <Route element={<Faq />} path="/faq"></Route>
        <Route element={<ContactUs />} path="/contactus"></Route>
        <Route path="/todo-space" element={<Todo />}></Route>
        <Route path="/*" element={<Todo />} />
      </Routes>

      {/* Footer component */}

      <Footer></Footer>
        </div>
      )}


    </div>
  );
}

export default App;
