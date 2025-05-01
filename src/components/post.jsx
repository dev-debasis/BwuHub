"use client"
import React, { useState } from 'react';

export function Post(){
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handlePostButtonClick = () => {
    // In a real application, you would handle the post submission here
    console.log('Posting:', text);
    // Reset the text area after posting (optional)
    setText('');
  };

  return (
    
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center bg-black text-white">

        <div className="mt-8 w-96 flex items-center ">
          <textarea
            value={text}
            onChange={handleTextChange}
            placeholder="What do you want to talk about?"
            className="p-2 border text-white border-gray-400 rounded-md text-lg min-h-20 resize-y w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handlePostButtonClick}
            className="bg-white text-black font-semibold py-2 px-4 rounded-full cursor-pointer text-lg self-end mt-2 disabled:bg-gray-400 w-full sm:w-auto"
            disabled={text.trim() === ''} // Disable button if text is empty
          >
            Post
          </button>
        </div>
      </main>
  );
};

// export default Post;