import { Container, DetailsProject, ContainerStyle } from "./style";
import { SkillsProject } from "../SkillsProject";


export function ContentProject({ nome, descricao, foto, tecnologia1, tecnologia2 }) {
  return (
    <Container>

      <DetailsProject>
        <h2>{nome}</h2>
        <p>{descricao}</p>
      </DetailsProject>

      <ContainerStyle>
        <div className="skill">
          <SkillsProject skill={tecnologia1} />
          <SkillsProject skill={tecnologia2} />
        </div>
      </ContainerStyle>

      <img src={'https://drive.google.com/file/d/1NBbPzj9WlN7xUWeoxlruhRo7k9AS0km9/preview'} />

    </Container>
  );
}