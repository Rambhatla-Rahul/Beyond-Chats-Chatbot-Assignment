import React, { useEffect, useState } from 'react';

const UserMessage = ({ message, user, profile_img,onAddToComposer}) => {
  const [typedMessage, setTypedMessage] = useState('');
  const [messageGenerated, setMessageGenerated] = useState(false);

  useEffect(() => {
    setMessageGenerated(false);
    let index = 0;
    setTypedMessage(`${message.charAt(0)}`);
    const interval = setInterval(() => {
      if (index < message.length) {
        setTypedMessage(prev => prev + message.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 10); 
    setMessageGenerated(true);
    return () => clearInterval(interval);
  }, [message,messageGenerated]);

  return (
    <>
      {
        user === "You" ? (
          <div className='flex flex-col items-center justify-start px-4 text-left text-gray-600 text-xs font-semibold'>
            <div className="text-blue-900 text-xs rounded-lg p-3 max-w-max leading-tight relative">
              <div className='pb-2'>
                {user}
              </div>
              <div dangerouslySetInnerHTML={{ __html: message }} />
              <img
                src={profile_img}
                alt="Avatar of a woman with short hair"
                className="absolute -left-6 top-[20px] -translate-y-1/2 rounded-full w-5 h-5"
              />
            </div>
          </div>
        ) : (
          <div className='flex flex-col items-center justify-start px-4 text-left text-gray-600 text-xs font-semibold'>
            <div className="text-blue-900 flex flex-col text-xs rounded-lg p-3 max-w-max leading-tight relative transition-all duration-500 ease-in-out">
              <div className='pb-2'>
                {user}
              </div>
              <div className='finn-message-container text-black p-2 rounded-lg' dangerouslySetInnerHTML={{ __html: typedMessage }} />
              
              <img
                src={profile_img}
                alt="Finn AI Copilot"
                className="absolute -left-6 top-[20px] -translate-y-1/2 rounded-full w-5 h-5"
              />
              
            </div>
            {
              messageGenerated && (
                <button className='flex bg-white p-2 rounded-xl shadow-xl hover:cursor-pointer hover:bg-gray-100 hover:-translate-y-0.5 transition-all duration-300 ease-in-out mt-2'
                onClick={() => onAddToComposer?.(message)}
                >
                  <span>Add to Composer</span>
                  <div className='ml-2 border-l-2 border-gray-300 px-2'>
                    <svg className={`rotate-90 w-4 h-4`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </button>
              )
            }
          </div>
        )
      }
    </>
  );
};

export default UserMessage;