import { MessageListWrapper, MessageListUl } from "./style";
import LogoImg from '../../assets/logo.svg';

type Props = {
  children?: JSX.Element | JSX.Element[]
}

export function MessageList({ children }: Props) {
  return (
    <MessageListWrapper>
      <img src={LogoImg} alt="Logo DoWhile" />

      <MessageListUl>
        { children }
      </MessageListUl>
    </MessageListWrapper>
  )
}