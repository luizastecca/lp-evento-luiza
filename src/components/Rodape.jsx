import { evento } from '../data/evento';

function Rodape() {
  return (
    <footer className="bg-primaria text-white/80 py-12 px-6 text-center text-sm border-t border-white/10">
      <div className="max-w-[1140px] mx-auto flex flex-col gap-2">
        <p className="font-serif text-lg font-bold tracking-[-0.02em] text-white">
          {evento.nome}
        </p>
        <p>{evento.local}</p>
        <p className="text-xs text-white/60 mt-2 italic">
          Evento fictício criado para fins didáticos
        </p>
      </div>
    </footer>
  );
}

export default Rodape;
