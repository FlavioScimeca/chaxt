'use client';

import useConversation from "@/app/hooks/useConversation";
import { FullMessageType } from "@/app/types";
import { useRef, useState } from "react";
import MessageBox from "./MessageBox";

interface BodyProps {
  initialMessages : FullMessageType[]
}

const Body : React.FC<BodyProps> = ({initialMessages}) => {

  const [messages, setMessages] = useState(initialMessages)
  const BottomRef = useRef<HTMLDivElement>(null)

  const {conversationId} = useConversation()


  return (
  <div className="flex-1 overflow-y-auto">
    {messages.map((message, idx) => (
      <MessageBox 
      key={message.id}
      isLast={idx == messages.length -1}
      data={message}
      />
    ))}

    <div ref={BottomRef} className="pt-24"/>
  </div>);
};

export default Body;
