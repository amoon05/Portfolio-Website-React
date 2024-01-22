import React from "react";
import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Parts/Navbar/Navbar";
import { Intro } from "./Parts/Intro/Intro";
import { Projects } from "./Parts/Projects/Projects";
import { Technologies } from "./Parts/Technologies/Technologies";
import { Footer } from "./Parts/Footer/Footer";
import { About } from "./Parts/About/About";

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Intro />
              <Projects />
              <Technologies />
            </>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;