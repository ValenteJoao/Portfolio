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
    <div className="project flex flex-col items-center justify-between h-[450px]  border-2 border-gray-200 rounded-2xl cursor-pointer p-8 shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
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
          {tecnologia3 && <SkillsProject classname="" skill={tecnologia3} />}
        </div>

        <img src={foto} className="rounded-md max-h-40" />
      </div>
    </div>
  );
}
