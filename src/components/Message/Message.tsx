import { MessageWrapper, MessageContent, MessageUser, UserImage } from "./style"

export function Message() {
  return (
    <MessageWrapper>
      <MessageContent>Não vejo a hora de começar esse evento, com certeza vai ser o melhor!</MessageContent>
      <MessageUser>
        <UserImage>
          <img src="https://github.com/rodriguesss.png" alt="Vinicius Rodrigues" />
        </UserImage>
        <span>Vinícius Rodrigues</span>
      </MessageUser>
    </MessageWrapper>
  )
}