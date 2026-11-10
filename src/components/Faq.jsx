import { useState } from 'react';

const listaFaq = [
  {
    id: "faq-1",
    pergunta: "Aceita cartão e Pix?",
    resposta: "Sim, todas as 20 barracas de restaurantes, produtores rurais e cozinheiros do festival aceitam pagamento em cartão de débito, crédito e Pix."
  },
  {
    id: "faq-2",
    pergunta: "Tem opção vegetariana?",
    resposta: "Sim! Pelo menos cinco barracas do festival contam com opções de pratos e receitas deliciosas totalmente sem carne."
  },
  {
    id: "faq-3",
    pergunta: "Posso levar meu cachorro?",
    resposta: "Pode sim! O Festival Sabores da Alta Paulista é pet friendly, desde que o seu cachorro esteja utilizando a coleira durante a permanência no Recinto de Exposições."
  }
];

function Faq() {
  const [abertoId, setAbertoId] = useState(null);

  function toggleFaq(id) {
    setAbertoId(abertoId === id ? null : id);
  }

  return (
    <section id="duvidas" className="bg-linear-to-b from-orange-50 to-blue-50 py-20 px-4 border-b border-orange-200">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Perguntas Frequentes</h2>
        
        <div className="flex flex-col gap-4">
          {listaFaq.map((item) => {
            const isAberta = abertoId === item.id;
            
            return (
              <div key={item.id} className="bg-white rounded-xl shadow-sm border border-orange-100 overflow-hidden">
                <h3>
                  <button
                    type="button"
                    onClick={() => toggleFaq(item.id)}
                    aria-expanded={isAberta}
                    aria-controls={`resposta-${item.id}`}
                    className="w-full flex justify-between items-center p-5 text-left text-gray-900 font-semibold text-lg hover:bg-gray-50 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaria"
                  >
                    <span>{item.pergunta}</span>
                    <span 
                      className={`text-xl text-destaque transition-transform duration-200 ${isAberta ? 'rotate-180' : ''}`} 
                      aria-hidden="true"
                    >
                      ▼
                    </span>
                  </button>
                </h3>
                
                <div
                  id={`resposta-${item.id}`}
                  hidden={!isAberta}
                  className="px-5 pb-5 text-gray-700 bg-gray-50/50 leading-relaxed border-t border-gray-100"
                >
                  <p className="pt-4">{item.resposta}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Faq;

