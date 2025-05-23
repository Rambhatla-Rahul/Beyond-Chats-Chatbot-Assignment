export default function SidebarLeft() {
  const dummyData = [
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
            ];
  return (
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
            {dummyData.map((item) => (
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
  );
}