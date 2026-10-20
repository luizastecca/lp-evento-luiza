import { useState } from 'react';
import { tiposIngressos } from '../data/evento';

function Inscricao() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [ingresso, setIngresso] = useState('entrada');
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setEnviado(true);
  }

  const ingressoSelecionado = tiposIngressos.find(i => i.valor === ingresso)?.texto || ingresso;

  if (enviado) {
    return (
      <section id="inscricao" className="py-16 px-4 bg-orange-50 border-t border-orange-100">
        <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md text-center border border-emerald-200">
          <div className="text-emerald-500 text-5xl mb-4">✓</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Inscrição Confirmada!</h2>
          <p role="status" className="text-gray-700 mt-4">
            Pronto, <strong>{nome}</strong>! Seu passaporte para o tipo <strong>{ingressoSelecionado}</strong> foi enviado para o e-mail: <span className="text-gray-600 block italic mt-1">{email}</span>
          </p>
        </div>
      </section>
    );
  }

  return (
    
    <section id="inscricao" className="bg-linear-to-b from-[#eff6ff] to-[#dc2626]/20 py-20 px-4 text-center border-b border-orange-200">
      <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md border border-orange-100">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Garanta sua vaga nas Aulas-Show</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <label className="flex flex-col gap-1 text-gray-700 font-medium">
            Nome Completo
            <input 
              type="text" 
              required 
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaria"
              placeholder="Digite seu nome"
            />
          </label>

          <label className="flex flex-col gap-1 text-gray-700 font-medium">
            E-mail
            <input 
              type="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaria"
              placeholder="seu.email@exemplo.com"
            />
          </label>

          <label className="flex flex-col gap-1 text-gray-700 font-medium">
            Tipo de Ingresso
            <select 
              value={ingresso}
              onChange={(e) => setIngresso(e.target.value)}
              className="mt-1 p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primaria"
            >
              {tiposIngressos.map((opc) => (
                <option key={opc.valor} value={opc.valor}>
                  {opc.texto}
                </option>
              ))}
            </select>
          </label>

          <button type="submit" className="bg-primaria hover:bg-red-700 text-white font-bold p-4 rounded-lg shadow mt-2 transition-colors cursor-pointer">
            Realizar Inscrição
          </button>
        </form>
      </div>
    </section>
  );
}

export default Inscricao
