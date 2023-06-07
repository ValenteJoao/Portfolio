import { Container } from "./style";

export function SkillsProject({ skill, classname }) {
  return (
    <Container>
      <div className={classname}>
        <h4 >{skill}</h4>
      </div>
    </Container>
  );
}