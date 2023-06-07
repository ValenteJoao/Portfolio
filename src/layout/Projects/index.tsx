import { ButtonNav } from "../../components/ButtonNav";
import { ContentProject } from "../../components/ContentProject";
import { Container, TitleContainer, NavContainer, ContainerProjects } from "./style";

import { FaLaptopCode, FaVideo } from 'react-icons/fa'

export function Projects() {
  return (
    <Container id="projetos">
      <TitleContainer>
        <h2>TRABALHOS E PROJETOS</h2>
        <div></div>
      </TitleContainer>

      <NavContainer>
        <ButtonNav name='Code' icon={<FaLaptopCode size={15} />} />
        <ButtonNav name='Video' icon={<FaVideo size={15} />} />
      </NavContainer>

      <ContainerProjects>
        <ContentProject />
        <ContentProject />
        <ContentProject />
        <ContentProject />
      </ContainerProjects>

    </Container>
  );
}

