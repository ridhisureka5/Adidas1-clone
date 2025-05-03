import React, { useState } from 'react';
import axios from 'axios';
import './AdidasChatbot.css';

const AdidasChatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hi! Ask me anything about Adidas.", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages(prev => [...prev, userMessage]);
    setInput("");

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "system", content: "You are a helpful Adidas shopping assistant." },
                     { role: "user", content: input }],
          temperature: 0.7
        },
        {
          headers: {
            'Authorization': `Bearer YOUR_OPENAI_API_KEY`,
            'Content-Type': 'application/json'
          }
        }
      );

      const botReply = {
        text: response.data.choices[0].message.content.trim(),
        sender: "bot"
      };

      setMessages(prev => [...prev, botReply]);
    } catch (err) {
      setMessages(prev => [...prev, {
        text: "Oops! Something went wrong while contacting Adidas servers.",
        sender: "bot"
      }]);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chat-header">Adibot</div>
      <div className="chat-messages">
        {messages.map((msg, i) => (
          <div key={i} className={`chat-message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input 
          type="text" 
          placeholder="Ask something..." 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default AdidasChatbot;

