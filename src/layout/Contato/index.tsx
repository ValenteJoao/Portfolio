import { FaWhatsapp, FaArrowUp } from "react-icons/fa"
import { FiSend, FiCopy } from "react-icons/fi"
import { Container, TitleContainer, MailContainer, ZapContainer } from "./style";

export function Contact() {
  return (
    <Container id="contato">
      <TitleContainer>
        <h3>CONTATO</h3>
      </TitleContainer>
      <div className="InfoContainer">
        <ZapContainer>
          <FaWhatsapp size={20} />
          <p>Vamos Conversar</p>
        </ZapContainer>

        <MailContainer>
          <FiSend />
          <h4>E-mail:</h4>
          <div>
            <h5>valentejoao.dev@gmail.com</h5>
            <FiCopy />
          </div>
        </MailContainer>

      </div>

      <a href="#inicio">Voltar ao topo <FaArrowUp size={14} style={{ fill: '#7F7F7F' }} /> </a>
    </Container >
  );
}