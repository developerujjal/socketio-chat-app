import React from "react";
import ChatComponent from "../components/ChatComponent/ChatComponent";
import { useParams } from "react-router";
import { chats } from "../components/Sample/Sample";
import ChatList from "../components/ChatList/ChatList";

const ChatPage = () => {
  const { id } = useParams();

  const handleDeleteChat = (e, id, groupChat) => {
    e.preventDefault();
    e.stopPropagation();
    // Handle delete chat logic here
    // You can use the id and groupChat parameters to identify which chat to delete
    console.log("Delete chat clicked");
  };

  return (
    <div className="grid grid-cols-12 h-full">
      {/* Chat List Section */}
      <div className="col-span-3 border-r border">
        <ChatList
          chats={chats}
          chatId={id}
          newMessagesAlert={[{ chatId: id, count: 4 }]}
          onlineUsers={["1"]}
          handleDeleteChat={handleDeleteChat}
        />
      </div>
      {/* Chat Section */}
      <div className="col-span-6 p-4 border-r">
        <ChatComponent />
      </div>

      {/* Profile Section */}
      <div className="col-span-3 p-4 bg-gray-100 overflow-y-auto">
        <h2 className="text-lg font-semibold mb-2">User Profile</h2>
        <p>Details go here...</p>
      </div>
    </div>
  );
};

export default ChatPage;
