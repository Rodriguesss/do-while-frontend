import { FunctionComponent, ReactNode, useContext } from 'react'
import { LoginBox } from './components/LoginBox'
import { MessageList } from './components/MessageList'
import { SendMessageForm } from './components/SendMessageForm'
import { AuthContext } from './contexts/auth'
import { GlobalStyle } from './styles/global'
import { ContentWrapper } from './styles/wrapper'
import { User } from "./contexts/auth"
interface ContentWrapperProps {
  user: User | null;
  children: ReactNode;
}

export const ContentWrapperWithProps: FunctionComponent<ContentWrapperProps> = ({ user, children }) => (
  <ContentWrapper user={user}>
    {children}
  </ContentWrapper>
)

export function App() {
  const { user } = useContext(AuthContext)
  return (
    <>
      <GlobalStyle />
      <ContentWrapperWithProps user={user}>
        <MessageList />
        {!!user ? <SendMessageForm /> : <LoginBox />}
      </ContentWrapperWithProps>
    </>
  )
}