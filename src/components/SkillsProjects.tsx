type skillsProjectProps = {
  skill: string;
  classname: string;
};

export function SkillsProject({ skill, classname }: skillsProjectProps) {
  return (
    <div className="bg-yellow-300 p-2 text-xs rounded-lg ">
      <div className={classname}>
        <h4 className="font-bold text-black">{skill}</h4>
      </div>
    </div>
  );
}
