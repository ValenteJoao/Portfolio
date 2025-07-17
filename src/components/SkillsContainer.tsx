interface SkillsContainerProps {
  skill: string;
}

export function SkillsContainers({ skill }: SkillsContainerProps) {
  return (
    <div className="group relative bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-105">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <h4 className="relative text-gray-300 group-hover:text-white font-medium text-sm text-center transition-colors duration-300">
        {skill}
      </h4>
    </div>
  );
}
