import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Skills from "./components/Skills";
import Research from "./components/Research";
import Teaching from "./components/Teaching";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";
import "./index.css";

function App() {
  const [loaded, setLoaded] = useState(false);
  const handleDone = useCallback(() => setLoaded(true), []);

  return (
    <ThemeProvider>
      <Cursor />
      <AnimatePresence>
        {!loaded && <Loader key="loader" onDone={handleDone} />}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ background: "var(--bg)", minHeight: "100vh" }}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Expertise />
          <Skills />
          <Research />
          <Teaching />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </ThemeProvider>
  );
}

export default App;
