import React from "react";
import ChatComponent from "../components/ChatComponent/ChatComponent";
import { useParams } from "react-router";
import { chats } from "../components/Sample/Sample";
import ChatList from "../components/ChatList/ChatList";
import ChatProfileSidebar from "../components/ChatProfileSidebar/ChatProfileSidebar";

const ChatPage = () => {
  const { id } = useParams();

  const user = {
    name: "Adelaide Mainz",
    status: "Online",
    title: "Creative Director",
    location: "Strait Solutions",
    about:
      "Digital design enthusiast with a passion for creating meaningful user experiences.",
    email: "adelaide@straitsolutions.com",
  };

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
      <div className="col-span-3 p-1 bg-gray-100 overflow-y-auto">
        <ChatProfileSidebar user={user} date={"2024-11-04T18:00:00.000Z"} />
      </div>
    </div>
  );
};

export default ChatPage;
