import React from "react";
import { Outlet } from "react-router";
import FriendList from "../components/FriendList/FriendList";
import Header from "../components/Shared/Header";

const HomeChatLayout = () => {
  return (
    <>
      <Header />
      {/* Main layout with grid */}
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
