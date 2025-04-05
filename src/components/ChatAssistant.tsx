
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bot, Send, User } from "lucide-react";

type Message = {
  id: number;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
};

const ChatAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hello! I'm Odigo, your AI training assistant. How can I help you with your learning journey today?",
      sender: 'assistant',
      timestamp: new Date(),
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    const newUserMessage: Message = {
      id: messages.length + 1,
      content: input,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages([...messages, newUserMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate assistant response after a delay
    setTimeout(() => {
      const assistantResponses = [
        "I can help you with that! Let me find some resources for your current course.",
        "Great question! Based on your progress, I'd recommend focusing on the advanced concepts in module 3.",
        "You're doing well in your training. Your latest assessment shows improvement in problem-solving skills.",
        "Would you like me to schedule a practice session for you based on your available time slots?",
        "I noticed you've been working hard on the technical modules. Don't forget to check out the soft skills workshops too!",
      ];

      const randomResponse = assistantResponses[Math.floor(Math.random() * assistantResponses.length)];
      
      const newAssistantMessage: Message = {
        id: messages.length + 2,
        content: randomResponse,
        sender: 'assistant',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, newAssistantMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200">
      <div className="p-4 border-b border-gray-200 bg-odigos-slate text-white rounded-t-lg">
        <div className="flex items-center gap-2">
          <Bot className="h-5 w-5" />
          <h3 className="font-semibold">Odigo Assistant</h3>
        </div>
      </div>
      
      <div className="h-80 overflow-y-auto p-4 flex flex-col gap-3">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex gap-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
              <Avatar className="h-8 w-8">
                {message.sender === 'assistant' ? (
                  <AvatarImage src="/placeholder.svg" alt="Odigo" />
                ) : (
                  <AvatarFallback className="bg-odigos-blue text-white">
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                )}
              </Avatar>
              <div className={`py-2 px-3 rounded-lg ${
                message.sender === 'assistant' 
                  ? 'bg-gray-100' 
                  : 'bg-odigos-blue text-white'
              }`}>
                <p className="text-sm">{message.content}</p>
                <p className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="flex gap-2 max-w-[80%]">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" alt="Odigo" />
              </Avatar>
              <div className="py-2 px-3 rounded-lg bg-gray-100">
                <p className="text-sm">Odigo is typing...</p>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <div className="flex gap-2">
          <Input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Ask Odigo anything about your training..."
            className="flex-1"
          />
          <Button 
            onClick={handleSendMessage}
            size="icon" 
            className="bg-odigos-blue hover:bg-blue-600"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatAssistant;
