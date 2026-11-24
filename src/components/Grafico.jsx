import { useEffect, useRef } from "react";

const dados = [
  // Troque pelos 3 itens do seu evento (ex.: tipos de ingresso, pratos mais votados, lotes...)
  { rotulo: "Entrada", valor: 320 },
  { rotulo: "Aula-show", valor: 145 },
  { rotulo: "Passaporte", valor: 500 },
];

function Grafico() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const maior = Math.max(...dados.map((d) => d.valor));

    dados.forEach((item, i) => {
      const largura = (item.valor / maior) * 220; // a maior barra tem 220px
      const y = 20 + i * 50; // cada barra 50px abaixo da anterior

      // 1. escolha a cor da barra (azul escuro do seu evento)
      ctx.fillStyle = "#00008B";

      // 2. desenhe a barra com fillRect, começando em x = 110
      ctx.fillRect(110, y, largura, 30);

      // 3. troque a cor para escuro e escreva o rótulo em x = 10
      ctx.fillStyle = "#1f2937";
      ctx.font = "14px sans-serif";
      ctx.fillText(item.rotulo, 10, y + 20);

      // 4. escreva o valor logo depois do fim da barra
      ctx.fillText(item.valor, 110 + largura + 8, y + 20);
    });
  }, []);

  return (
    <section className="px-4 py-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-primaria">Título do gráfico</h2>
      <canvas
        ref={canvasRef}
        width={380}
        height={170}
        role="img"
        aria-label="Gráfico de barras mostrando Item A com 120, Item B com 80 e Item C com 45"
        className="mt-6 max-w-full"
      />
    </section>
  );
}

export default Grafico;