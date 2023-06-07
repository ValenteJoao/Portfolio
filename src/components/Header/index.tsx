import { Container, Perfil, Menu } from './style'
import fotoPerfil from '../../assets/fotoPerfil.png'


export function Header() {
  return (
    <Container>
      <Perfil>
        <img src={fotoPerfil} />
        <h1>JOÃO VALENTE</h1>
      </Perfil>
      <Menu>
        <a href='#inicio'>Inicio</a>
        <a href='#QuemSouEu'>Quem sou eu</a>
        <a href='#projetos'>Projetos</a>
        <a href='#contato'>Contato</a>
      </Menu>
    </Container>
  )
}