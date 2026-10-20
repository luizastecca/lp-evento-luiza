import { evento } from '../data/evento';

function Rodape() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center text-sm border-t border-gray-800">
      <div className="max-w-4xl mx-auto flex flex-col gap-2">
        <p className="font-semibold text-white">{evento.nome}</p>
        <p>{evento.local}</p>
        <p className="text-xs text-gray-500 mt-2 italic">
          Evento fictício criado para fins didáticos
        </p>
      </div>
    </footer>
  );
}

export default Rodape