import { FaLinkedin, FaGithub, FaVimeo } from 'react-icons/fa'

import { Container, Content } from "./style";

export function Footer() {
  return (
    <Container>
      <Content>
        <h6>Copyright © João Valente · 2023</h6>
        <div className="icons">
          <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-alexandre-valente-32b45b21b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={25} style={{ fill: 'white', cursor: 'pointer' }} />
          </a>
          <a href="https://github.com/ValenteJoao" target="_blank" rel="noopener noreferrer">
            <FaGithub size={25} style={{ fill: 'white', cursor: 'pointer' }} />
          </a>
          <a href="https://vimeo.com/user172878477" target="_blank" rel="noopener noreferrer">
            <FaVimeo size={25} style={{ fill: 'white', cursor: 'pointer' }} />
          </a>
        </div>
      </Content>
    </Container>
  );
}

