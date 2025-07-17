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
    <section
      className="relative bg-dark-950 py-20 md:py-32 px-6 md:px-12 overflow-hidden"
      id="contato"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-dark-950/50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-16 animate-fadeInUp">
          <p className="text-primary font-medium text-sm md:text-base tracking-wider uppercase mb-4">
            Vamos trabalhar juntos
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Entre em <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">contato</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Gostou do meu trabalho? Tenho uma ideia incrível? Vamos conversar e transformar sua visão em realidade!
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-vitor-alexandre-valente-32b45b21b/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 bg-white/5 border border-white/10 rounded-xl hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110"
          >
            <FaLinkedin size={24} className="text-gray-400 group-hover:text-primary transition-colors duration-300" />
          </a>
          <a
            href="https://github.com/ValenteJoao"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 bg-white/5 border border-white/10 rounded-xl hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110"
          >
            <FaGithub size={24} className="text-gray-400 group-hover:text-primary transition-colors duration-300" />
          </a>
          <a
            href="https://vimeo.com/user172878477"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 bg-white/5 border border-white/10 rounded-xl hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110"
          >
            <FaVimeo size={24} className="text-gray-400 group-hover:text-primary transition-colors duration-300" />
          </a>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <a
            href="https://api.whatsapp.com/send?phone=5516981652134"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-r from-green-600 to-green-500 p-6 rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/25"
          >
            <div className="flex items-center justify-center gap-3 text-white">
              <FaWhatsapp size={24} />
              <span className="font-semibold text-lg">WhatsApp</span>
            </div>
            <p className="text-green-100 text-sm mt-2">Resposta rápida garantida</p>
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          </a>

          <div
            onClick={copiarEmail}
            className="group relative bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <div className="flex items-center justify-center gap-3 text-white">
              <FiSend size={24} className="group-hover:text-primary transition-colors duration-300" />
              <span className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">Email</span>
              <FiCopy size={20} className="text-gray-400 group-hover:text-primary transition-colors duration-300" />
            </div>
            <p className="text-gray-400 text-sm mt-2 group-hover:text-gray-300 transition-colors duration-300">
              {email}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {copiado ? "✓ Copiado!" : "Clique para copiar"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
