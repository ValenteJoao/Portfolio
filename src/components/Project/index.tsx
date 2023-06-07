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
          {tecnologia1 === 'Em Desenvolvimento' && <SkillsProject classname='grey' skill={tecnologia1} /> || <SkillsProject classname='' skill={tecnologia1} />}
          <SkillsProject classname='' skill={tecnologia2} />
        </div>
      </ContainerStyle>

      <img src={foto} />

    </Container>
  );
}