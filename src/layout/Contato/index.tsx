import { useState, useEffect } from 'react';
import { FaWhatsapp, FaArrowUp } from "react-icons/fa"
import { FiSend, FiCopy } from "react-icons/fi"

import { Container, TitleContainer, MailContainer, ZapContainer } from "./style";

export function Contact() {

  const email = 'valentejoao.dev@gmail.com';
  const [copiado, setCopiado] = useState(false);

  function scrollToPages(id: string) {
    const projectsSection: HTMLElement | null = document.getElementById(id);
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function copiarEmail() {
    navigator.clipboard.writeText(email);
    setCopiado(true);
  }

  useEffect(() => {
    if (copiado) {
      const timer = setTimeout(() => {
        setCopiado(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [copiado]);

  return (
    <Container id="contato">
      <TitleContainer>
        <h3>CONTATO</h3>
      </TitleContainer>
      <div className="InfoContainer">
        <a href="https://api.whatsapp.com/send?phone=5516997263468" target="_blank" rel="noopener noreferrer">
          <ZapContainer>
            <FaWhatsapp size={20} />
            <p>Vamos Conversar</p>
          </ZapContainer>
        </a>

        <MailContainer>
          <FiSend />
          <h4>E-mail:</h4>
          <div onClick={copiarEmail} style={{ cursor: 'pointer' }}>
            <h5>{email}</h5>
            <FiCopy />
            {copiado && <p className='copiado'>URL copiada para a área de transferência!</p>}
          </div>
        </MailContainer>

      </div>

      <a onClick={() => scrollToPages('inicio')} >Voltar ao topo <FaArrowUp size={14} style={{ fill: '#7F7F7F' }} /> </a>
    </Container >
  );
}