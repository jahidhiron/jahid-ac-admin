import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Search from "../../Common/Search";
import { messageFilter, sortingList } from "../../../utilities/enums";
import Sorting from "../../Common/Sorting";
import { Link } from "react-router-dom";

const messagesData = [
  {
    id: 1,
    sender: "Mohammed Momen-Ali",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    preview: "Nick! If you have good knowledge on this...",
    time: "5m ago",
    unread: true,
    messages: [
      {
        sender: "Mohammed Momen-Ali",
        text: "Nick! If you have good knowledge on this topic, please help!",
        time: "5m ago",
      },
      {
        sender: "You",
        text: "Sure, let me know your questions!",
        time: "Just now",
      },
      {
        sender: "Mohammed Momen-Ali",
        text: "How do I handle authentication in React?",
        time: "Just now",
      },
      {
        sender: "You",
        text: "You can use Firebase Auth or JWT-based authentication.",
        time: "Just now",
      },
    ],
  },
  {
    id: 2,
    sender: "Rodriges Ogata",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    preview: "You! I am sorry to say, I didn’t use any databases...",
    time: "10m ago",
    messages: [
      {
        sender: "Rodriges Ogata",
        text: "You! I am sorry to say, I didn’t use any databases...",
        time: "10m ago",
      },
      {
        sender: "You",
        text: "No problem! Let me guide you with alternatives.",
        time: "Just now",
      },
      {
        sender: "Rodriges Ogata",
        text: "Should I use localStorage?",
        time: "Just now",
      },
      {
        sender: "You",
        text: "It's okay for small data, but IndexedDB or SQLite is better.",
        time: "Just now",
      },
    ],
  },
  {
    id: 3,
    sender: "Ayesha Khan",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    preview: "Thank you! I really appreciate your work...",
    time: "15m ago",
    messages: [
      {
        sender: "Ayesha Khan",
        text: "Thank you! I really appreciate your work on the tutorial!",
        time: "15m ago",
      },
      {
        sender: "You",
        text: "Glad you liked it! Let me know if you have questions.",
        time: "Just now",
      },
    ],
  },
  {
    id: 4,
    sender: "Fatima Noor",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    preview: "Hey! Can you review my latest project?",
    time: "20m ago",
    messages: [
      {
        sender: "Fatima Noor",
        text: "Hey! Can you review my latest project?",
        time: "20m ago",
      },
      { sender: "You", text: "Sure! Send me the link.", time: "Just now" },
      {
        sender: "Fatima Noor",
        text: "Here's the GitHub repo: github.com/fatima/project",
        time: "Just now",
      },
      { sender: "You", text: "Checking it now...", time: "Just now" },
    ],
  },
  {
    id: 5,
    sender: "James Carter",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    preview: "Do you have experience with GraphQL?",
    time: "30m ago",
    unread: true,
    messages: [
      {
        sender: "James Carter",
        text: "Do you have experience with GraphQL?",
        time: "30m ago",
      },
      {
        sender: "You",
        text: "Yes! What do you need help with?",
        time: "Just now",
      },
      {
        sender: "James Carter",
        text: "How do I set up Apollo Client?",
        time: "Just now",
      },
      {
        sender: "You",
        text: "You need to install `@apollo/client` and configure it.",
        time: "Just now",
      },
    ],
  },
  {
    id: 6,
    sender: "Emily Wong",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    preview: "Can you recommend a good UI library?",
    time: "45m ago",
    messages: [
      {
        sender: "Emily Wong",
        text: "Can you recommend a good UI library?",
        time: "45m ago",
      },
      {
        sender: "You",
        text: "Mantine, Tailwind, or Material UI are great choices.",
        time: "Just now",
      },
      {
        sender: "Emily Wong",
        text: "Which one is best for accessibility?",
        time: "Just now",
      },
      {
        sender: "You",
        text: "Mantine has great accessibility features.",
        time: "Just now",
      },
    ],
  },
  {
    id: 7,
    sender: "Liam Patel",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    preview: "How do I deploy a Next.js app?",
    time: "1h ago",
    messages: [
      {
        sender: "Liam Patel",
        text: "How do I deploy a Next.js app?",
        time: "1h ago",
      },
      {
        sender: "You",
        text: "You can use Vercel or Netlify.",
        time: "Just now",
      },
      {
        sender: "Liam Patel",
        text: "Is there a free option?",
        time: "Just now",
      },
      {
        sender: "You",
        text: "Yes, both platforms have free tiers.",
        time: "Just now",
      },
    ],
  },
  {
    id: 8,
    sender: "Sophia Hassan",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    preview: "How can I improve my coding skills?",
    time: "2h ago",
    messages: [
      {
        sender: "Sophia Hassan",
        text: "How can I improve my coding skills?",
        time: "2h ago",
      },
      {
        sender: "You",
        text: "Practice daily, build projects, and read documentation.",
        time: "Just now",
      },
      {
        sender: "Sophia Hassan",
        text: "Any book recommendations?",
        time: "Just now",
      },
      {
        sender: "You",
        text: "‘You Don’t Know JS’ and ‘Clean Code’ are great.",
        time: "Just now",
      },
    ],
  },
  {
    id: 9,
    sender: "Carlos Mendes",
    avatar: "https://randomuser.me/api/portraits/men/9.jpg",
    preview: "What’s the best way to learn TypeScript?",
    time: "3h ago",
    messages: [
      {
        sender: "Carlos Mendes",
        text: "What’s the best way to learn TypeScript?",
        time: "3h ago",
      },
      {
        sender: "You",
        text: "Start with the official docs and small projects.",
        time: "Just now",
      },
      {
        sender: "Carlos Mendes",
        text: "Should I convert an existing React project?",
        time: "Just now",
      },
      {
        sender: "You",
        text: "Yes! That’s a great way to learn gradually.",
        time: "Just now",
      },
    ],
  },
  {
    id: 10,
    sender: "Isabella Brown",
    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
    preview: "Can you explain the difference between Redux and Context API?",
    time: "4h ago",
    messages: [
      {
        sender: "Isabella Brown",
        text: "Can you explain the difference between Redux and Context API?",
        time: "4h ago",
      },
      {
        sender: "You",
        text: "Redux is for large-scale state management, Context API is simpler.",
        time: "Just now",
      },
      {
        sender: "Isabella Brown",
        text: "Which one should I use for a small app?",
        time: "Just now",
      },
      {
        sender: "You",
        text: "Context API should be enough.",
        time: "Just now",
      },
    ],
  },
];

