import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";

/**
 * Design Philosophy: Modern Minimalist with Vibrant Accents
 * Live chat widget for real-time visitor engagement
 */

interface Message {
  id: string;
  type: "user" | "agent";
  text: string;
  timestamp: Date;
}

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "agent",
      text: "Hello! 👋 Welcome to Generation AI. How can we help you today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) {
      return;
    }

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate agent response
    setTimeout(() => {
      const responses = [
        "Thanks for your question! Our team will get back to you shortly with more details.",
        "That's a great question! Would you like to schedule a demo to see our course in action?",
        "I'd be happy to help! Can you tell me more about what you're looking for?",
        "Our course covers all the fundamentals of AI and practical applications. Would you like to know more?",
        "We offer flexible scheduling for working professionals. What time works best for you?",
        "Feel free to fill out our contact form and we'll be in touch within 24 hours!"
      ];

      const randomResponse = responses[Math.floor(Math.random() * responses.length)];

      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "agent",
        text: randomResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, agentMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-40 font-body">
        {isOpen ? (
          // Chat Window
          <div className="bg-white rounded-2xl shadow-2xl border border-border w-96 max-w-[calc(100vw-2rem)] flex flex-col h-[600px] max-h-[80vh] animate-in fade-in slide-in-from-bottom-4 duration-300">
            {/* Header */}
            <div className="gradient-primary text-white rounded-t-2xl p-6 flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-display font-bold text-lg">Generation AI Support</h3>
                <p className="text-sm text-white/80">We typically reply in minutes</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 rounded-lg p-2 transition-smooth"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-background/50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs px-4 py-3 rounded-lg ${
                      message.type === "user"
                        ? "bg-accent text-white rounded-br-none"
                        : "bg-white border border-border text-foreground rounded-bl-none"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p
                      className={`text-xs mt-2 ${
                        message.type === "user" ? "text-white/70" : "text-secondary-foreground"
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit"
                      })}
                    </p>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-border text-foreground rounded-lg rounded-bl-none px-4 py-3 flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-sm">Agent is typing...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-border p-4 bg-white rounded-b-2xl space-y-3">
              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder="Type your message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  className="gradient-primary text-white hover:opacity-90 transition-smooth px-4 h-10"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-secondary-foreground text-center">
                Available Mon-Fri, 9AM-6PM PST
              </p>
            </div>
          </div>
        ) : (
          // Chat Button
          <button
            onClick={() => setIsOpen(true)}
            className="gradient-primary text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-smooth hover:scale-110 duration-300 animate-pulse"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Overlay when chat is open */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
