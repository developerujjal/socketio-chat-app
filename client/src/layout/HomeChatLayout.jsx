import React from "react";
import { Outlet } from "react-router";
import FriendList from "../components/FriendList/FriendList";

const HomeChatLayout = () => {
  return (
    <>
      <header>This is the header of the HomeChatLayout component.</header>
      <div className="grid grid-cols-12 h-screen">
        <div className="col-span-3 border-r overflow-y-auto border">
          <FriendList />
        </div>

        <div className="col-span-9 overflow-y-auto border">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default HomeChatLayout;
