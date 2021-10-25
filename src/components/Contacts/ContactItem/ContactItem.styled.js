import styled from '@emotion/styled';

export const ListItem = styled.li`
  position: relative;
  min-width: 160px;
  width: 22%;
  padding: 10px 10px;
  margin: 7px;

  color: rgb(111, 121, 124);
  font-size: 14px;
  line-height: 20px;
  text-align: left;

  background-color: #fff;
  border: 1px solid #1976d2;
  border-radius: 5px;
  box-shadow: 1px 3px 10px -4px #050505;

  transition: transform 0.25s linear, -webkit-transform 0.25s linear;
  overflow: hidden;

  &:hover {
    transform: scale(1.1);
  }
`;
export const Name = styled.p`
  font-weight: 400;
`;
export const Number = styled.p`
  font-weight: 600;
`;
export const BtnDelete = styled.button`
  padding: 5px;
  font-size: 20px;
  line-height: 10px;
  position: absolute;
  bottom: 0;
  right: 0;
  color: #1976d2;
  border: 0;
  outline: 0;
  background-color: transparent;
  cursor: pointer;
`;
