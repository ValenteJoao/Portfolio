interface SkillsContainerProps {
  skill: string;
}
export function SkillsContainers({ skill }: SkillsContainerProps) {
  return (
    <div className="bg-gray-700 rounded-2xl p-3">
      <h4 className="text-white font-black text-xs">{skill}</h4>
    </div>
  );
}
