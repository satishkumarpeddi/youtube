import React from "react";
import { FaUserCircle } from "react-icons/fa";

const ChatMessage = ({ name, text }) => {
  return (
    <div className="flex items-start gap-x-[.5rem]">
      <FaUserCircle className="text-[1.8rem]" />
      <div className="flex gap-x-[.5rem]">
        <p className="font-bold">{name}</p>
        <p className="">{text}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
