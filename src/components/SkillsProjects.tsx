type skillsProjectProps = {
  skill: string;
  classname: string;
};

export function SkillsProject({ skill, classname }: skillsProjectProps) {
  const isInDevelopment = skill === "Em Desenvolvimento";
  
  return (
    <div className={`
      inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300
      ${isInDevelopment 
        ? "bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:bg-amber-500/30" 
        : "bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30 hover:scale-105"
      }
      ${classname === "green" ? "animate-pulse" : ""}
    `}>
      {isInDevelopment && (
        <div className="w-2 h-2 bg-amber-400 rounded-full mr-2 animate-pulse"></div>
      )}
      <span className="font-semibold">{skill}</span>
    </div>
  );
}
