import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  width: 250px;
  @media (max-width: 550px) {
    font-size: 12px;
    width: 80px;
  }
`;
export const Title = styled.h2`
  font-weight: 400;
  @media (max-width: 550px) {
    display: none;
  }
`;
export const Accent = styled.span`
  font-weight: 600;
  font-size: 20px;
  @media (max-width: 550px) {
    font-size: 18px;
  }
`;
