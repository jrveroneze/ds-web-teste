import styled, { css } from 'styled-components';

interface Props {
  error?: boolean;
}

export const Container = styled.input<Props>`
  border-radius: 2px;
  ${({ error }) =>
    error
      ? css`
          border: 1px solid #ff0000;
        `
      : css`
          border: 1px solid #d0d0d0;
        `}
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
