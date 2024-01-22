import styles from "./App.module.css";
import { Navbar } from "./Parts/Navbar/Navbar";
import { Intro } from "./Parts/Intro/Intro";
import { Projects } from "./Parts/Projects/Projects";
import { Technologies } from "./Parts/Technologies/Technologies";
import { Footer } from "./Parts/Footer/Footer";
import { Routes, Route } from 'react-router-dom';

function App() {

  return <div className={styles.App}>
   <Navbar />
   <Intro />
   <Projects />
   <Technologies />
   <Footer />
   <Routes>
    <Route path="/about" element={<About/>} />
   </Routes>
  </div>
}

export default App
