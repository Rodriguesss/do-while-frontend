import styled from "styled-components";
import BannerGirl from '../../assets/banner-girl.png'

const LoginBoxWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: #17171a url(${BannerGirl}) no-repeat center top;

  padding: 440px 80px 0;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  strong {
    font-size: 32px;
    line-height:36px;
  }
`

const SignInWithGitHub = styled.a`
  background: #ffcd1e;

  margin-top: 32px;
  padding: 0 48px;

  height: 56px;

  color: #17171a;
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

  svg {
    margin-right: 10px;
  }
`

export { LoginBoxWrapper, SignInWithGitHub }