import { Container } from "./style";

type skillProps = {
  skill: string;
};

export function SkillsContainers({ skill }: skillProps) {
  return (
    <Container>
      <h4>{skill}</h4>
    </Container>
  );
}