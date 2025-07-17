import { useEffect } from "react";
import { FaTimes, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { SkillsProject } from "./SkillsProjects";

// Estilos customizados para o scroll
const scrollStyles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-track {
    background: rgba(30, 41, 59, 0.3);
    border-radius: 10px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(99, 102, 241, 0.5);
    border-radius: 10px;
    transition: all 0.3s ease;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: rgba(99, 102, 241, 0.8);
  }
  
  .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: rgba(99, 102, 241, 0.5) rgba(30, 41, 59, 0.3);
  }
`;

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: number;
    nome: string;
    descricao: string;
    foto: string;
    tecnologia1: string;
    tecnologia2: string;
    tecnologia3?: string;
    link: string;
    github?: string;
  } | null;
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
      
      // Adicionar estilos customizados do scroll
      const styleElement = document.createElement('style');
      styleElement.textContent = scrollStyles;
      styleElement.id = 'modal-scroll-styles';
      document.head.appendChild(styleElement);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
      
      // Remover estilos customizados
      const styleElement = document.getElementById('modal-scroll-styles');
      if (styleElement) {
        document.head.removeChild(styleElement);
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeInUp">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="custom-scrollbar relative bg-dark-900 border border-white/10 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100 opacity-100 shadow-2xl shadow-primary/10">
        {/* Header */}
        <div className="sticky top-0 bg-dark-900/95 backdrop-blur-md border-b border-white/10 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">{project.nome}</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Project Image */}
          <div className="relative overflow-hidden rounded-xl">
            <img 
              src={project.foto} 
              alt={project.nome}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
          </div>

          {/* Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Sobre o Projeto</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              {project.descricao}
            </p>
          </div>

          {/* Technologies */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Tecnologias Utilizadas</h3>
            <div className="flex flex-wrap gap-3">
              {project.tecnologia1 === "Em Desenvolvimento" ? (
                <SkillsProject classname="green" skill={project.tecnologia1} />
              ) : (
                <SkillsProject classname="" skill={project.tecnologia1} />
              )}
              <SkillsProject classname="" skill={project.tecnologia2} />
              {project.tecnologia3 && (
                <SkillsProject classname="" skill={project.tecnologia3} />
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              <FaExternalLinkAlt size={16} />
              Ver Projeto
            </a>
            
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                <FaGithub size={16} />
                Ver Código
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}