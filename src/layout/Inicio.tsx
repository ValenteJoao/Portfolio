import Lottie from "lottie-react";

import scrollDown from "../animations/scrollDown.json";
import fotoPerfil2 from "../assets/fotoJoao.jpg";
import whatsappIcon from "../assets/zap-w.svg";

export function Home() {

  return (
    <main
      id="inicio"
      className="flex flex-col bg-gradient-to-b from-gray-950 to-[#12061e] items-center justify-center h-screen max-md:px-5 px-24 max-md:py-20 py-24 gap-10 bg-cover shadow-lg"
    >
      <div className="flex-col text-center flex gap-0 items-center justify-center w-full mt-20">
        <img src={fotoPerfil2} alt="Foto de Perfil" className="max-w-32" />
        <div
          className="max-md:items-center flex flex-col max-md:gap-10 gap-4 mt-5
        "
        >
          <h2 className="font-black max-md:text-3xl text-4xl text-white">
            OLÁ SEJA BEM VINDO, <br className="hidden md:block" /> EU SOU O JOÃO
            VALENTE
          </h2>
          <div className="flex gap-4 flex-col mx-auto">
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5516981652134"
              className="px-6 py-2 max-md:py-4 text-white bg-primary rounded-3xl flex items-center gap-2 transition-all max-md:w-full justify-center hover:bg-opacity-80 hover:scale-105 transform duration-300 ease-in-out"
            >
              <img src={whatsappIcon} alt="" />
              Converse comigo
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
