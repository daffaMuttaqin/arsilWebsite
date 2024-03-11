import React from "react";
import whatsApp from "../assets/images/logo/whatsApp.png";

const WhatsappButton = () => {
  return (
    <div className="fixed bottom-0 right-0 z-50 p-6 ">
      <a href="#">
        <img
          src={whatsApp}
          alt=""
          className="w-h-20 h-20 drop-shadow-md hover:scale-110 duration-300"
        />
      </a>
    </div>
  );
};

export default WhatsappButton;
