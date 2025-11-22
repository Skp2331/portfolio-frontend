"use client";

import { useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm Som's AI persona 🤖 Ask me anything about his skills, projects, or journey.",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input.trim() }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/chat`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: newMessages }),
        }
      );

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply?.content || "I didn't understand that 😅",
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Error connecting to AI backend 😕",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">

      {open ? (
        <div className="w-80 h-96 bg-slate-900/90 backdrop-blur-xl border border-slate-700 rounded-2xl p-4 flex flex-col shadow-[0_0_20px_rgba(56,189,248,0.25)] animate-slideUp">

          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-sky-500 flex items-center justify-center text-xs">
                🤖
              </div>
              <div>
                <p className="text-sm font-semibold">Som&apos;s AI Assistant</p>
                <p className="text-[10px] text-slate-400">
                  Ask about skills, projects, or career.
                </p>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-slate-400 text-xs hover:text-slate-200"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto space-y-2 p-1 text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`max-w-[80%] px-2 py-1.5 rounded-lg ${
                  m.role === "user"
                    ? "ml-auto bg-sky-500 text-white"
                    : "mr-auto bg-slate-800 text-slate-200"
                }`}
              >
                {m.content}
              </div>
            ))}

            {loading && (
              <p className="text-slate-400 text-[10px]">AI is typing...</p>
            )}
          </div>

          {/* Input Box */}
          <div className="flex gap-2 pt-2">
            <input
              className="flex-1 text-xs bg-slate-800 px-2 py-1 rounded-lg outline-none border border-slate-600"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask something..."
            />

            <button
              onClick={sendMessage}
              className="px-3 py-1 bg-sky-500 text-xs font-medium rounded-lg"
            >
              Send
            </button>
          </div>

        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="px-5 py-3 bg-sky-600 hover:bg-sky-500 text-white text-sm rounded-full shadow-xl shadow-sky-700/20 transition"
        >
          🤖 Chat with AI
        </button>
      )}

    </div>
  );
}
