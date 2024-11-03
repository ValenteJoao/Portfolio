import { SkillsProject } from "./SkillsProjects";

type projectProps = {
  nome: string;
  descricao: string;
  foto: string;
  tecnologia1: string;
  tecnologia2: string;
};

export function ContentProject({
  nome,
  descricao,
  foto,
  tecnologia1,
  tecnologia2,
}: projectProps) {
  return (
    <div className="project flex flex-col items-center justify-between h-[350px] w-64 border-2 border-zinc-200 rounded-2xl cursor-pointer p-6 shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
      <div className="flex flex-col gap-2">
        <h2 className="font-black leading-5">{nome}</h2>
        <p className="text-sm">{descricao}</p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          {(tecnologia1 === "Em Desenvolvimento" && (
            <SkillsProject classname="green" skill={tecnologia1} />
          )) || <SkillsProject classname="" skill={tecnologia1} />}
          <SkillsProject classname="" skill={tecnologia2} />
        </div>

        <img src={foto} className="rounded-md max-h-40" />
      </div>
    </div>
  );
}
