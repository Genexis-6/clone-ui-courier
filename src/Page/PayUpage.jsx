import LoadingSection from "../components/LoadingSection";
import Payment from "../components/Payment";
import Header from "../components/Header";
import Footer from "../components/footer";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function PayUpage({
  displayNotification,
  setNotificationMessage,
}) {
  const [prcessing, setProcessing] = useState(true);
  const navigate = useNavigate;
  const proceed = sessionStorage.getItem("proceed") === "true";
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!proceed) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setProcessing(false);
    }, 2000);
  }, []);
  useEffect(() => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="content-body">
      <Header ref = {sectionRef}/>
      {prcessing ? (
        <LoadingSection />
      ) : (
        <Payment
          displayNotification={displayNotification}
          setNotificationMessage={setNotificationMessage}
        />
      )}
      <Footer />
    </div>
  );
}
