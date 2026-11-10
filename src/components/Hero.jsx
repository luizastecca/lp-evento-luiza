import { evento } from '../data/evento';

function Hero() {
  return (
    <section id="hero" className="bg-linear-to-b from-[#eff6ff] to-[#dc2626]/20 py-20 px-4 text-center border-b border-orange-200">   <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-extrabold text-primaria tracking-tight mb-4">
        {evento.nome} 🍲✨
      </h1>
      <p className="text-xl text-gray-700 font-medium mb-6">
        {evento.slogan} 👨‍🍳
      </p>


      <div className="bg-white p-4 rounded-xl shadow-sm inline-block mb-8 border border-orange-100">
        <p className="text-gray-800 font-semibold">{evento.data}</p>
        <p className="text-gray-600 text-sm">{evento.horario}</p>
        <p className="text-gray-500 text-xs mt-1">{evento.local}</p>
      </div>
      <div>
        <a href="#inscricao" className="inline-block bg-primaria hover:bg-destaque text-white font-bold text-lg px-8 py-4 rounded-lg shadow-md transition-transform hover:scale-105">
          Garantir Meu Ingresso
        </a>
      </div>
    </div>
    </section>
  );
}

export default Hero
