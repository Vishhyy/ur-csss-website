import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import ChatIcon from './ChatIcon';
import newLogo from '../assets/csss-logo.png'; // Using the correct .png logo

interface Message {
  role: 'user' | 'model';
  text: string;
}

// --- UPDATED SYSTEM INSTRUCTION ---
// The chatbot's knowledge has been updated with the latest info.
const systemInstruction = `You are a friendly and helpful AI assistant for the University of Regina Computer Science Students' Society (CSSS). Your goal is to answer questions from students and potential sponsors about the society, based on the information provided below.

**About the CSSS:**
The CSSS is a student-managed organization for computer science students at the University of Regina. It has been running for over 30 years, providing events, networking opportunities, career seminars, and programming workshops.

**Upcoming Events:**
- **Welcome Back BBQ:** September 10th, 12:00 PM - 2:00 PM. Free food and a chance to meet fellow students.
- **Resume & Interview Workshop:** September 25th, 5:00 PM - 7:00 PM. Get career advice from industry professionals.
- **URHacks Kick-off:** October 10th, 6:00 PM - 7:00 PM. The official start of our 24-hour hackathon.

**URHacks Hackathon:**
This is our premier 24-hour hackathon where students team up to build applications. Past winners have created projects like SolarGreen (a solar panel calculator), Future Feast (a food-sharing app), and BinBuddy (an AI-powered sorting bin). The website also has an AI Project Idea Generator to help students brainstorm.

**Executive Team (2025-2026):**
- **President:** Shahd Saeed
- **VP Internal:** Vishwkumar Sheta
- **VP External:** Meet Patel
- **Financial Officer:** Siddharth Modi
- **Facilities Officer:** Muhammad Muiz Azeem
- **Social Media Manager:** Eriminuoluwa Orulugbagbe
- **Events Manager:** Anas Munshi

**Sponsorship:**
We have Bronze ($500), Silver ($1000), and Gold ($2500) sponsorship tiers for URHacks, each with different benefits. There is also a $200 Bounty Sponsorship option for creating a custom prize.

**Contact & Social Media:**
- **Primary Contact:** Our main way of contact is via email at csss.uofr@gmail.com.
- **Office Location:** College West 235.4, 3737 Wascana Parkway, Regina, SK.
- **Instagram:** @csss.uofr (https://www.instagram.com/csss.uofr/)
- **LinkedIn:** https://www.linkedin.com/company/csss-uofr/

Keep your answers concise and friendly. Format important information with markdown like bolding or lists. If you don't know an answer, say so politely and suggest they email csss.uofr@gmail.com for more information.`;


const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!process.env.API_KEY) {
      console.error("API_KEY is not set.");
      return;
    }
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    chatRef.current = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: systemInstruction,
      },
    });
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !chatRef.current) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const result = await chatRef.current.sendMessageStream({ message: input });
      let modelResponse = "";
      for await (const chunk of result) {
        modelResponse += chunk.text;
      }
      const botMessage: Message = { role: 'model', text: modelResponse };
      setMessages(prev => [...prev, botMessage]);

    } catch (error) {
      console.error('Error sending message to Gemini:', error);
      const errorMessage: Message = { role: 'model', text: 'Sorry, I seem to be having trouble connecting. Please try again later.' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const CsssLogoSmall: React.FC = () => (
    <img
      src={newLogo}
      alt="CSSS Logo"
      className="h-6 w-6 flex-shrink-0"
    />
  );

  return (
    <>
      <div className={`fixed bottom-0 right-0 p-4 sm:p-6 lg:p-8 transition-all duration-300 ${isOpen ? 'translate-y-full' : 'translate-y-0'}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#00643f] text-white rounded-full p-4 shadow-lg hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fdb927] transition-transform hover:scale-110"
          aria-label="Toggle Chat"
        >
          <ChatIcon className="h-8 w-8" />
        </button>
      </div>

      <div
        className={`fixed bottom-0 right-0 mb-24 mr-4 sm:mr-6 lg:mr-8 w-[calc(100%-2rem)] max-w-md h-[70%] max-h-[600px] bg-white rounded-lg shadow-2xl flex flex-col transition-all duration-500 ease-in-out transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
        role="dialog"
        aria-labelledby="chat-heading"
      >
        <header className="bg-[#00643f] text-white p-4 flex justify-between items-center rounded-t-lg">
          <h2 id="chat-heading" className="text-xl font-bold">CSSS Assistant</h2>
          <button onClick={() => setIsOpen(false)} aria-label="Close Chat" className="p-1 rounded-full hover:bg-green-700 transition-colors">&times;</button>
        </header>

        <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-end gap-3 my-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.role === 'model' && <CsssLogoSmall />}
              <div
                className={`max-w-xs md:max-w-md lg:max-w-sm rounded-2xl px-4 py-2 text-sm ${msg.role === 'user' ? 'bg-[#fdb927] text-[#00643f] rounded-br-none' : 'bg-gray-200 text-gray-800 rounded-bl-none'
                  }`}
              >
                <p className="whitespace-pre-wrap">{msg.text}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-end gap-3 my-3 justify-start">
              <CsssLogoSmall />
              <div className="bg-gray-200 text-gray-800 rounded-2xl px-4 py-3 rounded-bl-none flex items-center space-x-1">
                <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
          <div className="flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00643f]"
              disabled={isLoading}
              aria-label="Chat input"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="ml-3 bg-[#00643f] text-white font-bold rounded-full p-3 disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-green-900 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fdb927]"
              aria-label="Send Message"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform rotate-90" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Chatbot;