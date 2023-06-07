import { Header } from './components/Header'
import './App.css'
import { Home } from './layout/Inicio'
import { About } from './layout/Sobre'
import { Projects } from './layout/Projects'
import { Contact } from './layout/Contato'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
