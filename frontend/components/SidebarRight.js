"use client"

import { useState } from "react";
import UserMessage from "./UserMessage";

export default function SidebarRight() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleSendMessage = () => {
    if (inputText.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { user: "You", message: inputText, status: "Seen", time: "Just now", profile_img: "https://storage.googleapis.com/a1aa/image/4d251dc8-afc1-4332-8e21-42fb0ad7ace0.jpg" },
        { user: "Finn", message: "Processing your message...", status: "Seen", time: "Just now", profile_img: "https://storage.googleapis.com/a1aa/image/d49222ce-e8d4-4185-0029-5d2a31711394.jpg" },

      ]);
      setInputText("");
      processMessage();
    }
  };
  const processMessage = ()=>{
    setTimeout(() => {
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages];
        updatedMessages[updatedMessages.length - 1] = {
          ...updatedMessages[updatedMessages.length - 1],
          message: "We understand your query and are working on it.",
        };
        return updatedMessages;
      });
    }, 2000);
  }

  return (
    <div className="flex flex-col w-80 border-l border-gray-300 bg-gray-50">
      <header className="flex items-center gap-2 px-4 py-3 border-b border-gray-300 text-xs font-semibold text-gray-700">
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
          <main className="flex-1 flex flex-col items-start justify-start px-4 text-center text-gray-600 text-xs font-semibold pl-6">
            <div className="flex flex-col items-start justify-start px-4 text-left text-gray-600 text-xs font-semibold">
              {messages.map((message, index) => (
                <>
                <UserMessage key={index} user={message.user} message={message.message} status={message.status} time={message.time} profile_img={message.profile_img} />
                </>
              ))}
            </div>
          </main>
        )}
      
      <footer className="p-3 bg-gray-50">
        <button className="text-gray-700 text-[11px] font-semibold rounded px-2 py-1 mb-2 w-full text-left hover:cursor-pointer hover:text-blue-600" onClick={() => {
          setInputText("How do I get a refund?")
          handleSendMessage();
        }
          }>
            <span className="font-bold">Suggested</span> ✨ How do I get a refund?
        </button>
        <div className="flex items-center gap-2 bg-white rounded border border-gray-300 px-3 py-2 text-xs text-gray-500">
          <input
            className="flex-1 outline-none"
            placeholder="Ask a question..."
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button onClick={handleSendMessage}>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </footer>
    </div>
  );
}