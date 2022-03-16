import styled from "styled-components";
import { User } from '../contexts/auth'
import BackgroundImage from '../assets/background.svg'
interface ContentWrapperProps {
  user: User | null;
}

export const ContentWrapper = styled.main<ContentWrapperProps>`
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 453px;
  column-gap: 120px;
  position: relative;

  ${({user}) => !!user && `
    &::before {
      content: '';
      height: 100vh;
      width: 420px;
      background: url(${BackgroundImage}) no-repeat;
      position: absolute;
      right: -200px;
      top: 0;
    }
  `}
`