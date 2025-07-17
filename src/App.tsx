import { Header } from "./layout/Header";
import "./App.css";
import { Home } from "./layout/Inicio";
import { About } from "./layout/Sobre";
import { Projects } from "./layout/Projects";
import { Contact } from "./layout/Contato";
import { Footer } from "./layout/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";

function App() {
  const [btnUp, setBtnUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBtnUp(true);
      } else {
        setBtnUp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToPages(id: string) {
    const section: HTMLElement | null = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <ToastContainer />
      <div
        className={`fixed z-50 bottom-8 right-8 max-md:right-1/2 max-md:translate-x-1/2 transition-opacity duration-500 ease-in-out transform ${btnUp ? "opacity-100 scale-105" : "opacity-0 scale-75"
          }`}
      >
        {btnUp && (
          <a
            onClick={() => scrollToPages("inicio")}
            className="flex flex-col items-center size-12 justify-center bg-primary rounded-full cursor-pointer hover:scale-105 transform transition duration-300 ease-in-out"
          >
            <FaArrowUp size={14} style={{ fill: "#090E16" }} />{" "}
          </a>
        )}
      </div>
    </>
  );
}

export default App;
