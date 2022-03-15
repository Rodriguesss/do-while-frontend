import styled from "styled-components";

const MessageWrapper = styled.li`
  max-width: 440px;

  &:nth-child(2) {
    margin-left: 80px;
  }
`

const MessageContent = styled.p`
  font-size: 20px;
  line-height: 28px;
`

const MessageUser = styled.div`
  margin-top:16px;
  
  display: flex;
  align-items: center;

  span {
    font-size: 16px;
    margin-left: 12px;
  }
`

const UserImage = styled.div`
  padding: 2px;
  background: linear-gradient(100deg, #ff008e 0.48%, #ffcd1e 100%);
  border-radius: 50%;
  line-height: 0;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 4px solid #121214;
  }
`

export { MessageWrapper, MessageContent, MessageUser, UserImage }