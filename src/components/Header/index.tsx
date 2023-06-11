import { useState, useEffect } from 'react';
import { Container, Perfil, Menu } from './style';
import fotoPerfil from '../../assets/fotoPerfil.png';

export function Header(): JSX.Element {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition < 500) {
        setActiveSection('inicio');
      } else if (scrollPosition >= 500 && scrollPosition < 1000) {
        setActiveSection('QuemSouEu');
      } else if (scrollPosition >= 1000 && scrollPosition < 1500) {
        setActiveSection('projetos');
      } else if (scrollPosition >= 1500) {
        setActiveSection('contato');
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function scrollToPages(id: string) {
    const projectsSection = document.getElementById(id);
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <Container>
      <Perfil>
        <img src={fotoPerfil} alt='Foto de Perfil' />
        <h1>JOÃO VALENTE</h1>
      </Perfil>
      <Menu>
        <a
          onClick={() => scrollToPages('inicio')}
          className={activeSection === 'inicio' ? 'active' : ''}
        >
          Inicio
        </a>
        <a
          onClick={() => scrollToPages('QuemSouEu')}
          className={activeSection === 'QuemSouEu' ? 'active' : ''}
        >
          Quem sou eu
        </a>
        <a
          onClick={() => scrollToPages('projetos')}
          className={activeSection === 'projetos' ? 'active' : ''}
        >
          Projetos
        </a>
        <a
          onClick={() => scrollToPages('contato')}
          className={activeSection === 'contato' ? 'active' : ''}
        >
          Contato
        </a>
      </Menu>
    </Container>
  );
}
