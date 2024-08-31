import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generate } from "../utils/Help";
const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generate(),
          text: "Hello world How are you my friends hope your are fine 🚀",
        })
      );
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div>
      <div className="p-[1rem] flex overflow-y-scroll h-[500px]   flex-col-reverse gap-y-[1rem] border-2 border-gray-100 rounded-md">
        {messages.map((message, index) => (
          <ChatMessage key={index} name={message.name} text={message.text} />
        ))}
      </div>
      <form
        className="border-2 flex p-[1rem]"
        onSubmit={(e) => {
          e.preventDefault();
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="outline-none w-full font-bold  p-[.2rem]"
          placeholder="Chat goes here..."
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch(
              addMessage({
                name: "Satish",
                text: liveMessage,
              })
            );
          }}
          className="p-[.5rem] font-bold bg-black text-white rounded-lg"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
