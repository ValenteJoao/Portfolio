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
    <header className="flex items-center justify-between h-20 px-6 md:px-24 fixed z-10 w-full shadow-md bg-zinc-950">
      <div className="flex items-center">
        <h1 className="text-xl font-black text-white">
          <span className="text-yellow-300 pr-3">{`{`}</span>
          JOÃO VALENTE
          <span className="text-yellow-300 pl-3">{`}`}</span>
        </h1>
      </div>

      {/* Botão do Menu Hambúrguer */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Menu de Navegação */}
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row gap-6 text-white absolute md:static top-20 left-0 w-full md:w-auto bg-zinc-950 md:bg-transparent p-6 md:p-0`}
      >
        <a
          onClick={() => scrollToPages("inicio")}
          className={`${
            activeSection === "inicio" ? "border-b-2 border-[#FFE400]" : ""
          } cursor-pointer hover:border-b-2 hover:border-[#FFE400] hover:transition-all`}
        >
          Inicio
        </a>
        <a
          onClick={() => scrollToPages("QuemSouEu")}
          className={`${
            activeSection === "QuemSouEu" ? "border-b-2 border-[#FFE400]" : ""
          } cursor-pointer hover:border-b-2 hover:border-[#FFE400] hover:transition-all`}
        >
          Quem sou eu
        </a>
        <a
          onClick={() => scrollToPages("projetos")}
          className={`${
            activeSection === "projetos" ? "border-b-2 border-[#FFE400]" : ""
          } cursor-pointer hover:border-b-2 hover:border-[#FFE400] hover:transition-all`}
        >
          Projetos
        </a>
        <a
          onClick={() => scrollToPages("contato")}
          className={`${
            activeSection === "contato" ? "border-b-2 border-[#FFE400]" : ""
          } cursor-pointer hover:border-b-2 hover:border-[#FFE400] hover:transition-all`}
        >
          Contato
        </a>
      </nav>
    </header>
  );
}
