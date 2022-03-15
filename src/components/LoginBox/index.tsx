import { useContext } from 'react';
import { VscGithubInverted } from 'react-icons/vsc'
import { AuthContext } from '../../contexts/auth';
import { LoginBoxWrapper, SignInWithGitHub } from "./style";

export function LoginBox() {
  const { signInUrl } = useContext(AuthContext)
  return (
    <LoginBoxWrapper>
      <strong>Entre e compartilhe sua mensagem</strong>
      <SignInWithGitHub href={signInUrl}>
        <VscGithubInverted size="24" />
        Entrar com GitHub
      </SignInWithGitHub>
    </LoginBoxWrapper>
  )
}