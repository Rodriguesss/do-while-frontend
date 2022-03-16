import { useContext, useState, FormEvent } from "react";
import { VscGithubInverted, VscSignOut } from "react-icons/vsc";
import { AuthContext } from "../../contexts/auth";
import { api } from "../../services/api";
import { SendMessageFormWrapper, SignOutButton, UserImage, UserInformation, UserName, UserGithub, MessageForm } from "./style";

export function SendMessageForm() {
  const { user, signOut } = useContext(AuthContext)
  const [message, setMessage] = useState('')

  async function handleSendMessage(event: FormEvent) {
    event.preventDefault();

    if (!message.trim()) {
      return;
    }

    await api.post('messages', { message })

    setMessage('');
  }

  return (
    <SendMessageFormWrapper>
      <SignOutButton onClick={signOut}>
        <VscSignOut size="32" />
      </SignOutButton>

      <UserInformation>
        <UserImage>
          <img src={user?.avatar_url} alt={user?.name} />
        </UserImage>

        <UserName>{user?.name}</UserName>
        <UserGithub>
          <VscGithubInverted size="16" />
          {user?.login}
        </UserGithub>
      </UserInformation>

      <MessageForm onSubmit={handleSendMessage}>
        <label htmlFor="message">Mensagem</label>
        <textarea
          name="message"
          id="message"
          placeholder="Qual sua expectativa para o evento?"
          onChange={({ target }) => setMessage(target.value)}
          value={message}
        />

        <button type="submit">Enviar mensagem</button>
      </MessageForm>
    </SendMessageFormWrapper>
  )
}