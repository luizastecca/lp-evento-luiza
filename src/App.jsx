import Hero from './components/Hero'
import Atracoes from './components/Atracoes'
import Cabecalho from './components/Cabecalho'
import Inscricao from './components/Inscricao'
import Programacao from './components/Programacao'
import Rodape from './components/Rodape'
import Sobre from './components/Sobre'
import Faq from './components/Faq' 

function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-primaria focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold focus:shadow-md focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-yellow-400"
      >
        Pular para o conteúdo
      </a>

      <Cabecalho />
      
      <main id="conteudo">
        <Hero />
        <Sobre />
        <Programacao />
        <Atracoes />
        <Faq />
        <Inscricao />
      </main>
      
      <Rodape />
    </>
  );
}

export default App;

