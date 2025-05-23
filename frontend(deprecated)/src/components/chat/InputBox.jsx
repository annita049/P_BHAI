import React, { useState, useRef } from "react";
import axios from "axios";
import { useChatStore } from "../../store/useChatStore";
function InputBox() {
  const [message, setMessage] = useState("");
  const { sendMessage, selectedUser } = useChatStore();
  const messageRef = useRef(null);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    console.log("send to :", selectedUser._id);
    try {
      sendMessage({
        receiverId: selectedUser._id,
        text: message,
      })
      setMessage(""); 
      messageRef.current.value = "";
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="chat" className="sr-only">
        Your message
      </label>
      <div className="flex items-center px-3 py-3 mx-5 mb-5 rounded-xl bg-gray-900 dark:bg-gray-700">
        <textarea
          id="chat"
          rows="1"
          className="block mx-4 p-2.5 w-full text-sm bg-white focus:outline-none rounded-2xl resize-none"
          placeholder="Your message..."
          ref={messageRef} // Attach ref
          onChange={handleChange}></textarea>
        <button
          type="submit"
          className="inline-flex justify-center p-2 text-white rounded-full cursor-pointer hover:bg-gray-700 dark:text-blue-500 dark:hover:bg-gray-600">
          <svg
            className="w-5 h-5 rotate-90 rtl:-rotate-90"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 20">
            <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
          </svg>
          <span className="sr-only">Send message</span>
        </button>
      </div>
    </form>
  );
}

export default InputBox;
