import { useState, useEffect } from "react";
import { FaWhatsapp, FaLinkedin, FaGithub, FaVimeo } from "react-icons/fa";
import { FiSend, FiCopy } from "react-icons/fi";
import { toast } from "react-toastify";

export function Contact() {
  const email = "valentejoao.dev@gmail.com";
  const [copiado, setCopiado] = useState(false);

  function copiarEmail() {
    navigator.clipboard.writeText(email);
    toast.success("Email copiado com sucesso", {
      position: "bottom-right",
      autoClose: 2000,
    });
    setCopiado(true);
  }

  useEffect(() => {
    if (copiado) {
      const timer = setTimeout(() => {
        setCopiado(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [copiado]);

  return (
    <div
      className="flex flex-col items-center bg-zinc-900 justify-around px-24 py-32 max-md:px-5 max-md:py-20"
      id="contato"
    >
      <div className="flex flex-col gap-5 pb-10 w-full items-center">
        <h2 className="font-black text-4xl max-md:text-center max-md:text-2xl">
          {" "}
          <span className=" text-yellow-300 pr-3">{`{`}</span>CONTATO{" "}
          <span className=" text-yellow-300">{`}`}</span>
        </h2>
        <p className="max-md:text-center">
          Gostou do meu trabalho? Vamos conversar!
        </p>
        <div className="flex gap-2">
          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-vitor-alexandre-valente-32b45b21b/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:scale-110 transform transition duration-300 ease-in-out"
          >
            <FaLinkedin size={25} style={{ fill: "#fff", cursor: "pointer" }} />
          </a>
          <a
            href="https://github.com/ValenteJoao"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:scale-110 transform transition duration-300 ease-in-out"
          >
            <FaGithub size={25} style={{ fill: "#fff", cursor: "pointer" }} />
          </a>
          <a
            href="https://vimeo.com/user172878477"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:scale-110 transform transition duration-300 ease-in-out"
          >
            <FaVimeo size={25} style={{ fill: "#fff", cursor: "pointer" }} />
          </a>
        </div>
      </div>
      <div className="max-md:flex-col flex gap-4">
        <a
          href="https://api.whatsapp.com/send?phone=5516981652134"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer hover:scale-105 transform transition duration-300 ease-in-out"
        >
          <div className="project flex items-center justify-center gap-2 border-2 border-zinc-200 cursor-pointer p-4 rounded-2xl">
            <FaWhatsapp size={20} />
            <p>WhatsApp</p>
          </div>
        </a>

        <div className="flex flex-col items-center">
          <div
            onClick={copiarEmail}
            style={{ cursor: "pointer" }}
            className="project flex items-center justify-center gap-2 border-2 border-zinc-200 cursor-pointer p-4 rounded-2xl hover:scale-105 transform transition duration-300 ease-in-out"
          >
            <FiSend />
            <h5>{email}</h5>
            <FiCopy />
          </div>
        </div>
      </div>
    </div>
  );
}
