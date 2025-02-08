"use client";

import React, { useState } from "react";

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: "Processing..." }]);
    }, 1000);
  };

  return (
    <div className="border p-4 rounded-lg bg-gray-100 flex flex-col">
      <h2 className="text-lg font-semibold mb-2">Chat</h2>
      <div className="h-48 overflow-y-auto border p-2 bg-white rounded">
        {messages.map((msg, idx) => (
          <p key={idx} className={msg.sender === "user" ? "text-right text-blue-600" : "text-left text-green-600"}>
            <strong>{msg.sender === "user" ? "You" : "Bot"}:</strong> {msg.text}
          </p>
        ))}
      </div>
      <div className="flex mt-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-grow border rounded px-2"
        />
        <button onClick={sendMessage} className="ml-2 bg-blue-500 text-white px-4 py-1 rounded">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;
