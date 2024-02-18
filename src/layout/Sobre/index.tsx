import { FaLinkedin, FaGithub, FaVimeo } from 'react-icons/fa'

import { PageAbout, AboutContent, ContainerAboutSkills, LineAbout, SectionAbout, SkillsContainer, SocialmediaContainer, Skills } from './style';
import { SkillsContainers } from '../../components/SkillsContainers';


export function About() {

  return (
    <PageAbout id="QuemSouEu">

      <AboutContent>
        <h2>QUEM SOU EU ?</h2>
        <div></div>
        <p>Neste espaço, você encontrará informações sobre a minha área de atuação e minhas
          habilidades atuais, com foco principalmente em programação e tecnologia.</p>
      </AboutContent>

      <ContainerAboutSkills>

        <SectionAbout>
          <LineAbout></LineAbout>
          <p>
            Como desenvolvedor Front-End e apaixonado por tecnologia, ofereço um conjunto abrangente de habilidades para criar experiências digitais excepcionais. Com minha expertise em design e desenvolvimento Front-End, garanto interfaces atraentes, intuitivas e funcionais.
            Convido você a explorar meus códigos e projetos no GitHub, onde compartilho meu trabalho e soluções inovadoras. Acesse meu perfil no GitHub para conhecer mais sobre meu estilo de codificação e abordagem técnica.
            Estou disponível para colaborar em projetos desafiadores, trazendo minha paixão pelo design e desenvolvimento para criar soluções digitais de alto impacto. Entre em contato comigo e vamos transformar suas ideias em realidade!
          </p>
        </SectionAbout>

        <SkillsContainer>
          <h3>Skills</h3>

          <Skills>
            <SkillsContainers skill='HTML' />
            <SkillsContainers skill='CSS' />
            <SkillsContainers skill='JAVASCRIPT' />
            <SkillsContainers skill='TYPESCRIPT' />
            <SkillsContainers skill='NEXTJS' />
            <SkillsContainers skill='REACT' />
            <SkillsContainers skill='REACT NATIVE' />
            <SkillsContainers skill='NODE JS' />
            <SkillsContainers skill='GIT' />
            <SkillsContainers skill='GITHUB' />
            <SkillsContainers skill='FIREBASE' />
          </Skills>

          <SocialmediaContainer>
            <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-valente/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={22} style={{ fill: 'white', cursor: 'pointer' }} />
            </a>
            <a href="https://github.com/ValenteJoao" target="_blank" rel="noopener noreferrer">
              <FaGithub size={22} style={{ fill: 'white', cursor: 'pointer' }} />
            </a>
            <a href="https://vimeo.com/user172878477" target="_blank" rel="noopener noreferrer">
              <FaVimeo size={22} style={{ fill: 'white', cursor: 'pointer' }} />
            </a>
          </SocialmediaContainer>

        </SkillsContainer>

      </ContainerAboutSkills>

    </PageAbout >
  )


}