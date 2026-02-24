import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Stats from "./components/Stats";
import Values from "./components/Values";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>

    <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#020617",
            color: "#e5e7eb",
            border: "1px solid #1e293b",
          },
        }}
      />

      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Experience />
      <Values />
      <Contact />
      <Footer />
    </>
  );
}
