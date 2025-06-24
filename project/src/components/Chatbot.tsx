import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! Welcome to River Edge Inn. How can I assist you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const botResponses = {
    greeting: [
      "Hello! Welcome to River Edge Inn. How can I help you today?",
      "Hi there! I'm here to assist you with any questions about our inn.",
      "Welcome! Feel free to ask me anything about our accommodations and services."
    ],
    booking: [
      "You can make a reservation by clicking our 'Book Now' button or calling us at 804-410-2024 / 804-410-2050. Our rates start from $189/night.",
      "For bookings, please visit our online reservation system or contact our front desk at 804-410-2024 / 804-410-2050. We'd be happy to help you find the perfect room!",
      "I'd be happy to help with your booking! You can reserve online through our booking system or call us directly. What dates are you considering?"
    ],
    amenities: [
      "We offer free WiFi, complimentary parking, a waterfront restaurant, spa services, and stunning Potomac River views. All rooms feature modern amenities and water views.",
      "Our amenities include: waterfront dining, full-service spa, free WiFi and parking, fitness center, and concierge services. Each room has a private balcony with river views.",
      "River Edge Inn features luxury amenities including our award-winning restaurant, spa, fitness facilities, and complimentary WiFi and parking throughout the property."
    ],
    location: [
      "We're located at 123 Potomac Street in Colonial Beach, Virginia. We're just steps from the beach and close to historic attractions.",
      "River Edge Inn is situated in beautiful Colonial Beach, VA, right on the Potomac River. We're within walking distance of the boardwalk and local attractions.",
      "You'll find us in the heart of Colonial Beach, Virginia, with direct waterfront access and easy reach to local restaurants and historical sites."
    ],
    default: [
      "I'd be happy to help! You can ask me about our rooms, amenities, dining, local attractions, or making a reservation.",
      "I'm here to assist with any questions about River Edge Inn. Feel free to ask about accommodations, dining, activities, or how to book your stay.",
      "Let me help you with information about our inn! I can tell you about our rooms, restaurant, local activities, or assist with booking questions."
    ]
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return botResponses.greeting[Math.floor(Math.random() * botResponses.greeting.length)];
    } else if (message.includes('book') || message.includes('reservation') || message.includes('room') || message.includes('rate')) {
      return botResponses.booking[Math.floor(Math.random() * botResponses.booking.length)];
    } else if (message.includes('amenities') || message.includes('facilities') || message.includes('services')) {
      return botResponses.amenities[Math.floor(Math.random() * botResponses.amenities.length)];
    } else if (message.includes('location') || message.includes('address') || message.includes('where')) {
      return botResponses.location[Math.floor(Math.random() * botResponses.location.length)];
    } else if (message.includes('restaurant') || message.includes('dining') || message.includes('food')) {
      return botResponses.restaurant[Math.floor(Math.random() * botResponses.restaurant.length)];
    } else if (message.includes('activities') || message.includes('things to do') || message.includes('attractions')) {
      return botResponses.activities[Math.floor(Math.random() * botResponses.activities.length)];
    } else {
      return botResponses.default[Math.floor(Math.random() * botResponses.default.length)];
    }
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputText),
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
          isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-600 hover:bg-blue-700'
        } text-white`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[500px] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold">River Edge Inn Assistant</h3>
              <p className="text-sm text-blue-100">Online now</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-2 ${
                  message.isBot ? 'justify-start' : 'justify-end'
                }`}
              >
                {message.isBot && (
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-blue-600" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.isBot ? 'text-gray-500' : 'text-blue-100'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
                {!message.isBot && (
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-blue-600" />
                </div>
                <div className="bg-gray-100 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors duration-200"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;