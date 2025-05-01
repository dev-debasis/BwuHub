"use client"
import { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { FaRobot } from "react-icons/fa";

const UserLogo = () => (
  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 text-gray-200">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  </div>
);

// Message component
const Message = ({ message, isBot }) => (
  <div className={`flex gap-3 p-4 ${isBot ? 'bg-gray-800' : 'bg-gray-900'}`}>
    {isBot ? <FaRobot /> : <UserLogo />}
    <div className="flex-1">
      <div className="font-medium text-sm text-gray-300 mb-1">
        {isBot ? 'AI Assistant' : 'You'}
      </div>
      <div className="text-gray-200">
        {message}
      </div>
    </div>
  </div>
);

export default function ChatInterface() {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your AI assistant. How can I help you today?", isBot: true }
  ]);
  const [inputText, setInputText] = useState('');
  const messageEndRef = useRef(null);

  // Sample bot responses - in a real app, this would come from an API
  const botResponses = [
    "I'm analyzing your question. Let me think about that...",
    "That's an interesting point. Here's what I found for you.",
    "I'd be happy to help with that! Here's what you need to know.",
    "Great question! The answer is quite fascinating.",
    "I've processed your request and here are the results."
  ];

  // Auto-scroll to the bottom when new messages are added
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (inputText.trim() === '') return;
    
    // Add user message
    setMessages(prev => [...prev, { text: inputText, isBot: false }]);
    setInputText('');
    
    // Simulate bot typing and response (would be an API call in a real app)
    setTimeout(() => {
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      setMessages(prev => [...prev, { text: randomResponse, isBot: true }]);
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className='max-h-screen bg-black'>

    <div className="flex flex-col h-screen max-w-3xl mx-auto bg-gray-900 border border-gray-700 rounded-lg shadow-lg">
      {/* Header */}
      <div className="flex items-center p-4 border-b border-gray-700 bg-gray-800 sticky top-0 z-10">
        <FaRobot />
        <h1 className="ml-2 text-lg font-semibold text-gray-100">AI Assistant</h1>
      </div>
      
      {/* Messages container */}
      <div className="flex-1 overflow-y-auto p-0 space-y-0 divide-y divide-gray-700">
        {messages.map((message, index) => (
          <Message key={index} message={message.text} isBot={message.isBot} />
        ))}
        <div ref={messageEndRef} />
      </div>
      
      {/* Input area */}
      <div className="border-t border-gray-700 p-4 bg-gray-800">
        <div className="flex items-center gap-2">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message here..."
            className="flex-1 resize-none border border-gray-600 rounded-md p-3 bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent min-h-12 max-h-32"
            rows={1}
          />
          <button
            onClick={handleSendMessage}
            disabled={inputText.trim() === ''}
            className={`p-3 rounded-md ${
              inputText.trim() === '' 
                ? 'bg-gray-600 text-gray-400' 
                : 'bg-indigo-600 text-gray-100 hover:bg-indigo-500'
            } transition-colors duration-200`}
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}