import React from "react";
import whatsApp from "../assets/images/logo/whatsApp.png";

const WhatsappButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={whatsApp}
          alt="WhatsApp"
          className="w-16 h-16 drop-shadow-md hover:scale-110 transition-transform duration-300"
        />
      </a>
    </div>
  );
};

export default WhatsappButton;
