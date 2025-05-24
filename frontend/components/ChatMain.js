"use client"
import { useEffect, useState } from "react";
import Messages from "./Messages";

export default function ChatMain({composerText, setComposerText}) {
  const [inputText, setInputText] = useState("");
  const [focused, setFocused] = useState(false);
  const [messages, setMessages] = useState([
  {
    user: "Luis Easton",
    message: "I bought a product from your store in November as a Christmas gift for a member of my family...",
    status: "seen",
    time: "1min",
  },
  {
    user: "You",
    message: "Let me just look into this for you, Luis.",
    status: "seen",
    time: "1min",
    profile_img: "https://storage.googleapis.com/a1aa/image/4d251dc8-afc1-4332-8e21-42fb0ad7ace0.jpg",
  },
]);

  const handleSendMessage = () => {
  if (inputText.trim() === "") return;
  setMessages((prevMessages) => [
    ...prevMessages,
    {
      user: "You",
      message: inputText,
      status: "seen",
      time: "now",
      profile_img: "https://storage.googleapis.com/a1aa/image/4d251dc8-afc1-4332-8e21-42fb0ad7ace0.jpg",
    },
  ]);
  setInputText("");
};

  return (
    <div className="flex flex-col flex-1 border-r border-gray-200 bg-white">
      <header className="flex items-center justify-between px-6 py-3 border-b border-gray-200 font-semibold text-sm">
        <span>Luis Easton</span>
        <div className="flex items-center gap-3">
          <button className="p-1 rounded-full hover:bg-gray-100">
            <i className="fas fa-ellipsis-h text-gray-600"></i>
          </button>
          <button className="p-1 rounded-full hover:bg-gray-100">
            <i className="fas fa-moon text-gray-600"></i>
          </button>
          <button className="flex items-center gap-1 bg-black text-white text-xs font-semibold rounded px-3 py-1">
            <i className="fas fa-times"></i>
            Close
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-6 bg-white">
        <div className="max-w-xl mx-auto space-y-4">
          {messages.map((obj,index)=>{
            return (
              <Messages key={index} user={obj?.user} message={obj?.message } profile_img={obj?.profile_img} onAddToComposer ={()=>setInputText(obj?.message)}/>
            )
          })}
        </div>
      </main>

      <footer
        className={`border-t border-gray-200 bg-white max-w-xl mx-auto w-full overflow-hidden transition-all duration-300 ${
          focused ? "h-70" : "h-24 p-3"
        }`}
      >
        <div className="bg-gray-100 rounded-md p-2 text-xs text-gray-600 font-semibold flex items-center justify-between">
          <div className="flex items-center gap-1">
            <i className="fas fa-comment-alt"></i>
            Chat
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="text-gray-400 text-xs">Use ⌘K for shortcuts</div>
        </div>

        <div className="flex items-center gap-3 mt-2 text-lg">
          <textarea
            className={`flex-1 items-start justify-start resize-none outline-none bg-gray-200 rounded p-2 text-sm ${focused ? "h-56" : "h-8"} transition-all duration-300`}
            type="text"
            value={(inputText || composerText) ?? ""}
            onChange={(e) => setInputText(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
          <button className={`text-xs font-normal ${inputText.length === 0 ? 'text-gray-400':'text-blue-500 text-md font-bold'} hover:cursor-pointer hover:text-blue-500`}
            onClick={handleSendMessage}
          >
            Send
            <svg className={`inline w-3 h-3`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </footer>
    </div>
  );
}
