import Lottie from "lottie-react";

import { HomeContainer, TextContainer, styleScrollDown } from './style';
import scrollDown from '../../animations/scrollDown.json'

export function Home() {

  function scrollToProjects() {
    const projectsSection: HTMLElement | null = document.getElementById('projetos');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <HomeContainer id="inicio">
      <TextContainer>
        <h2>OLÁ, EU SOU O JOÃO VALENTE</h2>
        <p>Desenvolvedor Front-End criando interfaces digitais <br />
          incríveis, unindo tecnologia e design!</p>
      </TextContainer>

      <button onClick={scrollToProjects}>PROJETOS</button>
      <Lottie animationData={scrollDown} loop={true} style={styleScrollDown} />

    </HomeContainer>
  )
}