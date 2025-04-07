import React, { lazy } from "react";
import { Routes, Route } from "react-router";
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
      <Route path="/login" element={<Login />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/group" element={<Group />} />
      <Route path="/register" element={<Register />} />
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default AppRoute;
