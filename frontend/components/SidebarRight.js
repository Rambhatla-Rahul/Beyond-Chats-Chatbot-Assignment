"use client"

import { useState, useRef, useEffect } from "react";
import UserMessage from "./UserMessage";

export default function SidebarRight({setComposerText}) {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const latestMessageRef = useRef(null); // 🆕 REF for last message

  const sampleRefundMessage = [
    "We understand that sometimes a purchase may not meet you expectations, and you may need to request a refund.",
    "To assist you with your refund request, please provide your order ID and proof of purchase.",
    "Please note:<br/>We can only refund orders placed within the last 60 days, and your item must meet our requirements for the codition to be returned. Please check when you placed your order before proceeding.",
    "Once I've checked these details, if everything looks OK, I will send a return QR code which you can use to post the item back to us. your refund will automatically issued once you put it in the post.",
  ];

  const handleSendMessage = () => {
    if (inputText.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          user: "You",
          message: inputText,
          status: "Seen",
          time: "Just now",
          profile_img: "https://storage.googleapis.com/a1aa/image/4d251dc8-afc1-4332-8e21-42fb0ad7ace0.jpg"
        },
        {
          user: "Finn",
          message: "Processing your message...",
          status: "Seen",
          time: "Just now",
          profile_img: "https://storage.googleapis.com/a1aa/image/d49222ce-e8d4-4185-0029-5d2a31711394.jpg"
        },
      ]);
      setInputText("");
      processMessage();
    }
  };

  const processMessage = () => {
    setTimeout(() => {
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages];
        const message = sampleRefundMessage.map((para) => para.trim()).join('<br><br>');
        updatedMessages[updatedMessages.length - 1] = {
          ...updatedMessages[updatedMessages.length - 1],
          message,
        };
        return updatedMessages;
      });
    }, 2000);
  };

  useEffect(() => {
    if (latestMessageRef.current) {
      latestMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]); // 🆕 Scroll when messages change

  return (
    <div className="right-footer flex flex-col w-[400px] border-l border-gray-300 bg-gray-50">
      <header className="flex items-center gap-2 px-4 py-3 text-xs font-semibold text-gray-700">
        <img src="https://storage.googleapis.com/a1aa/image/d49222ce-e8d4-4185-0029-5d2a31711394.jpg" alt="Robot icon" className="w-4 h-4" />
        <span className="text-indigo-700">AI Copilot</span>
        <span>Details</span>
        <button className="ml-auto p-1 rounded hover:bg-gray-200">
          <i className="fas fa-columns text-gray-600"></i>
        </button>
      </header>

      {messages.length === 0 ? (
        <main className="flex-1 flex flex-col items-center justify-center px-4 text-center text-gray-600 text-xs font-semibold">
          <div className="flex flex-col items-center justify-center px-4 text-center text-gray-600 text-xs font-semibold">
            <img src="https://storage.googleapis.com/a1aa/image/07933bdc-eff2-49dc-7008-d4b0291c38a5.jpg" alt="Black robot icon" className="w-6 h-6 mb-2" />
            <p>Hi, I'm Fin AI Copilot</p>
            <p className="text-gray-500 font-normal text-[11px] mt-1">Ask me anything about this conversation.</p>
          </div>
        </main>
      ) : (
        <main className="flex-1 flex flex-col items-start justify-start px-4 text-center text-gray-600 text-xs font-semibold pl-6 overflow-y-scroll">
          <div className="flex flex-col items-start justify-start px-4 text-left text-gray-600 text-xs font-semibold">
            {messages.map((message, index) => {
              const isLast = index === messages.length - 1;
              return (
                <div key={index} ref={isLast ? latestMessageRef : null}>
                  <UserMessage
                    user={message.user}
                    message={message.message}
                    profile_img={message.profile_img}
                    dangerouslySetInnerHTML={{ __html: message.message }}
                    scrollIntoView={isLast}
                    onAddToComposer={(htmlText) => {
                      const plainText = htmlText.replace(/<[^>]*>?/gm, '');
                      setComposerText(plainText);
                    }}
                  />
                </div>
              );
            })}
          </div>
        </main>
      )}

      <footer className="p-3">
        <button
          className="text-gray-700 text-[11px] bg-gray-200 font-semibold rounded px-2 py-1 mb-2 text-left hover:cursor-pointer hover:text-blue-600 shadow-xl"
          onClick={() => {
            setInputText("How do I get a refund?");
            handleSendMessage();
          }}
        >
          <span className="font-bold">Suggested</span> ✨ How do I get a refund?
        </button>
        <div className="flex items-center gap-2 bg-white rounded-xl border border-gray-300 px-3 py-2 text-xs text-gray-500">
          <input
            className="flex-1 outline-none"
            placeholder="Ask a question..."
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSendMessage();
              }
            }}
          />
          <button onClick={handleSendMessage} className='rotate-270'>
            <svg className={`w-4 h-4 ${inputText ? "text-blue-600" : "text-gray-400"}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </footer>
    </div>
  );
}
