import styled from 'styled-components';

export const Container = styled.input`
  border-radius: 2px;
  border: 1px solid #d0d0d0;
  color: #282828;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  margin: 7px 0;
  padding: 11px 14px;
  width: 100%;

  &::placeholder {
    color: #d0d0d0;
  }

  &:focus,
  &:active {
    border-color: #1e5bc6;
  }

  &:invalid {
    border-color: #ff0000;
  }
`;
