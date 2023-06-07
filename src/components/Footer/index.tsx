import { Container, Content } from "./style";
import { FaLinkedin, FaGithub, FaBehance } from 'react-icons/fa'

export function Footer() {
  return (
    <Container>
      <Content>
        <h6>Copyright © João Valente · 2023</h6>
        <div className="icons">
          <FaLinkedin size={25} style={{ fill: 'white', cursor: 'pointer' }} />
          <FaGithub size={25} style={{ fill: 'white', cursor: 'pointer' }} />
          <FaBehance size={25} style={{ fill: 'white', cursor: 'pointer' }} />
        </div>
      </Content>
    </Container>
  );
}

