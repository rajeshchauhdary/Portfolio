import React, { useState } from 'react';
import { X, Send, Bot, User, Sparkles } from 'lucide-react';
import { projectsData } from '../data/projectsData';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'ai', text: "Hi! I'm Rajesh's AI assistant. Ask me anything about his projects, technical stack, or background in AI & ML." }
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userQuery = input.trim();
    const newMessages = [...messages, { sender: 'user', text: userQuery }];
    setMessages(newMessages);
    setInput('');

    setTimeout(() => {
      let aiResponse = "I focus on Artificial Intelligence, Machine Learning, Data Science, and Full-Stack Development. You can check out my Projects or Skills page for more details!";
      const queryLower = userQuery.toLowerCase();

      if (queryLower.includes('project') || queryLower.includes('work') || queryLower.includes('articul') || queryLower.includes('aapda') || queryLower.includes('edusity')) {
        aiResponse = `Rajesh has built several projects including ${projectsData.map(p => p.name).join(', ')}. Check out the Projects page for architecture highlights and repository links!`;
      } else if (queryLower.includes('skill') || queryLower.includes('python') || queryLower.includes('react') || queryLower.includes('stack')) {
        aiResponse = "Rajesh's stack includes Python, TypeScript, React, Next.js, PyTorch, OpenCV, Docker, and AWS cloud architecture.";
      } else if (queryLower.includes('education') || queryLower.includes('university') || queryLower.includes('study')) {
        aiResponse = "Rajesh is currently in the final year of his BSc CSIT (Bachelor of Science in Computer Science and Information Technology) degree in Nepal.";
      } else if (queryLower.includes('location') || queryLower.includes('nepal') || queryLower.includes('where')) {
        aiResponse = "Rajesh is based in Lalitpur, Nepal.";
      } else if (queryLower.includes('contact') || queryLower.includes('hire') || queryLower.includes('email')) {
        aiResponse = "You can reach out via the Contact page or connect on LinkedIn and GitHub (@rajeshchauhdary)!";
      }

      setMessages([...newMessages, { sender: 'ai', text: aiResponse }]);
    }, 600);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-white text-black p-4 rounded-full shadow-2xl hover:bg-neutral-200 transition-all flex items-center space-x-2 font-mono text-xs font-bold"
      >
        <Sparkles className="w-5 h-5" />
        <span className="hidden sm:inline">ASK AI ASSISTANT</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[500px] bg-black border border-neutral-800 shadow-2xl flex flex-col font-mono">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800 bg-neutral-900/50">
            <div className="flex items-center space-x-2 text-white text-xs">
              <Bot className="w-4 h-4 text-white" />
              <span>RAJESH_AI_AGENT v1.0</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-neutral-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-grow p-4 overflow-y-auto space-y-4 text-xs">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex items-start space-x-2 ${msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}
              >
                <div className={`w-6 h-6 rounded-none flex items-center justify-center shrink-0 border ${msg.sender === 'user' ? 'border-white bg-white text-black' : 'border-neutral-700 bg-neutral-900 text-white'}`}>
                  {msg.sender === 'user' ? <User className="w-3 h-3" /> : <Bot className="w-3 h-3" />}
                </div>
                <div className={`p-3 max-w-[75%] leading-relaxed ${msg.sender === 'user' ? 'bg-neutral-900 border border-neutral-800 text-white' : 'bg-neutral-950 border border-neutral-800 text-neutral-300'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-3 border-t border-neutral-800 bg-neutral-900/30 flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about projects, skills, education..."
              className="flex-grow bg-black border border-neutral-800 px-3 py-2 text-white text-xs focus:outline-none focus:border-white"
            />
            <button
              type="submit"
              className="bg-white text-black p-2 hover:bg-neutral-200 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
