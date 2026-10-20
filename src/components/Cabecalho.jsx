import { evento } from '../data/evento';

function Cabecalho() {
  return (
    <header className="sticky top-0 z-50 bg-primaria text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="font-bold text-lg text-center sm:text-left">{evento.nome}</span>
        <nav>
          <ul className="flex flex-wrap justify-center gap-6 font-medium">
            <li><a href="#hero" className="hover:underline flex items-center">Início</a></li>
            <li><a href="#sobre" className="hover:underline flex items-center">Sobre</a></li>
            <li><a href="#programacao" className="hover:underline flex items-center">Programação</a></li>
            <li><a href="#atracoes" className="hover:underline flex items-center">Atrações</a></li>
            <li><a href="#inscricao" className="hover:underline flex items-center">Ingressos</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Cabecalho