const CommunicationPage = () => {
  const [selectedConversation, setSelectedConversation] = useState({});
  const [sort, setSort] = useState("");
  const [sortFilter, setFilter] = useState("");

  const handleShortChange = (value) => {
    setSort(value);
  };
  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [newMessage]);
  const handleSelectConversation = (conversation) => {
    setSelectedConversation(conversation);
  };
  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    setSelectedConversation({
      ...selectedConversation,
      messages: [
        ...selectedConversation.messages,
        { sender: "You", text: newMessage, time: "Just now" },
      ],
    });
    setNewMessage("");
  };

  return (
    <div className='sm:px-4'>
      <div className='flex gap-5'>
        <h1 className='text-2xl font-bold'>Messages</h1>
      </div>
      <div className='flex justify-between items-center gap-3 mt-4 mb-2'>
        <div className='flex items-center  gap-3'>
          <Sorting
            onChange={handleFilterChange}
            name={"Filter"}
            values={messageFilter}
          />
          <Sorting
            onChange={handleShortChange}
            name={"Sort"}
            values={sortingList}
          />
        </div>
        <Link
          to={"/communication/compose"}
          className='uppercase  text-white bg-primary px-2 font-semibold rounded py-1'
        >
          Compose
        </Link>
      </div>
      <div className='flex h-[600px] bg-gray-100 '>
        <div className='w-1/3 bg-white shadow-md  overflow-y-scroll  relative'>
          <div className='sticky top-0 bg-white z-10 p-2'>
            <Search placeholder='Search messages...' className='py-1' />
          </div>
          <div className='p-4'>
            {messagesData.map((msg) => (
              <div
                key={msg.id}
                className={`p-1  overflow-x-hidden cursor-pointer  flex items-start gap-2 ${
                  selectedConversation?.id === msg.id
                    ? "border-l-4 border-primary"
                    : "border-l-4 border-white"
                }`}
                onClick={() => handleSelectConversation(msg)}
              >
                <img
                  src={msg.avatar}
                  alt={msg.sender}
                  className='w-8 h-8 rounded-full'
                />
                <div>
                  <p className='font-semibold'>{msg.sender}</p>
                  <p
                    className={`${
                      msg.unread ? "font-bold" : ""
                    } text-sm text-gray-600 truncate`}
                  >
                    {msg.preview}
                  </p>
                  <p className='text-xs text-gray-400'>{msg.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='flex-1 bg-white shadow-md  p-2 flex flex-col'>
          {selectedConversation?.messages ? (
            <>
              <h2 className='font-bold text-lg border-b pb-2 mb-2'>
                {selectedConversation?.sender}
              </h2>

              <div className='flex-1 overflow-y-auto space-y-2'>
                {selectedConversation?.messages?.map((msg, index) => (
                  <div
                    key={index}
                    className={`p-2 rounded-md ${
                      msg.sender === "You" ? "" : ""
                    }`}
                  >
                    <div className='flex items-start gap-3'>
                      {msg.sender !== "You" ? (
                        <img
                          src={selectedConversation?.avatar}
                          alt={msg.sender}
                          className='w-8 h-8 rounded-full'
                        />
                      ) : (
                        <img
                          src={"/user.png"}
                          alt={msg.sender}
                          className='w-8 h-8 rounded-full'
                        />
                      )}
                      <div>
                        <p className='text-sm font-semibold'>{msg.sender}</p>
                        <p>{msg.text}</p>
                        <p className='text-xs text-gray-500'>{msg.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              <div className='border-t pt-2 flex items-center gap-2'>
                <input
                  type='text'
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder='Type your message...'
                  className='w-full p-2 border rounded-md outline-none'
                />
                <button
                  onClick={handleSendMessage}
                  className='uppercase  text-white bg-primary px-6 py-2 font-bold'
                >
                  Send
                </button>
              </div>
            </>
          ) : (
            <div className='flex flex-col items-center justify-center h-full text-gray-500'>
              <p> Select a conversation to view messages.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommunicationPage;
