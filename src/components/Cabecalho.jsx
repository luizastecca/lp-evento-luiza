import { evento } from '../data/evento';

function Cabecalho() {
  return (
    <header className="sticky top-0 z-50 bg-primaria text-white border-b border-white/10 shadow-[0_10px_30px_-10px_rgba(10,17,114,0.22)]">
      <div className="max-w-[1140px] mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
        <a
          href="#hero"
          className="font-serif text-xl sm:text-2xl font-bold tracking-[-0.02em] text-white text-center sm:text-left transition-opacity duration-250 hover:opacity-90 focus-visible:outline-yellow-300 rounded"
        >
          {evento.nome}
        </a>
        <nav aria-label="Navegação principal">
          <ul className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm font-medium">
            <li>
              <a
                href="#hero"
                className="text-white/85 hover:text-white py-1 border-b border-transparent hover:border-white/60 transition-all duration-250 focus-visible:outline-yellow-300 rounded"
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#sobre"
                className="text-white/85 hover:text-white py-1 border-b border-transparent hover:border-white/60 transition-all duration-250 focus-visible:outline-yellow-300 rounded"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#programacao"
                className="text-white/85 hover:text-white py-1 border-b border-transparent hover:border-white/60 transition-all duration-250 focus-visible:outline-yellow-300 rounded"
              >
                Programação
              </a>
            </li>
            <li>
              <a
                href="#atracoes"
                className="text-white/85 hover:text-white py-1 border-b border-transparent hover:border-white/60 transition-all duration-250 focus-visible:outline-yellow-300 rounded"
              >
                Atrações
              </a>
            </li>
            <li>
              <a
                href="#duvidas"
                className="text-white/85 hover:text-white py-1 border-b border-transparent hover:border-white/60 transition-all duration-250 focus-visible:outline-yellow-300 rounded"
              >
                Dúvidas
              </a>
            </li>
            <li>
              <a
                href="#inscricao"
                className="inline-flex items-center bg-destaque hover:bg-destaque-hover text-white font-semibold px-4 py-1.5 rounded-full transition-all duration-250 shadow-sm focus-visible:outline-yellow-300"
              >
                Ingressos
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Cabecalho;
