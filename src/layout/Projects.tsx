import { useEffect, useState } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { ButtonNav } from "../components/btnType";
import { ContentProject } from "../components/Projects";

import bahia from "../assets/bahia.png";
import redbull from "../assets/redbull.png";
import realrock from "../assets/realrock.png";
import mmg from "../assets/mmg.jpg";
import achabitos from "../assets/ac-habitos.png";
import empresa2ms from "../assets/2ms.png";
import vagas from "../assets/vagas-2ms.png";
import churchsync from "../assets/churchsync.jpeg";
import Loader from "../components/loader";

export function Projects() {
  const [projetos, setProjetos] = useState<Projeto[]>([]);
  const [buttonMenu, setButtonMenu] = useState(true);
  const [loading, setLoading] = useState(true);

  const projetosCode: Projeto[] = [
    {
      id: 8,
      nome: "ChurchSync",
      descricao:
        "Sistema de gerenciamento de igrejas. Desenvolvido com React e Fastify, proporcionando uma interface intuitiva e eficiente para administradores de igrejas.",
      foto: churchsync,
      tecnologia1: "Full Stack",
      tecnologia2: "Em Desenvolvimento",
      link: "",
    },
    {
      id: 2,
      nome: "Massa Bruta - Red Bull",
      descricao:
        "Portal oficial de sócio torcedor do Red Bull Bragantino. Fui responsável por toda a concepção UX/UI e desenvolvimento completo da plataforma utilizando .NET, JQuery e Tailwind. Experiência moderna e otimizada para alto tráfego.",
      foto: redbull,
      tecnologia1: "Tailwind",
      tecnologia2: "UI/UX",
      tecnologia3: ".Net",
      link: "https://www.massabruta.com.br/",
    },
    {
      id: 1,
      nome: "Sócio Esquadrão - Bahia Esporte Clube",
      descricao:
        "Sistema robusto de adesão e gestão de sócios para o Bahia. Desenvolvido com Asp.Net e JQuery, proporcionando navegação eficiente e integração com sistemas de pagamento e gestão de torcedores.",
      foto: bahia,
      tecnologia1: "Asp.Net",
      tecnologia2: "C#",
      tecnologia3: "JQuery",
      link: "https://www.socioesquadrao.com.br",
    },
    {
      id: 7,
      nome: "Site 2Morrow Sports",
      descricao:
        "Site institucional da 2Morrow Sports, com visual moderno e responsivo. Desenvolvido com foco em performance, usando React, TypeScript e Tailwind.",
      foto: empresa2ms,
      tecnologia1: "React",
      tecnologia2: "Tailwind",
      tecnologia3: "Typescript",
      link: "https://www.2morrowsports.com.br",
    },
    {
      id: 6,
      nome: "Sistema de Gerenciamento de Vagas - 2MS",
      descricao:
        "Sistema completo de recrutamento com análise via IA. Criei a interface e estrutura backend com Fastify, React, Tailwind e SQL Server. Automatiza cadastros, entrevistas e avaliações de candidatos.",
      foto: vagas,
      tecnologia1: "Fastify",
      tecnologia2: "IA",
      tecnologia3: "SQLServer",
      link: "https://corp.2morrowsports.com.br/login",
    },
    {
      id: 3,
      nome: "AC Hábitos de Sucesso",
      descricao:
        "Landing page profissional para cursos e treinamentos de desenvolvimento pessoal. Visual atrativo e fluidez garantida com React, TypeScript e Tailwind.",
      foto: achabitos,
      tecnologia1: "React",
      tecnologia2: "Tailwind",
      tecnologia3: "Typescript",
      link: "https://www.habitosdesucesso.com/",
    },
    {
      id: 4,
      nome: "Real Rock",
      descricao:
        "Projeto pessoal que reúne as melhores bandas de rock com foco em performance e usabilidade. Desenvolvido com Next.js, Tailwind e TypeScript.",
      foto: realrock,
      tecnologia1: "NextJs",
      tecnologia2: "Tailwind",
      tecnologia3: "Typescript",
      link: "https://real-rock.vercel.app",
    },
    {
      id: 5,
      nome: "Meme Memory Game",
      descricao:
        "Meu primeiro projeto 100% Vanilla! Um jogo da memória divertido e responsivo criado com HTML, CSS e JavaScript puro. Ideal para praticar lógica e DOM.",
      foto: mmg,
      tecnologia1: "HTML",
      tecnologia2: "Javascript",
      tecnologia3: "CSS",
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
      className="flex flex-col items-center bg-[#090e18] px-32 py-32 max-md:px-5 max-md:py-20"
    >
      <div className="flex flex-col gap-2 pb-20 w-full items-center max-md:pb-14">
        <h2 className="font-black text-4xl max-md:text-center max-md:text-xl">
          {" "}
          <span className=" text-primary pr-3">{`{`}</span>TRABALHOS E
          PROJETOS <span className=" text-primary">{`}`}</span>
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

      </div>

      {loading ? (
        <div className="flex item-center my-10">
          <Loader />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 my-10 justify-center items-center">

          {projetos.map((projeto) => (
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
                tecnologia3={projeto.tecnologia3}
              />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
