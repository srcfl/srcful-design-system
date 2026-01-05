"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Square, Sparkles, User, Zap } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface AIChatProps {
  messages?: ChatMessage[];
  onSendMessage?: (message: string) => void;
  isLoading?: boolean;
  placeholder?: string;
  suggestedPrompts?: Array<{ icon?: React.ReactNode; text: string }>;
  className?: string;
}

const DEFAULT_SUGGESTED_PROMPTS = [
  { icon: <Zap className="w-4 h-4" />, text: "What's my solar production?" },
  { icon: <Sparkles className="w-4 h-4" />, text: "How can I optimize energy?" },
];

export function AIChat({
  messages = [],
  onSendMessage,
  isLoading = false,
  placeholder = "Ask about your energy system...",
  suggestedPrompts = DEFAULT_SUGGESTED_PROMPTS,
  className,
}: AIChatProps) {
  const [query, setQuery] = useState("");
  const [isScrolledUp, setIsScrolledUp] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Track scroll position
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      setIsScrolledUp(scrollTop < scrollHeight - clientHeight - 50);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (!isScrolledUp) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isScrolledUp]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
  }, [query]);

  const handleSend = () => {
    if (!query.trim() || isLoading) return;
    onSendMessage?.(query.trim());
    setQuery("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={cn("flex flex-col bg-white dark:bg-[#141414] rounded-lg border border-sourceful-gray-200 dark:border-[#252525] overflow-hidden", className)}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between px-4 py-3 border-b border-sourceful-gray-200 dark:border-[#252525]"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-sm font-medium text-sourceful-gray-900 dark:text-white">
            AI Assistant
          </span>
        </div>
      </motion.div>

      {/* Messages Area */}
      <div ref={scrollContainerRef} className="flex-1 overflow-y-auto relative">
        {/* Scroll fade gradient */}
        <AnimatePresence>
          {isScrolledUp && messages.length > 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white dark:from-[#141414] to-transparent pointer-events-none z-10"
            />
          )}
        </AnimatePresence>

        <div className="p-4 space-y-4">
          {/* Empty state */}
          <AnimatePresence>
            {messages.length === 0 && !isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center py-8 text-center"
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center mb-4 shadow-lg shadow-primary/20"
                >
                  <Sparkles className="w-8 h-8 text-primary-foreground" />
                </motion.div>

                <h3 className="text-lg font-semibold text-sourceful-gray-900 dark:text-white mb-2">
                  Sourceful AI Assistant
                </h3>
                <p className="text-sm text-sourceful-gray-500 dark:text-sourceful-gray-400 max-w-xs mb-6">
                  Ask me anything about your energy system. I can help you monitor, analyze, and control your devices.
                </p>

                {/* Suggested prompts */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {suggestedPrompts.map((prompt, i) => (
                    <motion.button
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setQuery(prompt.text)}
                      className={cn(
                        "flex items-center gap-2 px-3 py-2 rounded-xl",
                        "bg-sourceful-gray-100 dark:bg-[#1a1a1a]",
                        "text-sm text-sourceful-gray-700 dark:text-sourceful-gray-300",
                        "hover:bg-sourceful-gray-200 dark:hover:bg-[#252525]",
                        "border border-sourceful-gray-200 dark:border-[#252525]",
                        "transition-colors duration-200"
                      )}
                    >
                      {prompt.icon}
                      {prompt.text}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Chat messages */}
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn("flex gap-3", message.role === "user" && "flex-row-reverse")}
            >
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                  message.role === "user"
                    ? "bg-primary"
                    : "bg-sourceful-gray-100 dark:bg-[#252525]"
                )}
              >
                {message.role === "user" ? (
                  <User className="w-4 h-4 text-primary-foreground" />
                ) : (
                  <Sparkles className="w-4 h-4 text-primary" />
                )}
              </div>

              <div
                className={cn(
                  "max-w-[80%] rounded-2xl px-4 py-3 border",
                  message.role === "user"
                    ? "bg-primary text-primary-foreground border-primary rounded-tr-sm"
                    : "bg-sourceful-gray-100 dark:bg-[#1a1a1a] border-sourceful-gray-200 dark:border-[#252525] rounded-tl-sm"
                )}
              >
                {message.role === "assistant" ? (
                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {message.content}
                    </ReactMarkdown>
                  </div>
                ) : (
                  <p className="text-sm">{message.content}</p>
                )}
              </div>
            </motion.div>
          ))}

          {/* AI Thinking Indicator */}
          <AnimatePresence>
            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-sourceful-gray-100 dark:bg-[#252525] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-sourceful-gray-100 dark:bg-[#1a1a1a] rounded-2xl rounded-tl-sm px-4 py-3 border border-sourceful-gray-200 dark:border-[#252525]">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-sourceful-gray-500 italic">Thinking</span>
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          animate={{
                            y: [0, -4, 0],
                            opacity: [0.4, 1, 0.4],
                          }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: i * 0.15,
                          }}
                          className="w-1.5 h-1.5 rounded-full bg-primary"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div ref={chatEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t border-sourceful-gray-200 dark:border-[#252525] p-4">
        <div className="flex items-start gap-2">
          <div className="flex-1 relative">
            <textarea
              ref={textareaRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              disabled={isLoading}
              rows={1}
              className={cn(
                "w-full resize-none rounded-xl px-4 py-3 scrollbar-none",
                "bg-sourceful-gray-50 dark:bg-[#1a1a1a]",
                "border border-sourceful-gray-200 dark:border-[#252525]",
                "text-sm text-sourceful-gray-900 dark:text-white",
                "placeholder:text-sourceful-gray-400",
                "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
                "disabled:opacity-50 disabled:cursor-not-allowed"
              )}
            />
          </div>

          <button
            onClick={isLoading ? undefined : handleSend}
            disabled={!query.trim() && !isLoading}
            className={cn(
              "h-[46px] w-[46px] rounded-xl flex items-center justify-center transition-colors flex-shrink-0",
              isLoading
                ? "bg-red-500 hover:bg-red-600 text-white"
                : query.trim()
                  ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                  : "bg-sourceful-gray-100 dark:bg-[#252525] text-sourceful-gray-400 cursor-not-allowed"
            )}
          >
            {isLoading ? (
              <Square className="w-4 h-4" />
            ) : (
              <Send className="w-4 h-4" />
            )}
          </button>
        </div>

        <p className="text-xs text-sourceful-gray-400 mt-2 text-center">
          Press Enter to send, Shift+Enter for new line
        </p>
      </div>
    </div>
  );
}
