import { LoginBox } from './components/LoginBox'
import { Message } from './components/Message/Message'
import { MessageList } from './components/MessageList'
import { GlobalStyle } from './styles/global'
import { ContentWrapper } from './styles/wrapper'

export function App() {

  return (
    <>
      <GlobalStyle />
      <ContentWrapper>
        <MessageList>
          <Message />
          <Message />
          <Message />
        </MessageList>

        <LoginBox />
      </ContentWrapper>
    </>
  )
}