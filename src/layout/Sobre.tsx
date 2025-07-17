import { FaLinkedin, FaGithub, FaVimeo } from "react-icons/fa";
import { SkillsContainers } from "../components/SkillsContainer";

export function About() {
  return (
    <section
      id="QuemSouEu"
      className="relative bg-dark-900 py-20 md:py-32 px-6 md:px-12 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950/50 to-dark-800/50"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 animate-fadeInUp">
          <p className="text-primary font-medium text-sm md:text-base tracking-wider uppercase mb-4">
            Conheça mais
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Sobre <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">mim</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* About Text */}
          <div className="space-y-8 animate-slideInLeft">
            <div className="relative">
              <div className="LineAbout w-16 mb-8"></div>
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Sou um desenvolvedor <span className="text-primary font-semibold">Full Stack</span> apaixonado por
                  tecnologia e design, sempre buscando criar{" "}
                  <span className="text-primary font-semibold">experiências</span> digitais que realmente façam a
                  diferença. Adoro transformar ideias em interfaces bonitas,
                  intuitivas e cheias de funcionalidade.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Se você curte ver códigos, dê uma passada no meu{" "}
                  <span className="text-primary font-semibold">GitHub</span>. Lá,
                  compartilho o que ando criando e resolvendo no dia a dia.
                  Estou sempre disponível para novos{" "}
                  <span className="text-primary font-semibold">desafios</span>, então se tiver algum projeto bacana em
                  mente, bora conversar!
                </p>
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-6">
                  <p className="text-gray-300 text-base leading-relaxed">
                    Atualmente atuo como desenvolvedor front end na{" "}
                    <span className="text-primary font-semibold">2Morrow Sports</span>, realizando a manutenção e
                    desenvolvimento de novas features para o sistema de gestão de
                    sócios torcedores dos clubes de futebol.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills & Social */}
          <div className="space-y-8 animate-fadeInUp">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Tecnologias & <span className="text-primary">Skills</span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <SkillsContainers skill="HTML" />
                <SkillsContainers skill="CSS" />
                <SkillsContainers skill="JAVASCRIPT" />
                <SkillsContainers skill="TYPESCRIPT" />
                <SkillsContainers skill="REACT" />
                <SkillsContainers skill="REACT NATIVE" />
                <SkillsContainers skill="NEXT.JS" />
                <SkillsContainers skill="NODE JS" />
                <SkillsContainers skill="C#" />
                <SkillsContainers skill=".NET" />
                <SkillsContainers skill="ASP.NET" />
                <SkillsContainers skill="GIT" />
                <SkillsContainers skill="GITHUB" />
                <SkillsContainers skill="FIGMA" />
                <SkillsContainers skill="FIREBASE" />
                <SkillsContainers skill="SUPABASE" />
                <SkillsContainers skill="POSTGRESQL" />
                <SkillsContainers skill="SQL SERVER" />
                <SkillsContainers skill="DOCKER" />
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 max-lg:text-center flex flex-col w-full max-lg:items-center">
              <h4 className="text-lg font-semibold text-white mb-4">Conecte-se comigo</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/jo%C3%A3o-vitor-valente/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-white/5 border border-white/10 rounded-xl hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                >
                  <FaLinkedin
                    size={24}
                    className="text-gray-400 group-hover:text-primary transition-colors duration-300"
                  />
                </a>
                <a
                  href="https://github.com/ValenteJoao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-white/5 border border-white/10 rounded-xl hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                >
                  <FaGithub
                    size={24}
                    className="text-gray-400 group-hover:text-primary transition-colors duration-300"
                  />
                </a>
                <a
                  href="https://vimeo.com/user172878477"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-white/5 border border-white/10 rounded-xl hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                >
                  <FaVimeo
                    size={24}
                    className="text-gray-400 group-hover:text-primary transition-colors duration-300"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
