import React, { memo, useEffect, useMemo, useState } from "react";
import { Link } from "react-router";

const ChatItem = ({
  chat,
  groupChat,
  sameSender,
  //   isOnline,
  onlineUsers,
  newMessagesAlert,
  index = 0,
  handleDeleteChat,
}) => {
  // ✅ Correct: useMemo for derived values
  const newMessageAlert = useMemo(() => {
    return newMessagesAlert.find((alert) => alert.chatId === chat?._id);
  }, [newMessagesAlert, chat?._id]); // Dependencies

  // ✅ Correct: useMemo for derived values
  const isOnline = useMemo(() => {
    return chat?.members?.some((member) => onlineUsers.includes(member));
  }, [chat?.members, onlineUsers]); // Dependencies

  return (
    <Link
      onContextMenu={(e) => handleDeleteChat(e, chat?._id, groupChat)} // Handle right-click to delete chat
      to={`/chat/${chat?._id}`}
      className={`flex items-center p-2 hover:bg-gray-100 ${
        sameSender ? "bg-gray-200" : "text-black"
      }`}
    >
      <div className="flex-shrink-0 relative w-12 h-12 rounded-full bg-gray-200">
        <img src={chat?.image} className="w-12 h-12 rounded-full" alt="" />

        {isOnline && (
          <span className="bg-green-500 absolute top-0 w-3 h-3 rounded-full"></span>
        )}
      </div>
      <div className="ml-4 flex-grow">
        <h2 className="text-sm font-semibold">{chat?.name}</h2>
        {/* <img src={chat?.image} alt="" /> */}
        {/* <p className="text-xs text-gray-500">{chat.lastMessage}</p> */}
      </div>

      {newMessageAlert && (
        <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 ml-2">
          {newMessageAlert.count} new messages
        </span>
      )}
    </Link>
  );
};

export default memo(ChatItem);
