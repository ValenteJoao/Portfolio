export function Footer() {
  return (
    <footer className="relative bg-dark-950 border-t border-white/5 py-12 md:py-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-950 to-dark-900/50"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center space-y-6">
          {/* Logo/Name */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              <span className="text-primary font-mono">&lt;</span>
              <span className="mx-2">João Valente</span>
              <span className="text-primary font-mono">/&gt;</span>
            </h3>
            <p className="text-gray-400 text-sm mt-2 max-w-md mx-auto">
              Desenvolvedor Full Stack apaixonado por criar experiências digitais incríveis
            </p>
          </div>
          
          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto"></div>
          
          {/* Copyright */}
          <div className="pt-6">
            <p className="text-gray-500 text-sm">
              © 2025 João Valente. Todos os direitos reservados.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Desenvolvido com ❤️ usando React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
