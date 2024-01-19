import styles from "./App.module.css";
import { Navbar } from "./Parts/Navbar/Navbar";
import { Intro } from "./Parts/Intro/Intro";
function App() {

  return <div className={styles.App}>
   <Navbar />
   <Intro />
  </div>
}

export default App
