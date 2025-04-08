import React, { lazy } from "react";
import { Routes, Route } from "react-router";
import HomeChatLayout from "../layout/HomeChatLayout";
import ChatHomePage from "../pages/ChatHomePage";
// import Home from "../pages/HomePage";
// import About from "../pages/AboutPage";
// import Contact from "../pages/ContactPage";

const Home = lazy(() => import("../pages/HomePage"));
const About = lazy(() => import("../pages/AboutPage"));
const Contact = lazy(() => import("../pages/ContactPage"));
const Login = lazy(() => import("../pages/LoginPage"));
const Chat = lazy(() => import("../pages/ChatPage"));
const Group = lazy(() => import("../pages/GroupPage"));
const Register = lazy(() => import("../pages/RegisterPage"));

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/chat" element={<HomeChatLayout />}>
        <Route index element={<ChatHomePage />} />
        <Route path=":chatId" element={<Chat />} />
      </Route>
      <Route path="group" element={<Group />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* Add more routes as needed */}
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
};

export default AppRoute;
