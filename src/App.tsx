import { LoginBox } from './components/LoginBox'
import { MessageList } from './components/MessageList'
import { GlobalStyle } from './styles/global'
import { ContentWrapper } from './styles/wrapper'

export function App() {
  return (
    <>
      <GlobalStyle />
      <ContentWrapper>
        <MessageList />
        <LoginBox />
      </ContentWrapper>
    </>
  )
}