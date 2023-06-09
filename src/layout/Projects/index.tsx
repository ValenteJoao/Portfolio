import { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs, DocumentData, CollectionReference, QuerySnapshot } from 'firebase/firestore/lite';
import { FaLaptopCode, FaVideo } from 'react-icons/fa';
import { BiLoaderCircle } from 'react-icons/bi';

import App from '../../services/firebase';
import { ButtonNav } from '../../components/ButtonTypeProjects';
import { ContentProject } from '../../components/Project';
import { Container, TitleContainer, NavContainer, ContainerProjects } from './style';
import { Projeto } from '../../types/project';

export function Projects() {
  const [projetosCode, setProjetosCode] = useState<Projeto[]>([]);
  const [projetosVideos, setProjetosVideos] = useState<Projeto[]>([]);
  const [buttonMenu, setButtonMenu] = useState(true);
  const [loading, setLoading] = useState(true);

  const db = getFirestore(App);

  useEffect(() => {
    async function getProjects(db: any): Promise<void> {
      try {
        const collectionCode: CollectionReference<DocumentData> = collection(db, 'code');
        const collectionVideo: CollectionReference<DocumentData> = collection(db, 'Videos');
        const projectCode: QuerySnapshot<DocumentData> = await getDocs(collectionCode);
        const projectVideo: QuerySnapshot<DocumentData> = await getDocs(collectionVideo);

        const projectsCode: Projeto[] = projectCode.docs.map((doc) => doc.data() as Projeto);
        const projectsVideos: Projeto[] = projectVideo.docs.map((doc) => doc.data() as Projeto);

        setProjetosCode(projectsCode);
        setProjetosVideos(projectsVideos);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao carregar os projetos:', error);
      }
    }

    getProjects(db);
  }, []);

  function touchableMenu() {
    setButtonMenu(!buttonMenu);
  }

  let projetos: Projeto[];

  if (buttonMenu) {
    projetos = projetosCode;
  } else {
    projetos = projetosVideos;
  }

  return (
    <Container id="projetos">
      <TitleContainer>
        <h2>TRABALHOS E PROJETOS</h2>
        <div></div>
      </TitleContainer>

      <NavContainer>
        <ButtonNav
          click={touchableMenu}
          activeButton={buttonMenu}
          name="Code"
          icon={<FaLaptopCode size={15} />}
        />
        <ButtonNav
          click={touchableMenu}
          activeButton={!buttonMenu}
          name="Videos"
          icon={<FaVideo size={15} />}
        />
      </NavContainer>

      <ContainerProjects>
        {loading ? (
          <div>
            <BiLoaderCircle />
          </div>
        ) : (
          projetos.map((projeto) => (
            <a href={projeto.link} target="_blank" rel="noopener noreferrer" key={projeto.id}>
              <ContentProject
                nome={projeto.nome}
                descricao={projeto.descricao}
                foto={projeto.foto}
                tecnologia1={projeto.tecnologia1}
                tecnologia2={projeto.tecnologia2}
              />
            </a>
          ))
        )}
      </ContainerProjects>
    </Container>
  );
}