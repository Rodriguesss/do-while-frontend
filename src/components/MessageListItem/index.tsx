import { MessageWrapper, MessageContent, MessageUser, UserImage } from "./style"
import { Message } from "../MessageList"

type Props = {
  message: Message;
}

export function MessageListItem({message} : Props) {
  return (
    <MessageWrapper>
      <MessageContent>{message?.text}</MessageContent>
      <MessageUser>
        <UserImage>
          <img src={message?.user.avatar_url} alt={message?.user.name} />
        </UserImage>
        <span>{message?.user.name}</span>
      </MessageUser>
    </MessageWrapper>
  )
}