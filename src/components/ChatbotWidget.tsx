"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";

type Message = {
  role: "user" | "model";
  text: string;
};

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "model", text: "Halo! Saya BANDA, asisten AI resmi Bangka Bandhawa. Ada yang bisa saya bantu terkait KKN UGM Unit Bangka?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll ke pesan terbaru
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");

    // Tambah pesan user ke state
    const newMessages: Message[] = [...messages, { role: "user", text: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      // Menyiapkan format histori untuk Gemini
      // Hilangkan pesan pertama jika itu pesan pembuka dari model
      // Gemini mewajibkan history diawali dengan role 'user'
      let historyToSend = [...newMessages.slice(0, -1)];

      // Jika pesan pertama adalah dari model (pesan default), hapus dari history yang dikirim
      if (historyToSend.length > 0 && historyToSend[0].role === "model") {
        historyToSend = historyToSend.slice(1);
      }

      const history = historyToSend.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          history,
          message: userMessage
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Gagal menghubungi AI");
      }

      setMessages((prev) => [...prev, { role: "model", text: data.reply }]);
    } catch (error: any) {
      setMessages((prev) => [...prev, { role: "model", text: `Error: ${error.message}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[350px] sm:w-[400px] h-[550px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-blue-900 to-[#1f2937] text-white p-4 flex justify-between items-center shadow-md z-10 overflow-hidden">
              <div className="absolute top-0 right-0 opacity-20 transform translate-x-4 -translate-y-4 pointer-events-none">
                <Image src="/logo/lineblue.png" alt="ornament" width={100} height={100} className="w-24 h-24 object-contain" />
              </div>

              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-white/20 shadow-sm text-blue-800">
                  <Bot size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-sm bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">BANDA Assistant</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <p className="text-[10px] text-gray-200 uppercase tracking-wider font-semibold">Online &bull; AI Groq Llama 3</p>
                  </div>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="text-white/70 hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/10 relative z-10"
                aria-label="Tutup Chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="relative flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-4 scroll-smooth">
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: "url('/ornaments/or1.png')", backgroundSize: "cover", backgroundPosition: "center" }} />

              {messages.map((msg, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  key={index}
                  className={`flex gap-2.5 max-w-[90%] relative z-10 ${msg.role === "user" ? "self-end flex-row-reverse" : "self-start"}`}
                >
                  <div className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center mt-1 shadow-sm ${msg.role === "user" ? "bg-blue-600 text-white" : "bg-white border border-gray-100 p-1 text-blue-700"}`}>
                    {msg.role === "user" ? <User size={14} /> : <Bot size={16} strokeWidth={2.5} />}
                  </div>
                  <div
                    className={`p-3.5 rounded-2xl text-sm shadow-sm leading-relaxed ${msg.role === "user"
                        ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-tr-sm"
                        : "bg-white border border-gray-100 text-gray-700 rounded-tl-sm"
                      }`}
                  >
                    {msg.role === "user" ? (
                      msg.text
                    ) : (
                      <div className="text-sm [&>p]:mb-3 last:[&>p]:mb-0 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-3 [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:mb-3 [&>li]:mb-1.5 [&>strong]:font-semibold [&>strong]:text-blue-900 [&>h3]:font-bold [&>h3]:text-base [&>h3]:mb-2 [&>h3]:text-blue-900 [&>a]:text-blue-600 [&>a]:underline [&>a]:font-medium hover:[&>a]:text-blue-800 transition-colors">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {msg.text}
                        </ReactMarkdown>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2.5 max-w-[85%] self-start relative z-10"
                >
                  <div className="w-7 h-7 bg-white border border-gray-100 rounded-full flex-shrink-0 flex items-center justify-center p-1 mt-1 shadow-sm text-blue-700">
                    <Bot size={16} strokeWidth={2.5} className="opacity-70" />
                  </div>
                  <div className="px-4 py-3.5 bg-white border border-gray-100 shadow-sm rounded-2xl rounded-tl-sm flex items-center gap-1.5 h-11">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3.5 bg-white border-t border-gray-100 z-10 relative">
              <form
                onSubmit={sendMessage}
                className="flex items-center gap-2 bg-gray-50/80 backdrop-blur-sm rounded-full pl-4 pr-1.5 py-1.5 border border-gray-200 focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500/50 transition-all shadow-inner"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Tanya BANDA sesuatu..."
                  className="flex-1 bg-transparent border-none outline-none text-sm text-gray-700 placeholder-gray-400 py-1.5"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="text-white bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed w-9 h-9 flex items-center justify-center rounded-full transition-all shadow-md active:scale-95 disabled:active:scale-100"
                >
                  <Send size={15} className="ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleChat}
        className="w-14 h-14 bg-gradient-to-tr from-blue-700 to-blue-500 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all z-50 border-[3px] border-white/90 relative"
        aria-label="Buka Chat AI"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={26} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle size={26} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Unread pulse indicator when closed */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500 border-2 border-white"></span>
          </span>
        )}
      </motion.button>
    </div>
  );
}
