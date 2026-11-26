import { useState } from "react";

function BotaoLembrete() {
  const [mensagem, setMensagem] = useState("");

  async function ativarLembrete() {
    // 1. Se o navegador não tiver 'Notification' em window,
    //    mostre a mensagem "Este navegador não aceita notificações." e pare (return)
    if (!("Notification" in window)) {
      setMensagem("Este navegador não aceita notificações.");
      return;
    }

    // 2. Peça a permissão e guarde a resposta numa constante
    //    (lembre: requestPermission devolve uma Promise, use await)
    const permissao = await Notification.requestPermission();

    // 3. Se a resposta for diferente de 'granted',
    //    mostre "Você não permitiu as notificações." e pare
    if (permissao !== "granted") {
      setMensagem("Você não permitiu as notificações.");
      return;
    }

    // 4. Espere o Service Worker ficar pronto e guarde em 'registro'
    const registro = await navigator.serviceWorker.ready;

    // 5. Mostre a notificação com registro.showNotification(...)
    //    título: nome do seu evento
    //    body: uma frase de lembrete
    //    icon: '/icone-192.png'
    registro.showNotification("Nome do seu Evento", {
      body: "O evento está chegando! Não se esqueça de participar.",
      icon: "/icone-192.png",
    });

    // 6. Mostre na tela a mensagem "Lembrete ativado!"
    setMensagem("Lembrete ativado!");
  }

  return (
    <div className="w-full sm:w-auto flex flex-col items-center sm:items-start">
      <button
        type="button"
        onClick={ativarLembrete}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-transparent border-[1.5px] border-primaria px-7 py-[14.5px] text-base font-semibold text-primaria transition-all duration-250 hover:bg-primaria/5 cursor-pointer"
      >
        <svg
          className="w-4 h-4 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
        Me lembre do evento
      </button>
      {mensagem && (
        <p role="status" className="mt-2 text-sm text-texto font-medium">
          {mensagem}
        </p>
      )}
    </div>
  );
}

export default BotaoLembrete;
