import styled from 'styled-components';

const MessageListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  > img {
    height: 28px;
    margin: 32px 0;
  }
`

const MessageUnorderedList = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  flex: 1;
`

export { MessageListWrapper, MessageUnorderedList }