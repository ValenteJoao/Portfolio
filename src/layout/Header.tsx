import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importando ícones de hambúrguer e fechar

export function Header() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // Estado para controle do menu

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition < 520) {
        setActiveSection("inicio");
      } else if (scrollPosition >= 520 && scrollPosition < 1100) {
        setActiveSection("QuemSouEu");
      } else if (scrollPosition >= 1100 && scrollPosition < 1800) {
        setActiveSection("projetos");
      } else if (scrollPosition >= 1800) {
        setActiveSection("contato");
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToPages(id: string) {
    const projectsSection = document.getElementById(id);
    projectsSection?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Fecha o menu ao clicar em um link
  }

  return (
    <header className="flex items-center justify-between h-16 px-6 md:px-12 fixed z-50 w-full backdrop-blur-md bg-dark-950/80 border-b border-white/5">
      <div className="flex items-center">
        <h1 className="text-lg font-bold text-white tracking-tight">
          <span className="text-primary font-mono">&lt;</span>
          <span className="mx-2">João Valente</span>
          <span className="text-primary font-mono">/&gt;</span>
        </h1>
      </div>

      {/* Botão do Menu Hambúrguer */}
      <button
        className="md:hidden text-white focus:outline-none p-2 rounded-lg hover:bg-white/10 transition-colors"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Menu de Navegação */}
      <nav
        className={`${isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row gap-1 md:gap-4 text-white absolute md:static top-16 left-0 w-full md:w-auto bg-dark-950/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-6 md:p-0 border-b border-white/5 md:border-none`}
      >
        <a
          onClick={() => scrollToPages("inicio")}
          className={`${activeSection === "inicio"
            ? "text-primary bg-primary/10"
            : "text-gray-300 hover:text-white"
            } cursor-pointer px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/5`}
        >
          Início
        </a>
        <a
          onClick={() => scrollToPages("QuemSouEu")}
          className={`${activeSection === "QuemSouEu"
            ? "text-primary bg-primary/10"
            : "text-gray-300 hover:text-white"
            } cursor-pointer px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/5`}
        >
          Sobre
        </a>
        <a
          onClick={() => scrollToPages("projetos")}
          className={`${activeSection === "projetos"
            ? "text-primary bg-primary/10"
            : "text-gray-300 hover:text-white"
            } cursor-pointer px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/5`}
        >
          Projetos
        </a>
        <a
          onClick={() => scrollToPages("contato")}
          className={`${activeSection === "contato"
            ? "text-primary bg-primary/10"
            : "text-gray-300 hover:text-white"
            } cursor-pointer px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/5`}
        >
          Contato
        </a>
      </nav>
    </header>
  );
}
