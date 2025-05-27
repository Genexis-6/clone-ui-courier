import LoadingSection from "../components/LoadingSection";
import Payment from "../components/Payment";
import Header from "../components/Header";
import Footer from "../components/footer";
import { useEffect, useState, useRef } from "react";

export default function PayUpage() {
  const [prcessing, setProcessing] = useState(true);
  const sectionRef = useRef(null);
  const [alreadyPorcessed, setAlreadyProcessed] = useState(
    sessionStorage.getItem("alreadyProcessed") === "true"
  );

  useEffect(() => {
    if (!alreadyPorcessed) {
      setTimeout(() => {
        setProcessing(false);
      }, 3000);
      sessionStorage.setItem("alreadyProcessed", "true");
    }
  }, []);
  useEffect(() => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  console.log(alreadyPorcessed);
  return (
    <div className="content-body">
      <Header />
      {alreadyPorcessed ? (
        <Payment />
      ) : prcessing ? (
        <LoadingSection ref={sectionRef} />
      ) : (
        <Payment />
      )}
      <Footer />
    </div>
  );
}
