
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIAgent: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (messages.length > 0) scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);
    const response = await getGeminiResponse(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: response || "Unavailable." }]);
    setIsLoading(false);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {messages.map((m, idx) => (
          <div key={idx} className="text-sm leading-relaxed">
            <span className={`font-medium mr-2 ${m.role === 'user' ? 'text-white' : 'text-zinc-500'}`}>
              {m.role === 'user' ? 'You:' : 'AI:'}
            </span>
            <span className={m.role === 'user' ? 'text-zinc-300' : 'text-zinc-400'}>{m.content}</span>
          </div>
        ))}
        {isLoading && (
          <div className="text-xs text-zinc-700 animate-pulse uppercase tracking-widest">Processing...</div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="relative pt-4 border-t border-zinc-900">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask a question..."
          className="w-full bg-transparent border-none text-sm text-white placeholder-zinc-700 focus:outline-none py-1"
        />
        <div className="absolute right-0 bottom-1">
          <button 
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="text-[10px] uppercase tracking-widest text-zinc-600 hover:text-white transition-colors disabled:opacity-0"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAgent;
