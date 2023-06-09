import { useEffect, useState } from 'react'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { FaLaptopCode, FaVideo } from 'react-icons/fa'


import App from '../../services/firebase'
import { ButtonNav } from "../../components/ButtonTypeProjects";
import { ContentProject } from "../../components/Project";
import { Container, TitleContainer, NavContainer, ContainerProjects } from "./style";

interface Projetos {
  id: number;
  nome: string;
  descricao: string;
  foto: string;
  tecnologia1: string;
  tecnologia2: string;
}

export function Projects() {

  const [projetosCode, setProjetosCode] = useState<Projetos[]>([]);
  const [projetosVideos, setProjetosVideos] = useState<Projetos[]>([]);
  const [buttonMenu, setButtonMenu] = useState(true);

  const db = getFirestore(App);

  useEffect(() => {
    async function getProjects(db) {
      const collectionCode = collection(db, 'code');
      const collectionVideo = collection(db, 'Videos');
      const projectCode = await getDocs(collectionCode);
      const projectVideo = await getDocs(collectionVideo);

      const projectsCode = projectCode.docs.map(doc => doc.data());
      const projectsVideos = projectVideo.docs.map(doc => doc.data());

      setProjetosCode(projectsCode);
      setProjetosVideos(projectsVideos);
      return

    }
    getProjects(db)

  }, [])


  function touchableMenu() {
    if (buttonMenu) {
      setButtonMenu(false)
    }
    else {
      setButtonMenu(true)
    }

  }

  return (
    <Container id="projetos">
      <TitleContainer>
        <h2>TRABALHOS E PROJETOS</h2>
        <div></div>
      </TitleContainer>

      <NavContainer>

        {buttonMenu ? (
          <>
            <ButtonNav
              click={touchableMenu}
              activeButton={buttonMenu}
              name='Code'
              icon={<FaLaptopCode size={15} />}
            />
            <ButtonNav
              click={touchableMenu}
              activeButton={!buttonMenu}
              name='Video'
              icon={<FaVideo size={15} />}
            />
          </>
        ) : (
          <>
            <ButtonNav
              click={touchableMenu}
              activeButton={buttonMenu}
              name='Code'
              icon={<FaLaptopCode size={15} />}
            />
            <ButtonNav
              click={touchableMenu}
              activeButton={!buttonMenu}
              name='Video'
              icon={<FaVideo size={15} />}
            />
          </>
        )}

      </NavContainer>

      <ContainerProjects>
        {buttonMenu && Object.values(projetosCode).map((projeto) => (

          <ContentProject
            key={projeto.id}
            nome={projeto.nome}
            descricao={projeto.descricao}
            foto={projeto.foto}
            tecnologia1={projeto.tecnologia1}
            tecnologia2={projeto.tecnologia2} />

        )) || Object.values(projetosVideos).map((projeto) => (

          <ContentProject key={projeto.id}
            nome={projeto.nome}
            descricao={projeto.descricao}
            foto={projeto.foto}
            tecnologia1={projeto.tecnologia1}
            tecnologia2={projeto.tecnologia2} />

        ))}
      </ContainerProjects>

    </Container>
  );
}

