import NavBar from "./components/NavBar";
import ContentBody from "./Page/ContentBody";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import PayUpage from "./Page/PayUpage";
import Notification from "./components/Notification";

function App() {
  const [disableNav, setDisableNav] = useState(
    sessionStorage.getItem("disableNav") === "true"
  );
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState({
    msg_: "",
    type: "",
  });

  const displayNotification = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <>
      {showNotification && <Notification data={notificationMessage} />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              element={
                <ContentBody
                  displayNotification={displayNotification}
                  setNotificationMessage={setNotificationMessage}
                />
              }
              index
            />
          </Route>
          <Route
            element={
              <PayUpage
                displayNotification={displayNotification}
                setNotificationMessage={setNotificationMessage}
              />
            }
            path="/pay"
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
