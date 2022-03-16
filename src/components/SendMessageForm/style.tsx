import styled from "styled-components";

const SendMessageFormWrapper = styled.div`
  background: #1b1b1f;
  padding: 24px;
  align-self: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  position: relative;
`

const SignOutButton = styled.button`
  background: transparent;
  border: 0;
  color: #c4c4cc;

  position: absolute;
  left: 24px;
  top: 24px;

  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`

const UserInformation = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const UserImage = styled.div`
  padding: 3px;
  background: linear-gradient(100deg, #ff008e 0.48%, #ffcd1e 100%);
  border-radius: 50%;
  line-height: 0;

  img {
    width: 94px;
    height: 94px;
    border-radius: 50%;
    border: 6px solid #121214;
  }
`
const UserName = styled.strong`
  font-size: 24px;
  line-height: 30px;
  margin-top: 16px;
`

const UserGithub = styled.span`
  display: flex;
  align-items: center;

  margin-top: 8px;
  color: #c4c4cc;

  svg {
    margin-right: 8px;
  }
`

const MessageForm = styled.form`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  margin-top: 48px;

  background: #202024;

  label {
    padding:18px 24px;
    font-size: 20px;
    background: #29292e;
    font-weight: bold;
    text-align: left;
  }

  textarea {
    background: transparent;
    border: 0;
    padding: 24px;
    resize: none;
    height: 160px;
    color: #e1e1e6;
    font-size: 16px;
  }

  &:focus {
    outline: 0;
  }

  &::placeholder {
    color: #8d8d99;
  }

  button {
    align-self: flex-end;
    border: 0;
    background: #ff008e;
    cursor: pointer;
    margin: 24px;
    padding: 0 32px;

    height: 40px;

    color: #fff
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export { SendMessageFormWrapper, SignOutButton, UserInformation, UserImage, UserName, UserGithub, MessageForm }