import "../assets/css/content-body.css";

import HomeSection from "../components/HomeSection";

import Header from "../components/Header";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ContentBody({displayNotification,  setNotificationMessage}) {
  const navigate = useNavigate();

  return (
    <div className="content-body">
      <Header />
      <HomeSection navigate={navigate} 
      displayNotification={displayNotification} setNotificationMessage={setNotificationMessage}
      />
      <Footer />
    </div>
  );
}
