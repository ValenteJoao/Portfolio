type skillsProjectProps = {
  skill: string;
  classname: string;
};

export function SkillsProject({ skill, classname }: skillsProjectProps) {
  return (
    <div className={`bg-primary p-2 text-[0.6rem] rounded-lg ${skill == "Em Desenvolvimento" ? "bg-gray-700" : "bg-primary"}`}>
      <div className={classname}>
        <h4 className="font-bold text-white">{skill}</h4>
      </div>
    </div>
  );
}
