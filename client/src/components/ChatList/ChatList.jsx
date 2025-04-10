import React from "react";
import ChatItem from "../Shared/ChatItem/ChatItem";

const ChatList = ({
  width = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [{ c: "0", count: 0 }],
  handleDeleteChat,
}) => {
  return (
    <div
      className="flex flex-col gap-2 overflow-y-auto h-full"
      style={{ width }}
    >
      {chats.map((chat, index) => {
        return (
          <ChatItem
            key={chat?._id}
            index={index}
            chat={chat}
            groupChat={chat?.groupChat}
            sameSender={chat?._id === chatId}
            onlineUsers={onlineUsers}
            newMessagesAlert={newMessagesAlert}
            handleDeleteChat={handleDeleteChat}
          />
        );
      })}
    </div>
  );
};

export default ChatList;
