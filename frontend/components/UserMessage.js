import React from 'react'

const UserMessage = ({message,user,profile_img,time,status}) => {
  return (
    <>
      {
        user === "You" ? (
          <div className=" text-blue-900 text-xs rounded-lg p-3 max-w-max leading-tight relative">
                <div className='pb-2'>
                  {user}
                </div>
                {message}
                <div className="flex justify-end text-gray-600 text-[10px] font-medium mt-1">
                  <span>{status} · {time}</span>
                </div>
                <img
                  src={profile_img}
                  alt="Avatar of a woman with short hair"
                  className="absolute -left-6 top-[20px] -translate-y-1/2 rounded-full w-5 h-5"
                />
          </div>
         ):(
            <div className=" text-blue-900 text-xs rounded-lg p-3 max-w-max leading-tight relative">
                <div className='pb-2'>
                  {user}
                </div>
                <div className='finn-message-container text-black p-2 rounded-lg'>
                  {message}
                </div>
                
                <div className="flex justify-end text-gray-600 text-[10px] font-medium mt-1">
                  <span>{status} · {time}</span>
                </div>
                <img
                  src={profile_img}
                  alt="Avatar of a woman with short hair"
                  className="absolute -left-6 top-[20px] -translate-y-1/2 rounded-full w-5 h-5"
                />
            </div>
      )
      }
  </>
  )
}

export default UserMessage
