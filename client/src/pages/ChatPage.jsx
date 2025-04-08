import React from "react";
import ChatComponent from "../components/ChatComponent/ChatComponent";

const ChatPage = () => {
  return (
    <div className="grid grid-cols-9 h-full">
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
