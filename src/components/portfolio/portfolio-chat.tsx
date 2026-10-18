import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  ArrowUpRight,
  MessageCircle,
  Send,
  Sparkles,
  Trash2,
  X,
} from "lucide-react";

type ChatMessage = {
  id: number;
  role: "assistant" | "user";
  content: string;
  isError?: boolean;
};

type ConnectionStatus = "idle" | "connecting" | "online" | "offline";

const CHAT_API_URL = "https://profoliochatbot.vercel.app/chat";
const REQUEST_TIMEOUT_MS = 30_000;

const WELCOME_MESSAGE: ChatMessage = {
  id: 1,
  role: "assistant",
  content:
    "Hi! I’m Thawfeek’s portfolio assistant. Ask me about his experience, skills, projects, or availability.",
};

const SUGGESTED_QUESTIONS = [
  "Tell me about yourself",
  "What are your technical skills?",
  "How many years of experience do you have?",
  "How can I contact you?",
];

export function PortfolioChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [isTyping, setIsTyping] = useState(false);
  const [connection, setConnection] = useState<ConnectionStatus>("idle");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(2);
  const requestController = useRef<AbortController | null>(null);

  useEffect(() => {
    if (isOpen) {
      window.setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    const closeOnEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      requestController.current?.abort();
    };
  }, []);

  const createMessage = (
    role: ChatMessage["role"],
    content: string,
    options: Pick<ChatMessage, "isError"> = {},
  ): ChatMessage => ({
    id: nextId.current++,
    role,
    content,
    ...options,
  });

  const sendMessage = async (text: string) => {
    const trimmedMessage = text.trim();
    if (!trimmedMessage || isTyping) return;

    setMessages((current) => [
      ...current,
      createMessage("user", trimmedMessage),
    ]);
    setInput("");
    setIsTyping(true);
    setConnection("connecting");

    const controller = new AbortController();
    requestController.current = controller;
    const timeoutId = window.setTimeout(
      () => controller.abort(),
      REQUEST_TIMEOUT_MS,
    );

    try {
      const response = await axios.post<{ answer?: unknown }>(
        CHAT_API_URL,
        { message: trimmedMessage },
        {
          headers: { "Content-Type": "application/json" },
          signal: controller.signal,
        },
      );

      const answer: unknown = response.data.answer;
      if (typeof answer !== "string") {
        throw new Error("The server returned an invalid response");
      }

      setMessages((current) => [
        ...current,
        createMessage("assistant", answer),
      ]);
      setConnection("online");
    } catch (error: unknown) {
      // Clearing the chat or unmounting aborts the old request. In that case,
      // do not append an error message to a fresh conversation.
      if (requestController.current !== controller) return;

      const isTimeout =
        axios.isCancel(error) ||
        (axios.isAxiosError(error) && error.code === "ECONNABORTED");

      setMessages((current) => [
        ...current,
        createMessage(
          "assistant",
          isTimeout
            ? "The assistant took too long to respond. Please try again—the first request can be slower while the model starts."
            : "I couldn’t reach the portfolio assistant. Please check your connection and try again.",
          { isError: true },
        ),
      ]);
      setConnection("offline");
    } finally {
      window.clearTimeout(timeoutId);
      if (requestController.current === controller) {
        requestController.current = null;
        setIsTyping(false);
      }
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage(input);
    }
  };

  const clearChat = () => {
    const activeController = requestController.current;
    requestController.current = null;
    activeController?.abort();
    setMessages([WELCOME_MESSAGE]);
    setInput("");
    setIsTyping(false);
    setConnection("idle");
    window.setTimeout(() => inputRef.current?.focus(), 0);
  };

  return (
    <>
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 z-40 inline-flex h-14 items-center gap-2 rounded-full border border-white/15 bg-neutral-950 px-5 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(0,0,0,0.38)] transition duration-300 hover:-translate-y-1 hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:bottom-7 sm:right-7"
          aria-label="Open portfolio assistant"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          Ask Thawfeek
        </button>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/65 p-0 backdrop-blur-sm sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="portfolio-chat-title"
            className="flex h-[100dvh] w-full flex-col overflow-hidden bg-[#f7f7f1] text-[#182019] shadow-2xl sm:h-[min(720px,calc(100dvh-48px))] sm:max-w-[900px] sm:rounded-[24px] sm:border sm:border-white/70"
          >
            <header className="flex items-start justify-between border-b border-[#dfe2d8] px-5 py-5 sm:px-8 sm:py-6">
              <div>
                <h2
                  id="portfolio-chat-title"
                  className="text-2xl font-bold tracking-[-0.04em] sm:text-3xl"
                >
                  Ask about my work
                </h2>
                <div className="mt-1 flex items-center gap-2 text-xs text-[#657068] sm:text-sm">
                  <span>Responses are generated from this portfolio’s content.</span>
                  <span
                    className={`hidden items-center gap-1.5 sm:inline-flex ${
                      connection === "offline" ? "text-red-600" : ""
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        connection === "connecting"
                          ? "animate-pulse bg-amber-500"
                          : connection === "offline"
                            ? "bg-red-500"
                            : connection === "online"
                              ? "bg-emerald-500"
                              : "bg-[#aeb5ae]"
                      }`}
                    />
                    {connection === "connecting"
                      ? "Connecting"
                      : connection === "offline"
                        ? "Offline"
                        : connection === "online"
                          ? "Online"
                          : "Ready"}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={clearChat}
                  disabled={messages.length === 1 && !input}
                  className="hidden h-10 items-center gap-2 rounded-xl border border-[#dfe2d8] px-3 text-sm font-medium text-[#687169] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40 sm:inline-flex"
                >
                  <Trash2 className="h-4 w-4" aria-hidden="true" />
                  Clear
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full text-[#4c554e] transition hover:bg-[#e8eae2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8ea552]"
                  aria-label="Close portfolio assistant"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </header>

            <div
              className="flex-1 overflow-y-auto px-5 py-6 sm:px-8"
              aria-live="polite"
            >
              <div className="space-y-5">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start gap-3 ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {message.role === "assistant" && (
                      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#c9ff68] text-[#1e2a14]">
                        <Sparkles className="h-[18px] w-[18px]" aria-hidden="true" />
                      </div>
                    )}
                    <div
                      className={`max-w-[82%] rounded-[18px] px-4 py-3 text-sm leading-6 sm:max-w-[70%] ${
                        message.role === "user"
                          ? "rounded-br-md bg-[#1c241e] text-white"
                          : message.isError
                            ? "rounded-tl-md border border-red-200 bg-red-50 text-red-700"
                            : "rounded-tl-md bg-[#e9ece3] text-[#2e3730]"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-start gap-3">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#c9ff68] text-[#1e2a14]">
                      <Sparkles className="h-[18px] w-[18px]" aria-hidden="true" />
                    </div>
                    <div className="flex h-11 items-center gap-1 rounded-[18px] rounded-tl-md bg-[#e9ece3] px-4">
                      {[0, 1, 2].map((dot) => (
                        <span
                          key={dot}
                          className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#788078]"
                          style={{ animationDelay: `${dot * 120}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            <div className="border-t border-[#dfe2d8] bg-[#fafaf6] px-5 pb-4 pt-4 sm:px-8 sm:pb-5">
              <div className="mb-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {SUGGESTED_QUESTIONS.map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => sendMessage(question)}
                    disabled={isTyping}
                    className="group flex min-h-10 items-center justify-between gap-3 rounded-xl border border-[#d9ddd4] px-3 py-2 text-left text-xs font-semibold text-[#4a554c] transition hover:border-[#a8ba7a] hover:bg-white disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm"
                  >
                    <span>{question}</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-[#748b47] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </button>
                ))}
              </div>

              <form
                onSubmit={handleSubmit}
                className="flex min-h-[60px] items-end gap-2 rounded-[20px] border border-[#d6dad2] bg-white p-2 pl-4 shadow-[0_12px_35px_rgba(36,44,38,0.08)] focus-within:border-[#a5b773] focus-within:ring-2 focus-within:ring-[#c9ff68]/40"
              >
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={handleKeyDown}
                  rows={1}
                  maxLength={500}
                  placeholder="Ask about skills, experience, or projects..."
                  aria-label="Message"
                  className="max-h-28 min-h-10 flex-1 resize-none bg-transparent py-2 text-sm leading-6 text-[#202820] outline-none placeholder:text-[#98a099]"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-[14px] bg-[#1f2821] text-white transition hover:bg-[#3d4b40] disabled:cursor-not-allowed disabled:bg-[#dfe3dc] disabled:text-[#9ca39d]"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                </button>
              </form>
              <p className="mt-2 text-center text-[10px] text-[#858d86]">
                Press Enter to send · Shift + Enter for a new line
              </p>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
