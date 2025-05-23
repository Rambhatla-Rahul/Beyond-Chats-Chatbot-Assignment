export default function ChatMain() {
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
  );
}
