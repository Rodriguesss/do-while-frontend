import { api } from "../../services/api";
import { MessageListWrapper, MessageUnorderedList } from "./style";
import LogoImg from '../../assets/logo.svg';
import { useEffect, useState } from "react";
import io from 'socket.io-client'
import { MessageListItem } from "../MessageListItem";

export type Message = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  }
}

const messagesQueue: Message[] = [];

const socket = io('http://localhost:4000');

socket.on('new_message', (newMessage: Message) => {
  messagesQueue.push(newMessage);
})

export function MessageList() {
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    const timer = setInterval(() => {
      if (messagesQueue.length > 0) {
        setMessages(prevState => [
          messagesQueue[0],
          prevState[0],
          prevState[1],
        ].filter(Boolean))

        messagesQueue.shift()
      }
    }, 3000)
  }, [])

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