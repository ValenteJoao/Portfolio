import { useEffect, useState } from "react";
import { ContentProject } from "../components/Projects";
import { ProjectModal } from "../components/ProjectModal";

import bahia from "../assets/bahia.png";
import redbull from "../assets/redbull.png";
import realrock from "../assets/realrock.png";
import mmg from "../assets/mmg.jpg";
import achabitos from "../assets/ac-habitos.png";
import empresa2ms from "../assets/2ms.png";
import vagas from "../assets/vagas-2ms.png";
import churchsync from "../assets/churchsync.jpeg";
import Loader from "../components/loader";
import todo from "../assets/todo-list.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function Projects() {
  const [projetos, setProjetos] = useState<Projeto[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Projeto | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const projetosCode: Projeto[] = [
    {
      id: 8,
      nome: "ChurchSync",
      descricao:
        "Sistema de gerenciamento de igrejas. Desenvolvido com React e Fastify, proporcionando uma interface intuitiva e eficiente para administradores de igrejas.",
      foto: churchsync,
      tecnologia1: "Full Stack",
      tecnologia2: "Em Desenvolvimento",
      link: "https://www.churchsync.com.br",
    },
    {
      id: 9,
      nome: "Todo List",
      descricao:
        "Todo List com React, TypeScript, Tailwind, Fastify. Desenvolvido com foco em performance e usabilidade.",
      foto: todo,
      tecnologia1: "Full Stack",
      tecnologia2: "NodeJs",
      tecnologia3: "API",
      link: "https://todo.valenteprojetos.com.br/",
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

  const handleProjectClick = (projeto: Projeto) => {
    setSelectedProject(projeto);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    setTimeout(() => {
      setProjetos(projetosCode);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div
      id="projetos"
      className="flex flex-col items-center bg-[#090e18] px-32 py-32 max-md:px-5 max-md:py-20"
    >
      <div className="text-center mb-16 md:mb-20 animate-fadeInUp">
        <p className="text-primary font-medium text-sm md:text-base tracking-wider uppercase mb-4">
          Meu portfólio
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Projetos & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Trabalhos</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Uma seleção dos meus melhores projetos, desde aplicações web modernas até sistemas complexos.
        </p>
      </div>

      {loading ? (
        <div className="flex item-center my-10">
          <Loader />
        </div>
      ) : (
        <div className="w-full flex justify-center items-center my-10">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={15}
            slidesPerView={1}
            navigation={false}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000, disableOnInteraction: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 4 },
            }}
            className="w-full max-w-7xl"
          >
            {projetos.map((projeto) => (
              <SwiperSlide key={projeto.id}>
                <div
                  onClick={() => handleProjectClick(projeto)}
                  className="cursor-pointer"
                >
                  <ContentProject
                    nome={projeto.nome}
                    descricao={projeto.descricao}
                    foto={projeto.foto}
                    tecnologia1={projeto.tecnologia1}
                    tecnologia2={projeto.tecnologia2}
                    tecnologia3={projeto.tecnologia3}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </div>
  );
}
