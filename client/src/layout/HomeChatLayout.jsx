import React from "react";
import { Outlet } from "react-router";
// import FriendList from "../components/FriendList/FriendList";
import Header from "../components/Shared/Header";

const HomeChatLayout = () => {
  return (
    <>
      <Header />
      {/* Main layout with grid */}
      <div className="h-[calc(100vh-52px)]">
        <Outlet />
      </div>
    </>
  );
};

export default HomeChatLayout;
