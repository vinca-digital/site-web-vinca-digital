import React, { useState, useRef } from 'react';

interface Message {
  role: 'user' | 'bot';
  content: string;
}

const ChatBot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const fetchAIResponse = async (userMessage: string): Promise<string> => {
    try {
      const response = await fetch("https://backend.buildpicoapps.com/aero/run/llm-api?pk=v1-Z0FBQUFBQm5IZkJDMlNyYUVUTBZkWWuUHNahSjQZtmeoQYjMvmHe1WYuCTdxejhLSzBhNWNMMXNzZlp3c09BSTR6YW1Sc1BmdGNTVk1GY0liT1RoWDZZX1lNZlZ0Z1dqd3c9PQ==", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          prompt: userMessage
        })
      });

      if (!response.ok) {
        console.error("Error:", response.statusText);
        return "Il y a eu une erreur. Veuillez réessayer plus tard.";
      }

      const data = await response.json();
      if (data.status === "success") {
        return data.text;
      } else {
        console.error("Error:", data);
        return "Il y a eu une erreur. Veuillez réessayer plus tard.";
      }
    } catch (error) {
      console.error("Error:", error);
      return "Il y a eu une erreur. Veuillez réessayer plus tard.";
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMessage: Message = { role: 'user', content: input };
    setMessages((msgs) => [...msgs, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const aiResponse = await fetchAIResponse(input);
      const botMessage: Message = { role: 'bot', content: aiResponse };
      setMessages((msgs) => [...msgs, botMessage]);
    } catch (e) {
      setMessages((msgs) => [...msgs, { role: 'bot', content: "Erreur lors de la connexion à l'IA." }]);
    }
    
    setLoading(false);
  };

  React.useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  return (
    <>
      {/* Bouton flottant */}
      <button
        className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground rounded-full shadow-lg p-4 hover:scale-105 transition-bounce"
        onClick={() => setOpen((o) => !o)}
        aria-label="Ouvrir le chat bot"
      >
        💬
      </button>
      {/* Fenêtre de chat */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 max-w-[95vw] bg-background border border-border rounded-xl shadow-xl flex flex-col overflow-hidden animate-fade-in">
          <div className="bg-primary text-primary-foreground px-4 py-2 font-bold flex justify-between items-center">
            <span>Assistant IA</span>
            <button onClick={() => setOpen(false)} aria-label="Fermer">✖️</button>
          </div>
          <div className="flex-1 p-3 space-y-2 overflow-y-auto max-h-80 bg-background">
            {messages.length === 0 && (
              <div className="text-muted-foreground text-sm text-center">Commence la discussion…</div>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`text-sm p-2 rounded-lg ${msg.role === 'user' ? 'bg-secondary text-secondary-foreground self-end ml-8' : 'bg-muted text-muted-foreground self-start mr-8'}`}>{msg.content}</div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form
            className="flex border-t border-border bg-background"
            onSubmit={e => { e.preventDefault(); handleSend(); }}
          >
            <input
              className="flex-1 p-2 outline-none bg-background text-foreground"
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Écris ton message…"
              disabled={loading}
              autoFocus
            />
            <button
              type="submit"
              className="px-3 py-2 text-primary font-bold disabled:opacity-50"
              disabled={loading || !input.trim()}
            >
              {loading ? '...' : 'Envoyer'}
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBot; 