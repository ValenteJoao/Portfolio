import { useEffect, useState } from 'react'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { FaLaptopCode, FaVideo } from 'react-icons/fa'


import App from '../../services/firebase'
import { ButtonNav } from "../../components/ButtonTypeProjects";
import { ContentProject } from "../../components/Project";
import { Container, TitleContainer, NavContainer, ContainerProjects } from "./style";


export function Projects() {

  const [projetos, setProjetos] = useState<Projetos[]>([]);

  const db = getFirestore(App);

  useEffect(() => {
    async function getProjects(db) {
      const projectCol = collection(db, 'code');
      const project = await getDocs(projectCol);
      const projects = project.docs.map(doc => doc.data());

      return setProjetos(projects);
    }
    getProjects(db)

  }, [])

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
        {Object.values(projetos).map((projeto) => (
          <ContentProject key={projeto.id} nome={projeto.nome} descricao={projeto.descricao} foto={projeto.foto} tecnologia1={projeto.tecnologia1} tecnologia2={projeto.tecnologia2} />
        ))}
      </ContainerProjects>

    </Container>
  );
}

