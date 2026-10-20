import Hero from './components/Hero'
import Atracoes from './components/Atracoes'
import Cabecalho from './components/Cabecalho'
import Inscricao from './components/Inscricao'
import Programacao from './components/Programacao'
import Rodape from './components/Rodape'
import Sobre from './components/Sobre'

function App() {
return (
   <>
      <Cabecalho />
      <main>
        <Hero />
        <Sobre />
        <Programacao />
        <Atracoes />
        <Inscricao />
      </main>
      <Rodape />
    </>
  );
}

export default App
