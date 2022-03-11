import { VscGithubInverted } from 'react-icons/vsc'
import { LoginBoxWrapper, SignInWithGitHub } from "./style";

export function LoginBox() {
  return (
    <LoginBoxWrapper>
      <strong>Entre e compartilhe sua mensagem</strong>
      <SignInWithGitHub href="#">
        <VscGithubInverted size="24" />
        Entrar com GitHub
      </SignInWithGitHub>
    </LoginBoxWrapper>
  )
}