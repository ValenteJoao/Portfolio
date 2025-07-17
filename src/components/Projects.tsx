import { SkillsProject } from "./SkillsProjects";

type projectProps = {
  nome: string;
  descricao: string;
  foto: string;
  tecnologia1: string;
  tecnologia2: string;
  tecnologia3?: string | undefined;
};

export function ContentProject({
  nome,
  descricao,
  foto,
  tecnologia1,
  tecnologia2,
  tecnologia3,
}: projectProps) {
  return (
    <div className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10">
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img 
          src={foto} 
          alt={nome}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {nome}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
            {descricao}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tecnologia1 === "Em Desenvolvimento" ? (
            <SkillsProject classname="green" skill={tecnologia1} />
          ) : (
            <SkillsProject classname="" skill={tecnologia1} />
          )}
          <SkillsProject classname="" skill={tecnologia2} />
          {tecnologia3 && <SkillsProject classname="" skill={tecnologia3} />}
        </div>
        
        {/* Hover Effect Indicator */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
