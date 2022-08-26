import styled, { css } from 'styled-components';

interface Props {
  error?: boolean;
}

export const Container = styled.p<Props>`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  ${({ error }) =>
    error
      ? css`
          color: #ff0000;
        `
      : css`
          color: #282828;
        `}
`;
