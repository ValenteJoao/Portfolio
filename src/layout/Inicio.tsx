import Lottie from "lottie-react";

import scrollDown from "../animations/scrollDown.json";
import fotoPerfil from "../assets/fotoPerfil.png";
import { FaFileDownload } from "react-icons/fa";
import whatsappIcon from "../assets/zap.svg";

export function Home() {
  return (
    <main
      id="inicio"
      className="flex flex-col items-center justify-center max-md:h-full h-screen max-md:px-5 px-24 max-md:py-20 py-24 gap-10 bg-cover shadow-lg bg-bg-video-bk"
    >
      <div className="max-md:flex-col max-md:text-center flex max-md:gap-0 gap-7 items-center justify-center w-full mt-20">
        <img src={fotoPerfil} alt="Foto de Perfil" className="max-w-40" />
        <div
          className="max-md:items-center flex flex-col max-md:gap-10 gap-4 mt-10
        "
        >
          <h2 className="font-black max-md:text-3xl text-4xl text-white">
            OLÁ SEJA BEM VINDO, <br className="hidden md:block" /> EU SOU O JOÃO
            VALENTE
          </h2>
          <div className="flex gap-4 max-md:flex-col max-md:w-full">
            <button className="group text-white px-5 max-md:py-4 py-2 border border-yellow-300 rounded-3xl flex items-center gap-2 transition-all max-md:w-full w-48 justify-center hover:text-black hover:bg-yellow-300 hover:scale-105 transform duration-300 ease-in-out">
              <FaFileDownload className="fill-white group-hover:fill-black transition-colors duration-300 ease-in-out" />
              Currículo
            </button>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5516981652134"
              className="px-5 py-2 max-md:py-4 text-black bg-yellow-300 rounded-3xl flex items-center gap-2 transition-all max-md:w-full w-48 justify-center hover:bg-yellow-200 hover:scale-105 transform duration-300 ease-in-out"
            >
              <img src={whatsappIcon} alt="" />
              Whatsapp
            </a>
          </div>
        </div>
      </div>

      <div className="ContainerScroll pt-10">
        <Lottie
          animationData={scrollDown}
          loop={true}
          className="h-14 invert brightness-150"
        />
      </div>
    </main>
  );
}
