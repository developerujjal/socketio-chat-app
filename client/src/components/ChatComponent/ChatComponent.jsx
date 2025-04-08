import React from "react";

const ChatComponent = () => {
  return (
    <div>
      <h2>Chat Box</h2>
      <div>
        {/* Chat messages will be displayed here */}
        <div className="message">Hello, how are you?</div>
        <div className="message">I'm fine, thank you!</div>
        <div className="message">What about you?</div>
        <div className="message">I'm doing well, thanks for asking!</div>
      </div>
    </div>
  );
};

export default ChatComponent;
