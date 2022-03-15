import { api } from "../../services/api";
import { MessageListWrapper, MessageUnorderedList } from "./style";
import LogoImg from '../../assets/logo.svg';
import { useEffect, useState } from "react";
import { MessageListItem } from "../MessageListItem";

export type Message = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  }
}

export function MessageList() {
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    api.get<Message[]>('messages/last3').then(response => {
      setMessages(response.data)
    })
  }, [])

  return (
    <MessageListWrapper>
      <img src={LogoImg} alt="Logo DoWhile" />

      <MessageUnorderedList>
        {messages.map((message, index) => (
            <MessageListItem key={index} message={message} />
          ))}
      </MessageUnorderedList>
    </MessageListWrapper>
  )
}