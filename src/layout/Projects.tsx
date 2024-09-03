import { useEffect, useState } from "react";
import { FaFigma, FaLaptopCode } from "react-icons/fa";
import { ButtonNav } from "../components/btnType";
import { ContentProject } from "../components/Projects";

import bahia from "../assets/bahia.png";
import redbull from "../assets/redbull.png";
import realrock from "../assets/realrock.png";
import mmg from "../assets/mmg.jpg";
import Loader from "../components/loader";

export function Projects() {
  const [projetos, setProjetos] = useState<Projeto[]>([]);
  const [buttonMenu, setButtonMenu] = useState(true);
  const [loading, setLoading] = useState(true);

  const projetosCode: Projeto[] = [
    {
      id: 1,
      nome: "Sócio Esquadrão - Bahia Esporte Clube",
      descricao:
        "Site de sócio torcedor do Bahia Esporte Clube criado com Asp.Net, JQuery",
      foto: bahia,
      tecnologia1: "Asp.Net",
      tecnologia2: "C#",
      link: "https://www.socioesquadrao.com.br",
    },
    {
      id: 2,
      nome: "Red Bull Experience",
      descricao: "Site de experiência da Red Bull criado asp.net, JQuery, CSS",
      foto: redbull,
      tecnologia1: "Jquery",
      tecnologia2: "Asp.Net",
      link: "https://www.redbullbragantinoexperience.com/",
    },
    {
      id: 3,
      nome: "Real Rock",
      descricao:
        "Site de estudo que lista as melhores bandas de rock usando NextJs e TailwindCss",
      foto: realrock,
      tecnologia1: "NextJs",
      tecnologia2: "TailwindCss",
      link: "https://real-rock.vercel.app",
    },
    {
      id: 4,
      nome: "Meme Memory Game",
      descricao: "Meu primeiro projeto front-end 100% Vanilla 😁",
      foto: mmg,
      tecnologia1: "HTML",
      tecnologia2: "Javascript",
      link: "https://valentejoao.github.io/jogommg/",
    },
  ];

  const projetosFigma: Projeto[] = [];

  function touchableMenu(type: string) {
    if (type === "code") {
      setProjetos(projetosCode);
      setButtonMenu(true);
    } else {
      setProjetos(projetosFigma);
      setButtonMenu(false);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setProjetos(projetosCode);
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div
      id="projetos"
      className="flex flex-col items-center bg-zinc-950 px-32 py-32 max-md:px-5 max-md:py-20"
    >
      <div className="flex flex-col gap-2 pb-20 w-full items-center max-md:pb-14">
        <h2 className="font-black text-4xl max-md:text-center max-md:text-2xl">
          {" "}
          <span className=" text-yellow-300 pr-3">{`{`}</span>TRABALHOS E
          PROJETOS <span className=" text-yellow-300">{`}`}</span>
        </h2>
      </div>

      <div className="flex flex-row w-full items-center justify-center gap-2">
        <ButtonNav
          status={false}
          click={() => touchableMenu("code")}
          activeButton={buttonMenu}
          name="Code"
          icon={<FaLaptopCode fill="white" size={15} />}
        />
        <ButtonNav
          status={true}
          click={() => touchableMenu("figma")}
          activeButton={!buttonMenu}
          name="Figma"
          icon={<FaFigma fill="white" size={15} />}
        />
      </div>

      <div className="flex justify-around items-center flex-row flex-wrap my-10 gap-4 max-md:gap-8">
        {loading ? (
          <Loader />
        ) : (
          projetos.map((projeto) => (
            <a
              href={projeto.link}
              target="_blank"
              rel="noopener noreferrer"
              key={projeto.id}
            >
              <ContentProject
                nome={projeto.nome}
                descricao={projeto.descricao}
                foto={projeto.foto}
                tecnologia1={projeto.tecnologia1}
                tecnologia2={projeto.tecnologia2}
              />
            </a>
          ))
        )}
      </div>
    </div>
  );
}
