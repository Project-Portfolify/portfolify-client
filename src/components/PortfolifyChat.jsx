import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import OpenAI from "openai";
import ErrorAlert from "./ErrorAlert";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const PortfolifyChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext); // get isAuthenticated from context

  const toggleChat = () => setIsOpen(!isOpen);


  // chat messages in local storage
  useEffect(() => {
    const savedMessages = JSON.parse(localStorage.getItem("chatMessages"));
    if (savedMessages) {
      setMessages(savedMessages);
    }
  }, []);

  // function to send intro messages
  const sendIntroMessages = () => {
    if (localStorage.getItem("introMessageSent")) return;
    const introMessages = [
      { text: "👋 Hi there! Need help building your portfolio?", sender: "bot" },
      { text: "🚀 I can guide you step-by-step to create an awesome portfolio.", sender: "bot" },
      { text: "💡 Just tell me what you're working on!", sender: "bot" },
    ];

    setMessages((prevMessages) => {
      const updatedMessages = [...prevMessages, ...introMessages];
      localStorage.setItem("chatMessages", JSON.stringify(updatedMessages)); // store in local storage
      return updatedMessages;
    });
    localStorage.setItem("introMessageSent", "true");
  };
   // open chat after 30 seconds
  useEffect(() => {
    if (localStorage.getItem("chatOpenedOnce")) return; // <- verify if chat has been opened once
    const timeout = setTimeout(() => {
      setIsOpen(true);
      sendIntroMessages(); // welcome messages just once
      localStorage.setItem("chatOpenedOnce", "true");
    }, 30000);
  
    return () => clearTimeout(timeout);
  }, []);

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    if (!isAuthenticated) {
      navigate("/login"); // navigate to login page if user is not authenticated
      return;
    }

    const userMessage = { text: input, sender: "user" };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    localStorage.setItem("chatMessages", JSON.stringify(newMessages));
    setInput("");

    try {
      setIsLoading(true);
      const response = await openai.chat.completions.create({
        messages: newMessages.map((msg) => ({
          role: msg.sender === "user" ? "user" : "assistant",
          content: msg.text,
        })),
        model: "gpt-3.5-turbo",
      });

      const botMessage = {
        text: response.choices[0].message.content,
        sender: "bot",
      };

      const updatedMessages = [...newMessages, botMessage];
      setMessages(updatedMessages);
      localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
    } catch (error) {
      setErrorMessage("Error with OpenAI: " + error.message);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Button to open/close chat */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={toggleChat}
        className="w-auto h-14 bg-blue-950 rounded-full flex items-center justify-center gap-2 px-4 shadow-lg text-white hover:bg-blue-900 transition-all"
      >
        <MessageCircle size={28} />
        <span className="text-sm font-medium">Portfolify Chat</span>
      </motion.button>

      {/* Chat window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="w-80 h-96 bg-white rounded-xl shadow-xl flex flex-col overflow-hidden mt-4"
        >
          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg max-w-[75%] ${
                  msg.sender === "user"
                    ? "bg-blue-950 text-white self-end ml-auto"
                    : "bg-gray-200 text-black self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input field */}
          <div className="p-2 border-t border-gray-200 flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
              placeholder={
                isLoading
                  ? "Generating response..."
                  : "Start building your Portfolio..."
              }
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              className={`ml-2 ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-950 hover:bg-blue-900"
              } text-white px-3 py-2 rounded-lg transition-all`}
              disabled={isLoading}
            >
              <Send size={20} />
            </button>
          </div>
        </motion.div>
      )}

      {/* Error Alert */}
      {error && (
        <ErrorAlert message={errorMessage} onClose={() => setError(false)} />
      )}
    </div>
  );
};

export default PortfolifyChat;
