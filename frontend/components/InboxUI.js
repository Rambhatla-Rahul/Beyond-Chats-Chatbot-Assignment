import React from "react";

export default function InboxUI() {
  return (
    <div className="flex h-screen max-h-screen overflow-hidden select-none bg-white font-sans text-gray-900">
      {/* Left Sidebar */}
      <div className="flex flex-col w-72 border-r border-gray-200 bg-white">
        <header className="flex items-center justify-between px-4 py-3 border-b border-gray-200 font-semibold text-sm">
          <span>Your inbox</span>
          <span>Luis Easton</span>
        </header>
        <div className="flex items-center justify-between px-4 py-2 text-xs text-gray-700 font-medium border-b border-gray-200">
          <button className="flex items-center gap-1">
            5 Open
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="flex items-center gap-1">
            Waiting longest
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto scrollbar-thin bg-white">
          <ul className="divide-y divide-gray-100">
            {[
              {
                id: 1,
                initials: "L",
                bgColor: "bg-blue-600",
                name: "Luis · Github",
                msg: "Hey! I have a questio...",
                time: "45m",
                active: true,
              },
              {
                id: 2,
                initials: "I",
                bgColor: "bg-red-600",
                name: "Ivan · Nike",
                msg: "Hi there, I have a qu...",
                time: "3 min",
                badge: true,
              },
              {
                id: 3,
                initials: "L",
                bgColor: "bg-blue-600",
                name: "Lead from New York",
                msg: "Good morning, let me...",
                dot: true,
              },
              {
                id: 4,
                initials: "KZ",
                bgColor: "bg-black",
                name: "Booking API problems",
                msg: "Bug report",
                subText: "Luis · Small Crafts",
                time: "45m",
              },
              {
                id: 5,
                initials: "↺",
                bgColor: "bg-gray-300 text-gray-600",
                name: "Miracle · Exemplary Bank",
                msg: "Hey there, I'm here to...",
                time: "45m",
              },
            ].map((item) => (
              <li
                key={item.id}
                className={`flex items-start gap-3 px-3 py-2 cursor-pointer ${
                  item.active ? "bg-blue-100 text-blue-900" : ""
                }`}
              >
                <div
                  className={`flex-shrink-0 w-6 h-6 rounded-full text-white flex items-center justify-center text-xs font-semibold ${item.bgColor}`}
                >
                  {item.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm truncate">{item.name}</div>
                  <div className="text-xs truncate">
                    {item.msg}
                    {item.subText && (
                      <>
                        <br />
                        <span className="text-gray-500 font-normal">{item.subText}</span>
                      </>
                    )}
                  </div>
                </div>
                <time className="text-xs text-gray-700 flex-shrink-0">
                  {item.badge ? (
                    <span className="bg-yellow-300 rounded-full px-1.5 py-0.5">{item.time}</span>
                  ) : item.dot ? (
                    <img
                      src="https://storage.googleapis.com/a1aa/image/97d977eb-0f54-4160-5c03-b2f5e40b6bbb.jpg"
                      alt="Black dot icon"
                      className="w-3 h-3"
                    />
                  ) : (
                    item.time
                  )}
                </time>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center justify-between px-3 py-2 border-t border-gray-200 text-gray-500 text-xs">
          <button className="flex items-center gap-2">
            <i className="fas fa-pause"></i>
            <span>Pause</span>
          </button>
          <button className="flex items-center gap-2">
            <i className="fas fa-list"></i>
            <span>List</span>
          </button>
        </div>
      </div>

      {/* Middle Chat Section */}
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
            <div className="bg-gray-200 text-gray-900 text-xs rounded-lg p-4 leading-tight">
              I bought a product from your store in November as a Christmas gift for a member of my family. However, it turns out they have something very similar already. I was hoping you'd be able to refund me, as it is un-opened.
              <div className="flex items-center gap-1 mt-2 text-gray-600 text-[10px] font-medium">
                <div className="flex items-center justify-center w-4 h-4 rounded-full bg-blue-600 text-white text-xs font-semibold">L</div>
                <span>1min</span>
              </div>
            </div>
            <div className="bg-blue-200 text-blue-900 text-xs rounded-lg p-3 max-w-max ml-auto leading-tight relative">
              Let me just look into this for you, Luis.
              <div className="flex justify-end text-gray-600 text-[10px] font-medium mt-1">
                <span>Seen · 1min</span>
              </div>
              <img
                src="https://storage.googleapis.com/a1aa/image/4d251dc8-afc1-4332-8e21-42fb0ad7ace0.jpg"
                alt="Avatar of a woman with short hair"
                className="absolute -right-6 top-1/2 -translate-y-1/2 rounded-full w-5 h-5"
              />
            </div>
            <div className="flex justify-center mt-20">
              <img
                src="https://storage.googleapis.com/a1aa/image/24d0ab31-c697-4b74-578a-efd905307c6f.jpg"
                alt="Gray hand cursor icon with index finger pointing up"
                className="w-10 h-10"
              />
            </div>
          </div>
        </main>
        <footer className="border-t border-gray-200 p-3 bg-white max-w-xl mx-auto w-full">
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
          <div className="flex items-center gap-3 mt-2 text-gray-400 text-lg">
            <button><i className="fas fa-bolt"></i></button>
            <button><i className="fas fa-bookmark"></i></button>
            <button><i className="fas fa-smile"></i></button>
            <div className="flex-1"></div>
            <button className="text-xs text-gray-400 font-normal">
              Send
              <svg className="inline w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </footer>
      </div>

      {/* Right Sidebar */}
      <div className="flex flex-col w-80 border-l border-gray-300 bg-gray-50">
        <header className="flex items-center gap-2 px-4 py-3 border-b border-gray-300 text-xs font-semibold text-gray-700">
          <img src="https://storage.googleapis.com/a1aa/image/d49222ce-e8d4-4185-0029-5d2a31711394.jpg" alt="Robot icon" className="w-4 h-4" />
          <span className="text-indigo-700">AI Copilot</span>
          <span>Details</span>
          <button className="ml-auto p-1 rounded hover:bg-gray-200">
            <i className="fas fa-columns text-gray-600"></i>
          </button>
        </header>
        <main className="flex-1 flex flex-col items-center justify-center px-4 text-center text-gray-600 text-xs font-semibold">
          <img src="https://storage.googleapis.com/a1aa/image/07933bdc-eff2-49dc-7008-d4b0291c38a5.jpg" alt="Black robot icon" className="w-6 h-6 mb-2" />
          <p>Hi, I'm Fin AI Copilot</p>
          <p className="text-gray-500 font-normal text-[11px] mt-1">Ask me anything about this conversation.</p>
        </main>
        <footer className="p-3 bg-gray-50">
          <button className="bg-gray-200 text-gray-700 text-[11px] font-semibold rounded px-2 py-1 mb-2 w-full text-left">
            <span className="font-bold">Suggested</span> ✨ How do I get a refund?
          </button>
          <div className="flex items-center gap-2 bg-white rounded border border-gray-300 px-3 py-2 text-xs text-gray-500">
            <input className="flex-1 outline-none" placeholder="Ask a question..." type="text" />
            <button>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

// Include this in your index.html <head>:
// <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet" />
// <script src="https://cdn.tailwindcss.com"></script>
// And add custom scrollbar styles to a global CSS file or inside a style tag
