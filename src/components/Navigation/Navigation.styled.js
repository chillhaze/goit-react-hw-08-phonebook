import styled from '@emotion/styled';

export const LinkContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 250px;
  @media (max-width: 550px) {
    flex-direction: column;
    width: 80px;
  }
`;
