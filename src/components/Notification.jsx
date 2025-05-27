import { useEffect, useState } from "react";
import "../assets/css/notification.css";
export default function Notification({ data }) {
  console.log(data);
  return (
    <div className={`notification`}>
      <div className={`alert alert-${data.type} w-75 text-center`}>
        {data.msg_}
      </div>
    </div>
  );
}
