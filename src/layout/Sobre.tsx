import { FaLinkedin, FaGithub, FaVimeo } from "react-icons/fa";
import { SkillsContainers } from "../components/SkillsContainer";

export function About() {
  return (
    <section
      id="QuemSouEu"
      className="flex flex-col bg-gray-950 items-center justify-center h-full max-md:px-5 px-32 max-md:py-20 py-32"
    >
      <div className="flex flex-col items-center gap-2 max-md:pb-14 pb-20">
        <h2 className="font-black max-md:text-2xl text-4xl max-md:text-center">
          {" "}
          <span className=" text-primary pr-3">{`{`}</span>QUEM SOU EU ?{" "}
          <span className=" text-primary pr-3">{`}`}</span>
        </h2>
      </div>

      <div className="max-md:flex-col flex justify-between gap-40 max-md:gap-14">
        <div className="flex justify-around text-sm gap-5 max-md:w-full w-1/2">
          <div className="LineAbout w-10"></div>
          <div className="flex flex-col gap-8">
            <p className="text-sm">
              Sou um desenvolvedor <strong>Front-End</strong> apaixonado por
              tecnologia e design, sempre buscando criar{" "}
              <strong>experiências</strong> digitais que realmente façam a
              diferença. Adoro transformar ideias em interfaces bonitas,
              intuitivas e cheias de funcionalidade. Se você curte ver códigos,
              dê uma passada no meu <strong>GitHub</strong>. Lá,
              compartilho o que ando criando e resolvendo no dia a dia.
              Dá uma olhada para conhecer meu estilo e como gosto de trabalhar.
              Estou sempre disponível para novos{" "}
              <strong>desafios</strong>, então se tiver algum projeto bacana em
              mente, bora conversar!
            </p>
            <p className="text-sm">
              Atualmente atuo como desenvolvedor front end pela a empresa{" "}
              <strong>2Morrow Sports</strong> realizando a manutenção e
              desenvolvimento de novas features para o sistema de gestão de
              socios torcedores dos clubes de futebol.
            </p>
          </div>
        </div>

        <div className="max-md:w-full max-md:items-center max-md:px-5 w-1/2 flex flex-col gap-6">
          <h3 className="text-lg font-black max-md:w-full">Skills</h3>

          <div className="flex flex-wrap gap-1">
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

          <div className="flex items-center justify-evenly mt-8 w-36 h-14 bg-gray-700 rounded-3xl filterYellow">
            <a
              href="https://www.linkedin.com/in/jo%C3%A3o-vitor-valente/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:scale-105 transform transition duration-300 ease-in-out"
            >
              <FaLinkedin
                size={22}
                style={{ fill: "white", cursor: "pointer" }}
              />
            </a>
            <a
              href="https://github.com/ValenteJoao"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:scale-105 transform transition duration-300 ease-in-out"
            >
              <FaGithub
                size={22}
                style={{ fill: "white", cursor: "pointer" }}
              />
            </a>
            <a
              href="https://vimeo.com/user172878477"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:scale-105 transform transition duration-300 ease-in-out"
            >
              <FaVimeo size={22} style={{ fill: "white", cursor: "pointer" }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
