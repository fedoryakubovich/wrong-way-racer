import React, { useEffect, useRef, useState } from "react";

import { v4 as uuidv4 } from "uuid";

import Chat from "../components/Chat.js";
import { socket, SOCKET_EVENTS } from "../../../utils";

const ChatContainer = () => {
  const [messages, setMessages] = useState([]);
  const endChatRef = useRef(null);

  console.log({ messages });

  useEffect(() => {
    socket.on(SOCKET_EVENTS.newChat, (data) =>
      setMessages((currentMessages) => {
        currentMessages.push({
          type: SOCKET_EVENTS.newChat,
          data,
          id: uuidv4(),
        });

        return [...currentMessages];
      })
    );
    socket.on(SOCKET_EVENTS.newChatJoin, (data) =>
      setMessages((currentMessages) => {
        currentMessages.push({
          type: SOCKET_EVENTS.newChatJoin,
          data,
          id: uuidv4(),
        });

        return [...currentMessages];
      })
    );

    return () => {
      socket.off(SOCKET_EVENTS.newChat);
      socket.off(SOCKET_EVENTS.newChatJoin);
    };
  }, []);

  useEffect(() => {
    endChatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return <Chat messages={messages} endChatRef={endChatRef} />;
};

export default ChatContainer;
