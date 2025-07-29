import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

  /**
   * A WhatsApp-like chat component that can be toggled open/closed from a floating button.
   * The chat window displays a list of messages and allows the user to send new messages.
   * The component also displays a notification badge when the chat window is closed.
   */
const WhatsAppChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm here to help you with any questions about our cleaning services. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sender: 'user',
        timestamp: new Date()
      };
      
      setMessages([...messages, newMessage]);
      setMessage('');
      
      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: "Thanks for your message! I'll connect you with our team shortly. You can also call us at +31 629532653 -CLEAN for immediate assistance.",
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  /**
   * Handles key press events on the message input field.
   *
   * @param e Keyboard event
   */
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 w-72 sm:w-80 h-80 sm:h-96 bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-between rounded-t-3xl">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-white">Effect Facility Support</h3>
                <p className="text-xs text-green-100">Online now</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
            >
              <X className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 sm:p-4 overflow-y-auto space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] p-3 rounded-2xl ${
                    msg.sender === 'user'
                      ? 'bg-green-500 text-white'
                      : 'bg-slate-700/50 backdrop-blur-sm border border-slate-600/30 text-white'
                  }`}
                >
                  <p className="text-xs sm:text-sm">{msg.text}</p>
                  <p className={`text-xs mt-1 ${
                    msg.sender === 'user' ? 'text-green-100' : 'text-gray-400'
                  }`}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 sm:p-4 border-t border-slate-700/30">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 rounded-full bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-200 text-white placeholder-gray-400 text-xs sm:text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="w-9 h-9 sm:w-10 sm:h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Send className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 sm:bottom-6 right-4 sm:right-6 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 z-40 ${
          isOpen ? 'rotate-180' : ''
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        )}
      </button>

      {/* Notification Badge */}
      {!isOpen && (
        <div className="fixed bottom-[3.5rem] sm:bottom-[4.5rem] right-[3.5rem] sm:right-[4.5rem] w-5 h-5 sm:w-6 sm:h-6 bg-red-500 rounded-full flex items-center justify-center z-50 animate-pulse">
          <span className="text-xs font-bold text-white">1</span>
        </div>
      )}
    </>
  );
};

export default WhatsAppChat;