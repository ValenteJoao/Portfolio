import { Container } from "./style";

type skillsProjectProps = {
  skill: string;
  classname: string;
};

export function SkillsProject({ skill, classname }: skillsProjectProps) {
  return (
    <Container>
      <div className={classname}>
        <h4 >{skill}</h4>
      </div>
    </Container>
  );
}