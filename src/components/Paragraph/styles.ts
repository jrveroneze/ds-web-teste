import styled from 'styled-components';

// Interface
interface Props {
  type: 'normal' | 'highlight';
}

export const Container = styled.p<Props>`
  font-size: 14px;
  font-weight: ${({ type }) => (type === 'highlight' ? '500' : '400')};
  line-height: 17px;
`;
