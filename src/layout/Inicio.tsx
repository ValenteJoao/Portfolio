import fotoPerfil2 from "../assets/fotoJoao.jpg";
import whatsappIcon from "../assets/zap-w.svg";

export function Home() {

  return (
    <main
      id="inicio"
      className="relative flex flex-col bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 items-center justify-center min-h-screen px-6 md:px-12 py-20 pt-28 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto animate-fadeInUp">
        {/* Profile Image */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-30 animate-glow"></div>
          <img
            src={fotoPerfil2}
            alt="João Valente"
            className="relative size-28 rounded-full object-cover border-4 border-white/10 shadow-2xl"
          />
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-primary font-medium text-sm md:text-base tracking-wider uppercase">
              Desenvolvedor Full Stack
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Olá, eu sou
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                João Valente
              </span>
            </h1>
          </div>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Transformo ideias em experiências digitais incríveis.
            Especializado em criar soluções web modernas e intuitivas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5516981652134"
              className="group relative px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25 flex items-center gap-3"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
              <span>Vamos conversar</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </a>

            <a
              href="#projetos"
              className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:scale-105"
            >
              Ver projetos
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
