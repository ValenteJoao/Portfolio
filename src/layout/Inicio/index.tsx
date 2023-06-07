import Lottie from "lottie-react";
import { ContainerHome, ContainerText, styleScrollDown } from './style';
import scrollDown from '../../animations/scrollDown.json'

export function Home() {

  function NavPageProjects() {
    location.href = '#projetos'
  }


  return (
    <ContainerHome id="inicio">
      <ContainerText>
        <h2>OLÁ, EU SOU O JOÃO VALENTE</h2>
        <p>Desenvolvedor Front-End criando interfaces digitais <br />
          incríveis, unindo tecnologia e design!</p>
      </ContainerText>

      <button onClick={NavPageProjects} >PROJETOS</button>
      <Lottie animationData={scrollDown} loop={true} style={styleScrollDown} />

    </ContainerHome>
  )


}