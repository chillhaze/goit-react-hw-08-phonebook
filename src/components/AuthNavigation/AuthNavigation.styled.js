import styled from '@emotion/styled';

export const LinkContainer = styled.div`
  width: 250px;
  display: flex;
  /* align-items: center; */
  align-items: flex-end;
  justify-content: end;
  @media (max-width: 550px) {
    flex-direction: column;
    width: 80px;
  }
`;
