import styled from 'styled-components';

export const Container = styled.button`
  background-color: #1e5bc6;
  border-radius: 4px;
  border: 0;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 800;
  line-height: 16px;
  padding: 12px 24px;
  text-decoration: none;
  transition: background-color ease-in-out 0.3s;
  width: 224px;

  &:hover {
    background-color: #002c7a;
  }

  &:disabled {
    cursor: auto;
    background-color: #d0d0d0;
  }
`;
