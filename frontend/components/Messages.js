import React from 'react'

const Messages = ({ message, user, profile_img}) => {
  return (
    <>
      {
        user === "You" ? (
          <div className="bg-blue-200 text-blue-900 text-xs rounded-lg p-3 max-w-max ml-auto leading-tight relative">
            {message}
            <div className="flex justify-end text-gray-600 text-[10px] font-medium mt-1">
              <span>Seen · 1min</span>
            </div>
            <img
              src={profile_img}
              alt="Avatar"
              className="absolute -right-6 top-1/2 -translate-y-1/2 rounded-full w-5 h-5"
            />
          </div>
        ) : (
          <div className="bg-gray-200 text-gray-900 text-xs rounded-lg p-4 leading-tight relative">
            {message}
            <div className="flex items-center gap-1 mt-2 text-gray-600 text-[10px] font-medium">
              <div className="absolute top-1/3 -left-6 flex items-center justify-center w-4 h-4 rounded-full bg-blue-600 text-white text-xs font-semibold">L</div>
              
            </div>
            <span>1min</span>
          </div>
        )
      }
    </>
  )
}

export default Messages
